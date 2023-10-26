---
title: 'The DevOps Tool Box: Bash Scripting'
date: '2023-10-19'
image: bash.png
excerpt:  "Bash scripting is the vital ingredient in DevOps, enabling efficiency and automation. By mastering Bash scripting, you can streamline tasks, increase productivity, and empower your team to focus on more strategic initiatives. Let's dive deeper into scripts and learn how to write them."
isFeatured: true
---

## 1. Introduction.

Hello and welcome, all of you who have decided to join me in this fascinating topic of Bash Scripting. This is going to be one of the most exciting articles I have written so far. I'm really pumped up to share my knowledge about scripts.

Bash scripting is a method used by system administrators to automate repetitive tasks on Linux servers. These tasks, known as robotic tasks, are written in a text file called a bash script. Bash scripting specifically refers to scripting for the bash shell in Linux. Learning bash scripting not only helps in automating tasks but also forms the foundation for understanding and mastering more advanced automation tools like Ansible, Puppet, and Chef. Bash scripts instruct the system on which commands to execute, enhancing efficiency and providing confidence in scripting abilities.

---

###### In addition to bash scripting, there are other types of scripts available, such as sh, ksh, and zsh, each associated with specific shells in Linux.

---

## 2. First Script

Let's not waste any more time and create four virtual machines using Vagrant. For those who are not familiar with Vagrant, I recommend gaining a basic understanding. Perhaps I will write a separate technical article on how to set up and use Vagrant. Okay, let's continue and bring our VMs up using the Vagrantfile.

```bash
$ cat Vagrantfile
Vagrant.configure("2") do |config|
  config.vm.define "scriptbox" do |scriptbox|
    scriptbox.vm.box = "eurolinux-vagrant/centos-stream-9"
        scriptbox.vm.network "private_network", ip: "192.168.56.12"
        scriptbox.vm.hostname = "scriptbox"
        scriptbox.vm.provider "virtualbox" do |vb|
     vb.memory = "1024"
   end
  end

  config.vm.define "web01" do |web01|
    web01.vm.box = "eurolinux-vagrant/centos-stream-9"
        web01.vm.network "private_network", ip: "192.168.56.13"
        web01.vm.hostname = "web01"
  end

  config.vm.define "web02" do |web02|
    web02.vm.box = "eurolinux-vagrant/centos-stream-9"
        web02.vm.network "private_network", ip: "192.168.56.14"
        web02.vm.hostname = "web02"
  end

   config.vm.define "web03" do |web03|
    web03.vm.box = "ubuntu/jammy64"
        web03.vm.network "private_network", ip: "192.168.56.15"
        web03.vm.hostname = "web03"
  end
end
```

I'll have three virtual machines (scriptbox, web01, web02) that are using the same box, CentOS 9 (that might be updated in a future), and they all have their own unique IP. I'll also have one VM that will run the Ubuntu system on it (web03). We're going to write all scripts in scriptbox, and then we will push the scripts remotely to web01, web02, and web03.

For now, let's bring up the scriptbox VM and write our first script.
Since we have multiple VMs set up, we need to provide the name of the VM that we want to bring up.

```bash
$ vagrant up scriptbox
==> vagrant: A new version of Vagrant is available: 2.4.0 (installed version: 2.3.7)!
==> vagrant: To upgrade visit: https://www.vagrantup.com/downloads.html

Bringing machine 'scriptbox' up with 'virtualbox' provider...
==> scriptbox: Checking if box 'eurolinux-vagrant/centos-stream-9' version '9.0.30' is up to date...
==> scriptbox: A newer version of the box 'eurolinux-vagrant/centos-stream-9' for provider 'virtualbox' is
==> scriptbox: available! You currently have version '9.0.30'. The latest is version
==> scriptbox: '9.0.31'. Run `vagrant box update` to update.
==> scriptbox: Clearing any previously set forwarded ports...
==> scriptbox: Clearing any previously set network interfaces...
==> scriptbox: Preparing network interfaces based on configuration...
    scriptbox: Adapter 1: nat
    scriptbox: Adapter 2: hostonly
==> scriptbox: Forwarding ports...
    scriptbox: 22 (guest) => 2222 (host) (adapter 1)
==> scriptbox: Running 'pre-boot' VM customizations...
==> scriptbox: Booting VM...
==> scriptbox: Waiting for machine to boot. This may take a few minutes...
    scriptbox: SSH address: 127.0.0.1:2222
    scriptbox: SSH username: vagrant
    scriptbox: SSH auth method: private key
    scriptbox: Warning: Connection reset. Retrying...
    scriptbox: Warning: Connection aborted. Retrying...
==> scriptbox: Machine booted and ready!
==> scriptbox: Checking for guest additions in VM...
    scriptbox: No guest additions were detected on the base box for this VM! Guest
    scriptbox: additions are required for forwarded ports, shared folders, host only
    scriptbox: networking, and more. If SSH fails on this machine, please install
    scriptbox: the guest additions and repackage the box to continue.
    scriptbox:
    scriptbox: This is not an error message; everything may continue to work properly,
    scriptbox: in which case you may ignore this message.
==> scriptbox: Setting hostname...
==> scriptbox: Configuring and enabling network interfaces...
==> scriptbox: Rsyncing folder: /cygdrive/f/vagrant-vms/Bash_Scripts/ => /vagrant
==> scriptbox: Machine already provisioned. Run `vagrant provision` or use the `--provision`
==> scriptbox: flag to force provisioning. Provisioners marked to run always will still run.

```

Now, I can log to VM and switch to the root user, I hope you remember how:

```bash
$ vagrant ssh scriptbox
This box was generated by EuroLinux

Any suggestions are welcome at https://github.com/EuroLinux/cloud-images-rfc/

Happy using.
To delete this message use:
echo '' > /etc/motd
Last login: Thu Oct 19 15:14:21 2023 from 10.0.2.2
[vagrant@scriptbox ~]$ sudo -i
[root@scriptbox ~]#
```

There is no need to set the hostname as that step has already been taken care of in the Vagrantfile.

Let's create folder where I'll write all the scripts.

```bash
[root@scriptbox scripts]# mkdir /opt/scripts/
[root@scriptbox scripts]# cd /opt/scripts/
```

We are using VIM to write scripts, so let's create first script now.

```bash
[root@scriptbox scripts]# vim 1_firstscript.sh
[root@scriptbox scripts]# cat 1_firstscript.sh
#!/bin/bash

### This script prints system info ###

echo "Welcome to bash script"
echo

# Checking system uptime
echo "######################################"
echo "The uptime of the system is: "
uptime
echo

# Checking system memory utilization
echo "######################################"
echo "Memory Utilization"
free -m
echo

# Checking disk utilization
echo "######################################"
echo "Disk Utilization"
df -h

```

This script is a simple example of a bash script that prints system information. The shebang #!, which consists of one character, specifies the path of the interpreter. When the script is executed, it instructs the system to open the specified interpreter and execute all the commands written in that interpreter's syntax. This means that if the script is a Python script, the shebang will specify the path of the Python interpreter, and if it's a Ruby script, it will specify the path of the Ruby interpreter. In the case of a bash script, the shebang specifies the path of the bash interpreter.

The script starts by printing a welcome message, we're using for that **echo** command, followed by headers for each section of system information. It then prints the system uptime using the "uptime" command, system memory utilization using the "free -m" command, and disk utilization using the "df -h" command.

When running a script, you need to provide its path, which can be either an absolute or relative path. When using a relative path, you need to include the dot (current working directory), followed by a forward slash and the script name. If the script does not execute, and you receive a "permission denied" error, it means that the file does not have execution permissions for the root user, group, or others.

```bash
[root@scriptbox scripts]# ./1_firstscript.sh
-bash: ./1_firstscript.sh: Permission denied
[root@scriptbox scripts]#
```

We already know, how to fix this, we have to give it executable permission:

```bash
[root@scriptbox scripts]# chmod +x 1_firstscript.sh
[root@scriptbox scripts]# ls -l 1_firstscript.sh
-rwxr-xr-x. 1 root root 437 Oct 18 13:50 1_firstscript.sh
```

Now, we can execute our script, so do it:

```bash
[root@scriptbox scripts]# ./1_firstscript.sh
Welcome to bash script

######################################
The uptime of the system is:
 14:27:50 up  1:24,  1 user,  load average: 0.00, 0.00, 0.00

######################################
Memory Utilization
               total        used        free      shared  buff/cache   available
Mem:             757         277         335           5         270         479
Swap:           1023           0        1023

######################################
Disk Utilization
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        4.0M     0  4.0M   0% /dev
tmpfs           379M     0  379M   0% /dev/shm
tmpfs           152M  5.6M  146M   4% /run
/dev/sda2        78G  2.1G   76G   3% /
/dev/sda1      1014M  237M  778M  24% /boot
tmpfs            76M     0   76M   0% /run/user/1000
[root@scriptbox scripts]#
```

Great, our first script is working. It is good practice to make the output of our script readable for the user and also to include comments inside the script for ourselves or other developers.

## 3. Setting up a simple website with scripts.

Let's check the case whereas DevOps we need to set up website. Of course, we can do it manually, but we will be working on a sample use case where we need to execute a series of commands to set up a website. Instead of manually running each command, we will write a script to automate the process for us.
Let's create a file 2_websitesetup.sh and edit using vim editor. Inside let's write step-by-step instructions on how to set up the website.

```bash
[root@scriptbox scripts]# vim 2_websitesetup.sh
[root@scriptbox scripts]# cat 2_websitesetup.sh
#!/bin/bash

# Installing Dependencies
echo "########################################"
echo "Installing packages."
echo "########################################"

sudo yum install httpd wget unzip -y > /dev/null

# Start & Enable Service
echo "########################################"
echo "Start & Enable HTTPD Service"
echo "########################################"

sudo systemctl start httpd
sudo systemctl enable httpd
echo

# Creating Temp Directory
echo "########################################"
echo "Starting Artifact Deployment"
echo "########################################"
mkdir -p /tmp/webfiles
cd /tmp/webfiles
echo

wget https://www.tooplate.com/zip-templates/2098_health.zip > /dev/null
unzip 2098_health.zip > /dev/null
sudo cp -r 2098_health/* /var/www/html
echo

# Bounce Service
echo "########################################"
echo "Restarting HTTPD service"
echo "########################################"
sudo systemctl restart httpd
echo

# Clean Up
echo "########################################"
echo "Removing Temporary Files"
echo "########################################"
rm -rf /tmp/webfiles
echo

sudo systemctl status httpd
ls /var/www/html

[root@scriptbox scripts]#

```

So, now we can run this file and see if our script is working.

```bash
[root@scriptbox scripts]# ./2_websitesetup.sh
########################################
Installing packages.
########################################
########################################
Start & Enable HTTPD Service
########################################

########################################
Starting Artifact Deployment
########################################

--2023-10-24 13:06:16--  https://www.tooplate.com/zip-templates/2098_health.zip
Resolving www.tooplate.com (www.tooplate.com)... 72.52.176.250
Connecting to www.tooplate.com (www.tooplate.com)|72.52.176.250|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 1521593 (1.5M) [application/zip]
Saving to: ‘2098_health.zip’

2098_health.zip           100%[=====================================>]   1.45M  1.47MB/s    in 1.0s

2023-10-24 13:06:19 (1.47 MB/s) - ‘2098_health.zip’ saved [1521593/1521593]


########################################
Restarting HTTPD service
########################################

########################################
Removing Temporary Files
########################################

● httpd.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; preset: disabled)
     Active: active (running) since Tue 2023-10-24 13:06:21 UTC; 186ms ago
       Docs: man:httpd.service(8)
   Main PID: 6370 (httpd)
     Status: "Started, listening on: port 80"
      Tasks: 213 (limit: 4614)
     Memory: 26.8M
        CPU: 148ms
     CGroup: /system.slice/httpd.service
             ├─6370 /usr/sbin/httpd -DFOREGROUND
             ├─6371 /usr/sbin/httpd -DFOREGROUND
             ├─6372 /usr/sbin/httpd -DFOREGROUND
             ├─6373 /usr/sbin/httpd -DFOREGROUND
             └─6374 /usr/sbin/httpd -DFOREGROUND

Oct 24 13:06:21 scriptbox systemd[1]: Starting The Apache HTTP Server...
Oct 24 13:06:21 scriptbox httpd[6370]: AH00558: httpd: Could not reliably determine the server's fully >
Oct 24 13:06:21 scriptbox systemd[1]: Started The Apache HTTP Server.
Oct 24 13:06:21 scriptbox httpd[6370]: Server configured, listening on: port 80
'ABOUT THIS TEMPLATE.txt'   font-awesome-4.5.0   images   index.html   news-detail.html
 css                        fonts                img      js           slick
[root@scriptbox scripts]#

```

The last step is to check the IP address where we can access our website.

```bash
[root@scriptbox scripts]# ip addr show
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
    inet6 ::1/128 scope host
       valid_lft forever preferred_lft forever
2: enp0s3: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:be:64:91 brd ff:ff:ff:ff:ff:ff
    inet 10.0.2.15/24 brd 10.0.2.255 scope global dynamic noprefixroute enp0s3
       valid_lft 86133sec preferred_lft 86133sec
    inet6 fe80::a00:27ff:febe:6491/64 scope link noprefixroute
       valid_lft forever preferred_lft forever
3: enp0s8: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether 08:00:27:0a:58:d4 brd ff:ff:ff:ff:ff:ff
    inet 192.168.56.12/24 brd 192.168.56.255 scope global noprefixroute enp0s8
       valid_lft forever preferred_lft forever
    inet6 fe80::a00:27ff:fe0a:58d4/64 scope link
       valid_lft forever preferred_lft forever
[root@scriptbox scripts]#

```

Great, our website should be up and running. We can check it here at **http://192.168.56.12**. Awesome! Let's move on to the next step.

We can make use of the concept of variables, similar to what we use in programming, to store temporary values in memory. Thanks to this, we can further improve our script. I will now create another file:

```bash
[root@scriptbox scripts]# vim 3_vars_websitesetup.sh

[root@scriptbox scripts]# cat 3_vars_websitesetup.sh
#!/bin/bash

############################################################
#            All Available Template Names                  #
############################################################
# 2137_barista_cafe                                        #
# 2136_kool_form_pack                                      #
# 2135_mini_finance                                        #
# 2133_moso_interior                                       #
# 2107_new_spot                                            #
# 2096_individual                                          #
# 2100_artist                                              #
# 2108_dashboard                                           #
# 2103_central                                             #
# 2106_soft_landing                                        #
# 2131_wedding_lite                                        #
############################################################

PACKAGES="httpd wget unzip"
SVC="httpd"
TEMPLATE_NAME="2106_soft_landing"
URL='https://www.tooplate.com/zip-templates/'$TEMPLATE_NAME'.zip'
TEMPDIR="/tmp/webfiles"

# Installing Dependencies
echo "########################################"
echo "Installing packages."
echo "########################################"

sudo yum install $PACKAGES -y > /dev/null

# Start & Enable Service
echo "########################################"
echo "Start & Enable HTTPD Service"
echo "########################################"

sudo systemctl start $SVC
sudo systemctl enable $SVC
echo

# Creating Temp Directory
echo "########################################"
echo "Starting Artifact Deployment"
echo "########################################"
mkdir -p $TEMPDIR
cd $TEMPDIR
echo

wget $URL > /dev/null
unzip $TEMPLATE_NAME.zip > /dev/null
sudo cp -r $TEMPLATE_NAME/* /var/www/html
echo

# Bounce Service
echo "########################################"
echo "Restarting HTTPD service"
echo "########################################"
sudo systemctl restart $SVC
echo

# Clean Up
echo "########################################"
echo "Removing Temporary Files"
echo "########################################"
rm -rf $TEMPDIR
echo

sudo systemctl status $SVC
ls /var/www/html
echo

echo ###################################################
echo "You can see your web template at this IP Address"
echo ###################################################
ip addr show | grep 192.168

[root@scriptbox scripts]#

```

As you can see, I have created an improved bash script where I am utilizing variables. Additionally, I have included comments so that you can easily modify the template name. This script is more flexible and reusable. At the beginning of the script, we can define the packages we want to install and the services we want to start. This feature is very useful.

I am planning to dismantle everything by writing a script to remove the service and data before executing it. I want to stop the httpd service, remove the data and packages. Although it may not be necessary, I still want to remove everything first to accurately show the execution.

```bash
[root@scriptbox scripts]# vim dismantle.sh
[root@scriptbox scripts]# cat dismantle.sh
#!/bin/bash

sudo systemctl stop httpd
sudo rm -rf /var/www/html/*
sudo yum remove httpd wget unzip -y

[root@scriptbox scripts]# cat dismantle.sh
#!/bin/bash

sudo systemctl stop httpd
sudo rm -rf /var/www/html/*
sudo yum remove httpd wget unzip -y

[root@scriptbox scripts]# ./dismantle.sh
Dependencies resolved.
=========================================================================================================
 Package                       Architecture      Version                     Repository             Size
=========================================================================================================
Removing:
  mod_lua-2.4.57-5.el9.x86_64                         unzip-6.0-56.el9.x86_64
  wget-1.21.1-7.el9.x86_64
...
Complete!

[root@scriptbox scripts]#

```

Let's run our improved script and see if it's working. Remember to give permission to execute this script **chmod +x 3_vars_websitesetup.sh**

```bash
[root@scriptbox scripts]# ./3_vars_websitesetup.sh
########################################
Installing packages.
########################################
########################################
Start & Enable HTTPD Service
########################################

########################################
Starting Artifact Deployment
########################################

--2023-10-24 17:58:27--  https://www.tooplate.com/zip-templates/2106_soft_landing.zip
Resolving www.tooplate.com (www.tooplate.com)... 72.52.176.250
Connecting to www.tooplate.com (www.tooplate.com)|72.52.176.250|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 2578372 (2.5M) [application/zip]
Saving to: ‘2106_soft_landing.zip’

2106_soft_landing.zip     100%[=====================================>]   2.46M  2.21MB/s    in 1.1s

2023-10-24 17:58:30 (2.21 MB/s) - ‘2106_soft_landing.zip’ saved [2578372/2578372]


########################################
Restarting HTTPD service
########################################

########################################
Removing Temporary Files
########################################

● httpd.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; preset: disabled)
     Active: active (running) since Tue 2023-10-24 17:58:32 UTC; 156ms ago
       Docs: man:httpd.service(8)
   Main PID: 11886 (httpd)
     Status: "Started, listening on: port 80"
      Tasks: 213 (limit: 4614)
     Memory: 26.8M
        CPU: 143ms
     CGroup: /system.slice/httpd.service
             ├─11886 /usr/sbin/httpd -DFOREGROUND
             ├─11887 /usr/sbin/httpd -DFOREGROUND
             ├─11888 /usr/sbin/httpd -DFOREGROUND
             ├─11889 /usr/sbin/httpd -DFOREGROUND
             └─11891 /usr/sbin/httpd -DFOREGROUND

Oct 24 17:58:32 scriptbox systemd[1]: Starting The Apache HTTP Server...
Oct 24 17:58:32 scriptbox httpd[11886]: AH00558: httpd: Could not reliably determine the server's fully>
Oct 24 17:58:32 scriptbox systemd[1]: Started The Apache HTTP Server.
Oct 24 17:58:32 scriptbox httpd[11886]: Server configured, listening on: port 80
'ABOUT THIS TEMPLATE.txt'   font-awesome-4.5.0   images   index.html   news-detail.html
 css                        fonts                img      js           slick


You can see your web template at this IP Address

    inet 192.168.56.12/24 brd 192.168.56.255 scope global noprefixroute enp0s8
[root@scriptbox scripts]#

```

We can once again check if our website is running by pasting **192.168.56.12** address in a browser window. Cool, this is great! We're getting better at writing a bash scripts.

## 4. Command lines arguments

When we run a program in the command line, you would be familiar with supplying arguments after it to control its behavior. For instance, we could run the command **ls -l** and **/tmp** as both command line arguments to the command ls. We can do something similar with our bash scripts.

I will write a script to visualize that:

```bash
[root@scriptbox scripts]# vim 4_args.sh
[root@scriptbox scripts]# cat 4_args.sh
#!/bin/bash

echo "Value of 0 is"
echo $0

echo "Value of 1 is"
echo $1

echo "Value of 2 is"
echo $2

echo "Value of 3 is"
echo $3

[root@scriptbox scripts]#

```

If we run this script now, you will see what is the output of each echo $value:

```bash
[root@scriptbox scripts]# ./4_args.sh
Value of 0 is
./4_args.sh
Value of 1 is

Value of 2 is

Value of 3 is

[root@scriptbox scripts]#

```

So, we see that the value of 0 is the name of the script or path of the script, but the echo values 1, 2, and 3 are empty. That means we didn't pass any arguments. Let's try to run this script again, but this time I'll pass some arguments.

```bash
[root@scriptbox scripts]# ./4_args.sh 250 6 Hello
Value of 0 is
./4_args.sh
Value of 1 is
250
Value of 2 is
6
Value of 3 is
Hello
[root@scriptbox scripts]#

```

This time I passed 3 arguments to my script, and now I can see their values. So basically, we can pass up to $1-$9 arguments to our script, and we need to remember that the $0 value will be our script name or path. Now that we know this, we can modify our website script once again. Instead of hardcoding the whole URL or template name inside our script, we can pass it as a script argument. Let's see an example of that.

```bash
[root@scriptbox scripts]# vim 5_args_websitesetup.sh
[root@scriptbox scripts]# cat 5_args_websitesetup.sh
#!/bin/bash

############################################################
#            All Available Templates Name                  #
############################################################
# 2137_barista_cafe                                        #
# 2136_kool_form_pack                                      #
# 2135_mini_finance                                        #
# 2133_moso_interior                                       #
# 2107_new_spot                                            #
# 2096_individual                                          #
# 2100_artist                                              #
# 2108_dashboard                                           #
# 2103_central                                             #
# 2106_soft_landing                                        #
# 2131_wedding_lite                                        #
############################################################

PACKAGES="httpd wget unzip"
SVC="httpd"
#TEMPLATE_NAME="2106_soft_landing"
URL='https://www.tooplate.com/zip-templates/'$1'.zip'
TEMPDIR="/tmp/webfiles"

# Installing Dependencies
echo "########################################"
echo "Installing packages."
echo "########################################"

sudo yum install $PACKAGES -y > /dev/null

# Start & Enable Service
echo "########################################"
echo "Start & Enable HTTPD Service"
echo "########################################"

sudo systemctl start $SVC
sudo systemctl enable $SVC
echo

# Creating Temp Directory
echo "########################################"
echo "Starting Artifact Deployment"
echo "########################################"
mkdir -p $TEMPDIR
cd $TEMPDIR
echo

wget $URL > /dev/null
unzip $1.zip > /dev/null
sudo cp -r $1/* /var/www/html
echo

# Bounce Service
echo "########################################"
echo "Restarting HTTPD service"
echo "########################################"
sudo systemctl restart $SVC
echo

# Clean Up
echo "########################################"
echo "Removing Temporary Files"
echo "########################################"
rm -rf $TEMPDIR
echo

sudo systemctl status $SVC
ls /var/www/html
echo

echo ###################################################
echo "You can see your web template at this IP Address"
echo ###################################################
ip addr show | grep 192.168

[root@scriptbox scripts]#

```

I'm not using the **TEMPLATE_NAME** variable, but I'm using the first argument **$1** that I'll pass to my script, and that will be my template name. I could pass the whole URL, but since this URL doesn't change frequently, I'll have it hardcoded in my script and only dynamically inject the template name.

```bash

[root@scriptbox scripts]# ./5_args_websitesetup.sh 2137_barista_cafe
########################################
Installing packages.
########################################
########################################
Start & Enable HTTPD Service
########################################
Created symlink /etc/systemd/system/multi-user.target.wants/httpd.service → /usr/lib/systemd/system/httpd.service.

########################################
Starting Artifact Deployment
########################################

--2023-10-25 06:29:51--  https://www.tooplate.com/zip-templates/2137_barista_cafe.zip
Resolving www.tooplate.com (www.tooplate.com)... 72.52.176.250
Connecting to www.tooplate.com (www.tooplate.com)|72.52.176.250|:443... connected.
HTTP request sent, awaiting response... 200 OK
Length: 4679329 (4.5M) [application/zip]
Saving to: ‘2137_barista_cafe.zip’

2137_barista_cafe.zip   100%[=============================>]   4.46M  3.43MB/s    in 1.3s

2023-10-25 06:29:54 (3.43 MB/s) - ‘2137_barista_cafe.zip’ saved [4679329/4679329]


########################################
Restarting HTTPD service
########################################

########################################
Removing Temporary Files
########################################

● httpd.service - The Apache HTTP Server
     Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; preset: disabled)
     Active: active (running) since Wed 2023-10-25 06:29:55 UTC; 145ms ago
       Docs: man:httpd.service(8)
   Main PID: 6244 (httpd)
     Status: "Started, listening on: port 80"
      Tasks: 213 (limit: 4614)
     Memory: 26.8M
        CPU: 126ms
     CGroup: /system.slice/httpd.service
             ├─6244 /usr/sbin/httpd -DFOREGROUND
             ├─6245 /usr/sbin/httpd -DFOREGROUND
             ├─6246 /usr/sbin/httpd -DFOREGROUND
             ├─6247 /usr/sbin/httpd -DFOREGROUND
             └─6249 /usr/sbin/httpd -DFOREGROUND

Oct 25 06:29:55 scriptbox systemd[1]: Starting The Apache HTTP Server...
Oct 25 06:29:55 scriptbox httpd[6244]: AH00558: httpd: Could not reliably determine the serve>
Oct 25 06:29:55 scriptbox systemd[1]: Started The Apache HTTP Server.
Oct 25 06:29:55 scriptbox httpd[6244]: Server configured, listening on: port 80
'ABOUT THIS TEMPLATE.txt'   fonts    index.html   reservation.html
 css                        images   js           videos


You can see your web template at this IP Address

    inet 192.168.56.12/24 brd 192.168.56.255 scope global noprefixroute enp0s8
[root@scriptbox scripts]#

```

#### System Variables

There are a few other variables that the system sets for you to use as well.

---

- $0 - The name of the Bash script.
- $1-$9 - The first arguments to the Bash script.
- $# - How many arguments were passed to the Bash script.
- $@ - All the arguments supplied to the Bash script.
- $? - The exit status of the most recently run process.(Very important and usefull).
- $$ - The process ID of the current script.
- $USER - The username of the user running the script.
- $HOSTNAME - The hostname of the machine the script is running on.
- $SECONDS - The number of seconds since the script was started.
- $RANDOM - Returns a different random number each time is it referred to.
- $LINENO - Returns the current line number in the Bash script.
- $PWD: The current working directory path.
- $SHELL: The shell being used for the current session.
- $PATH: The search path for executable commands.
- $LANG: The default language setting.
- $TZ: The time zone setting.

---

##### $? - The exit status of the last command.

Now, this is interesting, and we are going to use this a lot later. So let's see what this really is and how it works.

Let me run **free -m** and then I will use $?:

```bash
[root@scriptbox scripts]# free -m
              total        used        free      shared  buff/cache   available
Mem:             757         311         208           8         371         446
Swap:           1023           0        1023
[root@scriptbox scripts]# echo $?
0
[root@scriptbox scripts]#

```

I'm checking the value of the exit code using $?, and the value is zero. If, for some reason, the command that we are running fails, maybe because I made a typo somewhere, the exit code status value will be non-zero or one. So basically, what this means is if you get zero, it means the last command was a success. If you get a non-zero value, it means the last command failed.

```bash
[root@scriptbox scripts]# freee -ms
-bash: freee: command not found
[root@scriptbox scripts]#
[root@scriptbox scripts]# echo $?
130
[root@scriptbox scripts]# free -madasdas
free: invalid option -- 'a'

Usage:
 free [options]

Options:
 -b, --bytes         show output in bytes
     --kilo          show output in kilobytes
     --mega          show output in megabytes
     --giga          show output in gigabytes
     --tera          show output in terabytes
     --peta          show output in petabytes
 -k, --kibi          show output in kibibytes
 -m, --mebi          show output in mebibytes
 -g, --gibi          show output in gibibytes
     --tebi          show output in tebibytes
     --pebi          show output in pebibytes
 -h, --human         show human-readable output
     --si            use powers of 1000 not 1024
 -l, --lohi          show detailed low and high memory statistics
 -t, --total         show total for RAM + swap
 -s N, --seconds N   repeat printing every N seconds
 -c N, --count N     repeat printing N times, then exit
 -w, --wide          wide output

     --help     display this help and exit
 -V, --version  output version information and exit

For more details see free(1).
[root@scriptbox scripts]# echo $?
1
```

You can check the rest of these system variables and see what they do. Play around with them. For example, when you want to generate a random number, you can use the $RANDOM system variable. $HOSTNAME gives you the hostname, etc.

## 5. Command Substitution.

The variables defined within a script exist and cease to exist along with the script's execution or completion. If we want to define a variable that can be accessed by all scripts within the current shell, we need to export it.

Command substitution is an essential topic that I want to discuss next, particularly if we aim to write intelligent scripts. It involves capturing and storing the output of a command into a variable. This can be achieved by using either backticks (`) or the dollar sign followed by parentheses ($()). When a command is enclosed within the parentheses, the output is automatically captured and assigned to the designated variable.

Lets write another script that will capture and store the output of some commands.

```bash
[root@scriptbox scripts]# vim 6_command_subs.sh
[root@scriptbox scripts]# cat 6_command_subs.sh
#!/bin/bash

echo "####################################################"
echo "Welcome $USER on $HOSTNAME."
echo "####################################################"
echo

FREE_RAM=$(free -m | grep Mem | awk '{print $4}')
LOAD=$(uptime | awk '{print $9}')
ROOTFREE=$(df -h | grep 'dev/sda1' | awk '{print$4}')

echo
echo "####################################################"
echo "Available free RAM is $FREE_RAM MB"
echo "####################################################"
echo "Current Load Average $LOAD"
echo "####################################################"
echo "Free ROOT partition size is $ROOTFREE"
[root@scriptbox scripts]#

```

All this commands, like **awk**, **grep** and **df**, I covered in my Linux Blog you can check that here: [Introduction to Linux](https://grzegorz-wolfinger-blog.vercel.app/posts/basics-of-linux).

Now, let's run this script:

```bash
[root@scriptbox scripts]# ./6_command_subs.sh
####################################################
Welcome root on scriptbox.
####################################################


####################################################
Available free RAM is 208 MB
####################################################
Current Load Average 0.01,
####################################################
Free ROOT partition size is 778M
[root@scriptbox scripts]#

```

There you go, the commands that we stored previously in the variables; we can execute them over and over, and this is simply amazing. Imagine you have a script like this, that prints system information whenever you log in to your system.

## 6. Exporting Variables.

When discussing exporting variables, it's important to note that their scope is often confined to specific instances. If you log out or close the shell, these variables will vanish. However, there is a solution to make variables permanent either for a specific user or for all users on the system: exporting them. For example:

```bash
[root@scriptbox scripts]# TIME="10"
[root@scriptbox scripts]# echo $TIME
10
[root@scriptbox scripts]# exit
logout
[vagrant@scriptbox ~]$ sudo -i
[root@scriptbox ~]# echo $TIME

[root@scriptbox ~]#
```

This is a problem right here; variables are temporary, so as soon as the process is closed, the variable is gone. So how do we make it permanent? First, let's write a script that will use the **TIME** variable. Let's create that variable once again and run this script. What should we expect? The variable does exist in the parent shell, but not in the child shell.

```bash
[root@scriptbox scripts]# vim testvars.sh
[root@scriptbox scripts]# chmod +x testvars.sh
[root@scriptbox scripts]# TIME="10"
[root@scriptbox scripts]# echo $TIME
10
[root@scriptbox scripts]# cat testvars.sh
#!/bin/bash

echo "This script will be destroy in $TIME sec."
[root@scriptbox scripts]# ./testvars.sh
This script will be destroy in   sec.
[root@scriptbox scripts]#

```

What can we do? We can use the **export** command. Now it is available to all the child shells from this parent shell.

```bash
[root@scriptbox scripts]# export TIME
[root@scriptbox scripts]# ./testvars.sh
This script will be destroy in 10 sec.
[root@scriptbox scripts]#
```

So, this is what exporting does: exporting a variable will make the variable global for all the other child shells. However, this is still temporary. If I log out and then log in again, the variable will be gone.

```bash
[root@scriptbox scripts]# exit
logout
[vagrant@scriptbox ~]$ sudo -i
[root@scriptbox ~]# echo $TIME

[root@scriptbox ~]#
```

So, how do I make this permanent? What we can do is, in every user's home directory, there is a hidden file called **.bashrc**. If we place our export command and variable in the **.bashrc** file, then it will become permanent for the root user. What happens is, whenever the root user logs in or any user logs in, this file will be sourced. Every user will have its own a **.bashrc** file and also another file **.bash_profile**.

```bash
[root@scriptbox ~]# ls -a
.   anaconda-ks.cfg  .bash_logout   .bashrc  .lesshst         .ssh     .viminfo
..  .bash_history    .bash_profile  .cshrc   original-ks.cfg  .tcshrc
[root@scriptbox ~]# source .bashrc
[root@scriptbox ~]# vi .bashrc

  1 # .bashrc
  2
  3 # Source global definitions
  4 if [ -f /etc/bashrc ]; then
  5         . /etc/bashrc
  6 fi
  7
  8 # User specific environment
  9 if ! [[ "$PATH" =~ "$HOME/.local/bin:$HOME/bin:" ]]
 10 then
 11     PATH="$HOME/.local/bin:$HOME/bin:$PATH"
 12 fi
 13 export PATH
 14
 15 # Uncomment the following line if you don't like systemctl's auto-paging feature:
 16 # export SYSTEMD_PAGER=
 17
 18 # User specific aliases and functions
 19
 20 alias rm='rm -i'
 21 alias cp='cp -i'
 22 alias mv='mv -i'
 23
 24 export TIME="10" #here is our export Time variable

:wq # save and exit remember!
[root@scriptbox ~]#
```

So, now I need to log out and log back in with the root user because the **.bashrc** file will be automatically sourced. I should now be able to have global access to the TIME variable.

```bash
[root@scriptbox scripts]# exit
logout
[vagrant@scriptbox ~]$ sudo -i
[root@scriptbox ~]# cd /opt/scripts/
[root@scriptbox scripts]# ./testvars.sh
This script will be destroy in 10 sec.
[root@scriptbox scripts]#
```

Currently, I am a Vagrant user. The Vagrant user has its own **.bashrc** file there. So, if I want to make this variable permanent for Vagrant users, I need to edit the **.bashrc** file of the Vagrant user. But if you want to do it globally for every user, you can use the file **/etc/profile**. I go to the end of this file and place my export command there and this time I'm giving a different value. Let's exit and log out from root user and vagrant user and log in to vagrant user once again.

```bash
[root@scriptbox ~]# vim /etc/profile
...
...
...
export TIME="5"
[root@scriptbox ~]# exit
logout
[vagrant@scriptbox ~]$ exit
logout
Connection to 127.0.0.1 closed.

Bizon@DESKTOP-49VTO78 MINGW64 /f/vagrant-vms/Bash_Scripts
$ vagrant ssh scriptbox
Last login: Wed Oct 25 05:23:16 2023 from 10.0.2.2
[vagrant@scriptbox ~]$ echo $TIME
5
[vagrant@scriptbox ~]$

```

So, this TIME value comes from the /etc/profile file, which is for all users. If I log in as the root user, the value of the TIME variable will come from the .bashrc file, overriding the previous value.

```bash
[vagrant@scriptbox ~]$ sudo -i
[root@scriptbox ~]# echo $TIME
10
[root@scriptbox ~]#
```

So, if you want to make a variable permanent for everyone, you should edit the /etc/profile file. If you want to make a variable permanent for a specific user, then update the .bashrc file of that user by using the export command.

## 7. Ask The User For Input.

Taking input from the user while executing the script, storing it into a variable, and then using that variable in our script. We would be taking inputs from the user like IP addresses, usernames, passwords, or confirmation (Y/N). To do this, we use a command called **read**. This command takes the input and saves it into a variable. Let's write a basic script for reading inputs.

```bash
[root@scriptbox scripts]# vim 7_userInput.sh
[root@scriptbox scripts]# cat 7_userInput.sh
#!/bin/bash

echo "Enter your skill:"
read SKILL

echo "Your $SKILL skill is in high demand in IT Industry."

read -p 'Username: ' USR
read -sp 'Password: ' pass

echo

echo "Login Successful: Welcome USER $USR,"
[root@scriptbox scripts]# chmod +x 7_userInput.sh
[root@scriptbox scripts]#
```

And we can run it. We can enter our skill, and then this skill is used when needed in a sentence, just like with passwords and usernames.

```bash
[root@scriptbox scripts]# ./7_userInput.sh
Enter your skill:
React
Your React skill is in high demand in IT Industry.
Username: greg
Password:
Login Successful: Welcome USER greg,
[root@scriptbox scripts]#

```

So, that's how the read works. However, it is not recommended in DevOps, at least, to make the script interactive because we run scripts from the background using other tools. We don't want the user to interact with the system, as user interaction is always error-prone.

## 8. Decision Making - If/Else Statements.

If you use bash for scripting, you will undoubtedly have to use conditions a lot. Based on a condition, you decide if you should execute some commands on the system or not. A basic if statement effectively says, "if a particular test is true, then perform a given set of actions." If it is not true, then don't perform those actions. Let's write a few scripts so we can see. Basically, if you know how the logic works in programming languages, it's the same here, except the syntax is a bit different.

```bash
[root@scriptbox scripts]# vim 8_if1.sh
[root@scriptbox scripts]# cat 8_if1.sh
#!/bin/bash

read -p 'Enter a number: ' NUM

if [ $NUM -gt 100 ]
then
        echo "We have entered in IF block."
        sleep 3
        echo "Your number: $NUM is greater then 100"
        echo
        date
fi

echo "Script execution completed successfully."


[root@scriptbox scripts]# vim 9_if2.sh
[root@scriptbox scripts]# cat 9_if2.sh
#!/bin/bash

read -p 'Enter a number: ' NUM

if [ $NUM -gt 100 ]
then
        echo "We have entered in IF block."
        sleep 3
        echo "Your number: $NUM is greater than 100"
        echo
        date
else
        echo "You have entered number less than 100"
fi

echo "Script execution completed successfully."


[root@scriptbox scripts]# vim 10_ifelif.sh
[root@scriptbox scripts]# cat 10_ifelif.sh
#!/bin/bash

value=$(ip addr show | grep -v LOOPBACK | grep -ic mtu)

if [ $value -eq 1 ]
then
   echo "1 Active Network Interface found."
elif [ $value -gt 1 ]
 then
   echo "Found Multiple active Interface."

else
     echo "No Active Network Interface found."

fi

[root@scriptbox scripts]#

```

I have created 3 different if/else statement scripts, so I highly recommend going through them one by one. Try writing them yourself so that you can become very familiar with the syntax and learn how to use them effectively.

##### Here is a list of some of the most commonly used Bash operators:

---

- **=** - Equal to (for string comparison)
- **!=** - Not equal to (for string comparison)
- **-eq** - Equal to (for number comparison)
- **-ne** - Not equal to (for number comparison)
- **-lt** - Less than (for number comparison)
- **-gt** - Greater than (for number comparison)
- **-le** - Less than or equal to (for number comparison)
- **-ge** - Greater than or equal to (for number comparison)
- **-z** - Checks if a string is empty
- **-n** - Checks if a string is not empty
- **-d** - Checks if a file/directory exists
- **-f** - Checks if a file exists
- **-r** - Checks if a file/directory has read permissions
- **-w** - Checks if a file/directory has write permissions
- **-x** - Checks if a file/directory has execute permissions
- **!** - Logical NOT operator
- **&&** - Logical AND operator
- **||** - Logical OR operator

---

Let's now use what we know so far and create a monitoring tool that will check if the httpd status is running. If it's running, we'll print a message that says the httpd process is running. Otherwise, we'll start the httpd service and print another message. We need to take into consideration that the starting of this process may fail. When running the command "systemctl status httpd", if the httpd process is running, a PID file called httpd.pid is created at /var/run/httpd/. This file contains the process ID. If the httpd process is not running, the httpd.pid file does not exist. So, this will be our starting point for our logic. If that file exists, it means that the process is running and we don't have to worry. But if the file doesn't exist, that will mean the service has stopped, and we need to start it back up.

```bash

[root@scriptbox scripts]# vim 11_monit.sh
[root@scriptbox scripts]# cat 11_monit.sh
#!/bin/bash


echo "############################################################"
date
ls /var/run/httpd/httpd.pid &> /dev/null

if [ $? -eq 0 ]
then
       echo "Httpd process is running"

else
       echo "Httpd process is NOT Running."
       echo "Starting the process"
       systemctl start httpd
       if [ $? -eq 0 ]
       then
           echo "Process started successfully."
       else
           echo "Process Starting Failed, please contact admin."
       fi
fi
echo "############################################################"
echo

[root@scriptbox scripts]# chmod +x 11_monit.sh
[root@scriptbox scripts]# systemctl status httpd
● httpd.service - The Apache HTTP Server
    Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; preset: disabled)
    Active: active (running) since Wed 2023-10-25 06:29:55 UTC; 5h 49min ago
      Docs: man:httpd.service(8)
  Main PID: 6244 (httpd)
    Status: "Total requests: 0; Idle/Busy workers 100/0;Requests/sec: 0; Bytes served/sec:  >
     Tasks: 213 (limit: 4614)
    Memory: 26.8M
       CPU: 12.828s
    CGroup: /system.slice/httpd.service
            ├─6244 /usr/sbin/httpd -DFOREGROUND
            ├─6245 /usr/sbin/httpd -DFOREGROUND
            ├─6246 /usr/sbin/httpd -DFOREGROUND
            ├─6247 /usr/sbin/httpd -DFOREGROUND
            └─6249 /usr/sbin/httpd -DFOREGROUND

Oct 25 06:29:55 scriptbox systemd[1]: Starting The Apache HTTP Server...
Oct 25 06:29:55 scriptbox httpd[6244]: AH00558: httpd: Could not reliably determine the serve>
Oct 25 06:29:55 scriptbox systemd[1]: Started The Apache HTTP Server.
Oct 25 06:29:55 scriptbox httpd[6244]: Server configured, listening on: port 80
[root@scriptbox scripts]#

```

Httpd service is currently running, so when we run our script, I expect to see the message that Httpd is running. Let's see if that is the case.

```bash
[root@scriptbox scripts]# ./11_monit.sh
############################################################
Wed Oct 25 12:23:09 PM UTC 2023
Httpd process is running
############################################################

[root@scriptbox scripts]#
```

Let's stop the service now and run our script to see the output:

```bash
[root@scriptbox scripts]# systemctl stop httpd
[root@scriptbox scripts]# ./11_monit.sh
############################################################
Wed Oct 25 12:27:01 PM UTC 2023
Httpd process is NOT Running.
Starting the process
Process started successfully.
############################################################

[root@scriptbox scripts]#

```

Great! Our script is working, and as soon as a service stop is detected, it boots up our Httpd service.
Now, this really is a nice script, but it's going to become even more awesome if it can run automatically by itself, let's say, every minute. So if our process goes down for some reason, it will check and start it. It will perform this check every minute, acting like a monitoring tool. To achieve this, we need to schedule the script using cron jobs.

```bash
[root@scriptbox scripts]# crontab -e
# MM HH DOM mm DOW COMMAND
# 30 20 *   *  1-5 COMMAND
* * * * * /opt/scripts/11_monit.sh &>> /var/log/monit_httpd.log

```

In short, crontab accepts five arguments: minutes, hours, day of the month, month, day of the week, and command. Now, I want to run my script every minute, so I'm going to use " \* ", meaning every minute. For the hour argument, I will also use "\*", meaning every hour. Similarly, I will use " \*", meaning every day of the month, every month, and every day of the week (Monday to Sunday). With these settings, the script will run at every minute, hour, date, month, and day of the week. Furthermore, it will generate an output that I want to store in a file named "/var/log/monit_httpd.log".

```bash

[root@scriptbox scripts]# tail -f /var/log/monit_httpd.log
############################################################
Wed Oct 25 12:52:01 PM UTC 2023
Httpd process is running
############################################################

############################################################
Wed Oct 25 12:53:02 PM UTC 2023
Httpd process is running
############################################################

############################################################
Wed Oct 25 12:54:01 PM UTC 2023
Httpd process is running
############################################################

[root@scriptbox scripts]# systemctl stop httpd
[root@scriptbox scripts]# tail -f /var/log/monit_httpd.log
############################################################
Wed Oct 25 12:53:02 PM UTC 2023
Httpd process is running
############################################################

############################################################
Wed Oct 25 12:54:01 PM UTC 2023
Httpd process is running
############################################################

############################################################
Wed Oct 25 12:55:02 PM UTC 2023
Httpd process is NOT Running.
Starting the process
Process started successfully.
############################################################
...
```

Awesome, we just created a monitoring plugin. Although there is an actual tool that can do the task in a much more sophisticated way, the purpose of creating this script was to see how we can write an intelligent scripting.

We can do one more thing. Let's create the same script but with different logic. Until now, we were checking the exit code, but we can also check the -f operator to see if the file exists at all. If this file exists, it means your process is running and if it does not exist, it tries to start the process.

```bash
[root@scriptbox scripts]# vim 12_monit.sh
[root@scriptbox scripts]# cat 12_monit.sh
#!/bin/bash


echo "############################################################"
date
ls /var/run/httpd/httpd.pid &> /dev/null

if [ -f /var/run/httpd/httpd.pid ]
then
        echo "Httpd process is running"

else
        echo "Httpd process is NOT Running."
        echo "Starting the process"
        systemctl start httpd
        if [ $? -eq 0 ]
        then
            echo "Process started successfully."
        else
            echo "Process Starting Failed, please contact admin."
        fi
fi
echo "############################################################"
echo

[root@scriptbox scripts]#

```

## 9. Loops

---

- A loop in programming is like a super persistent squirrel that just can't stop chasing its own tail.
- A programming loop is like watching a never-ending GIF of a dancing penguin—repeating the same moves over and over, but somehow still entertaining.

---

If I gave you this definition of loop in programming and bash, you would probably think that I'm crazy. So let's stick with this one.

###### Loop allows us to take a series of commands and keep re-running them until a particular situation is reached. They are useful for automating repetitive tasks.

#### For Loop

A "for loop" is a statement in the Bash programming language that allows code to be repeatedly executed. A for loop is classified as an iteration statement; it signifies the repetition of a process within a Bash script.

Let's write a few scripts with a for loop

```bash
[root@scriptbox scripts]# vim 13_forloop.sh
[root@scriptbox scripts]# cat 13_forloop.sh
#!/bin/bash

for VAR1 in java .net python ruby php
do
        echo "Looping....."
        sleep 1
        echo "#######################################"
        echo "Value of VAR1 is $VAR1."
        echo "#######################################"
        date
        echo
done
[root@scriptbox scripts]# chmod +x 13_forloop.sh
[root@scriptbox scripts]# ./13_forloop.sh
Looping.....
#######################################
Value of VAR1 is java.
#######################################
Wed Oct 25 02:10:40 PM UTC 2023

Looping.....
#######################################
Value of VAR1 is .net.
#######################################
Wed Oct 25 02:10:41 PM UTC 2023

Looping.....
#######################################
Value of VAR1 is python.
#######################################
Wed Oct 25 02:10:42 PM UTC 2023

Looping.....
#######################################
Value of VAR1 is ruby.
#######################################
Wed Oct 25 02:10:43 PM UTC 2023

Looping.....
#######################################
Value of VAR1 is php.
#######################################
Wed Oct 25 02:10:44 PM UTC 2023

[root@scriptbox scripts]#

```

Another use case of a for loop, we can add 3 users manually, or we can let the loop add the users 3 times for us.

```bash
[root@scriptbox scripts]# vim 14_forloop.sh
[root@scriptbox scripts]# chmod +x 14_forloop.sh
[root@scriptbox scripts]# cat 14_forloop.sh
#!/bin/bash

MY_USERS="gregory johny bob"

for usr in $MY_USERS
do
        echo "Adding user $usr"
        useradd $usr
        id $usr
        echo "#########################################"
done
[root@scriptbox scripts]# ./14_forloop.sh
Adding user gregory
uid=1007(gregory) gid=1007(gregory) groups=1007(gregory)
#########################################
Adding user johny
uid=1008(johny) gid=1008(johny) groups=1008(johny)
#########################################
Adding user bob:wq
useradd: invalid user name 'bob:wq': use --badname to ignore
id: ‘bob:wq’: no such user
#########################################
[root@scriptbox scripts]#

```

#### While loop

A while loop in bash is a control structure that repeatedly executes a set of commands as long as a specified condition is true.

Let me create a script that uses while loop, and it's simply count numbers.

```bash
[root@scriptbox scripts]# vim 15_whileloop.sh
[root@scriptbox scripts]# chmod +x 15_whileloop.sh
[root@scriptbox scripts]# cat 15_whileloop.sh
#!/bin/bash

counter=0

while [ $counter -lt 5 ]
do
   echo "Looping..."
   echo "Value of counter is $counter."
   counter=$(( $counter + 1 ))
   sleep 1
done

echo "Out of the loop"

[root@scriptbox scripts]# ./15_whileloop.sh
Looping...
Value of counter is 0.
Looping...
Value of counter is 1.
Looping...
Value of counter is 2.
Looping...
Value of counter is 3.
Looping...
Value of counter is 4.
Out of the loop
[root@scriptbox scripts]#

```

Occasionally, we come across errors in loop logic or other areas that cause the loop to perpetually run. Rest assured, breaking out of this loop is possible by pressing Ctrl + C (In as bash shell). Now, allow me to provide you with a script that will increment a number by 2, beginning with 2. It will persistently execute until you choose to break out or if your computer experiences a freeze due to insufficient memory.

```bash
[root@scriptbox scripts]# vim 16_whileloop_infi.sh
[root@scriptbox scripts]# cat 16_whileloop_infi.sh
#!/bin/bash

counter=2

while true
do
   echo "Looping..."
   echo "Value of counter is $counter."
   counter=$(( $counter * 2 ))
   sleep 1
done

echo "Out of the loop"
[root@scriptbox scripts]#
```

So make sure that whenever you're using a while loop, you know how to terminate it. That condition needs to become false at some point in time, otherwise, it will run infinitely. And imagine it running in the background as a cron job. That will put some load on your system if you're performing some heavy operation.

## Summary.

I want to end this article here because I think this is the best place to stop. We have discussed many things that DevOps needs to know in order to write good and intelligent scripts. We have made use of our knowledge of Linux commands. Although there are more topics I would like to cover, such as Remote Command Execution and SSH Key Exchange, this article is already too long. Therefore, I will likely create a part 2 soon. For now, I sincerely appreciate you reading this, and I hope you will find the information I have shared useful. If you found this blog helpful and would like to support my work, you can visit [BuyMeACoffee](https://www.buymeacoffee.com/grzegorzwolfinger).
