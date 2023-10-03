---
title: 'Introduction to Linux'
date: '2023-10-01'
image: linux.png
excerpt:  "Are you interested in gaining a better understanding of the DevOps workflow? If so, mastering Linux is essential. In this blog post, we will take a deep dive into the fundamentals of Linux, providing you with the necessary knowledge to excel in the world of DevOps."
isFeatured: true
---

## 1. Linux Introduction.

Linux is an open-source operating system that is widely used in various devices, from personal computers to servers and even mobile devices. It was developed as an alternative to proprietary operating systems like Windows or macOS. Linux offers a robust and secure platform with high stability and flexibility. It allows users to customize their system according to their needs and provides access to a vast collection of free and open-source software. Additionally, Linux promotes collaboration and community-driven development, making it a popular choice for many technology enthusiasts and professionals.

#### Linux's principles:

- Everything is a file (including hardware)
- Small, single-purpose programs
- Ability to chain programs together to perform complex tasks
- Avoid captive user interfaces
- Configuration data stored in text

#### Why Linux ?

- Open Source.
- Community support.
- Heavily customizable.
- Most Servers runs on Linux.
- DevOps most of the tools implements on Linux only.
- Automation
- Secure.

---

### Some Important Directories:

- Home Directories: **/root**, **/home/username**
- User Executables: **/bin**, **/usr/bin**, **/usr/local/bin**
- System Executables: **/sbin**, **/usr/sbin**, **/usr/local/sbin**
- Other Mountpoints: **/media**, **/mnt**
- Configuration: **/etc**
- Temporary Files: **/tmp**
- Kernels and Bootloader: **/boot**
- Server Data: **/var**, **/srv**
- System Information: **/proc**, **/sys**
- Shared Libraries: **/lib**, **/usr/lib**, **/usr/local/lib**

### Different Linux distros.

#### Popular Desktop Linux OS

1. Ubuntu Linux
2. Linux Mint
3. Arch Linux
4. Fedora
5. Debian
6. OpenSuse

#### Popular Server Linux OS

1.  Red Hat Enterprise Linux
2.  Ubuntu Server
3.  CentOS
4.  SUSE Enterprise Linux

#### Most used Linux distros currently in IT industry.

- RPM based:- RHEL & CentOS
- Debian based :- Ubuntu Server

#### Difference between RPM based and Debian based.

From user’s point of view, there isn’t much difference in these tools. The RPM and DEB formats
are both just archive files, with some metadata attached to them. They are both equally arcane, have
hard-coded install paths and only differ in subtle details. DEB files are installation files for Debian
based distributions. RPM files are installation files for Red Hat based distributions. Ubuntu is based
on Debian’s package manage based on APT and DPKG. Red Hat, CentOS and Fedora are based on
the old Red Hat Linux package management system, RPM.

## 2. Basic Commands

Let's open terminal and practice few basics commands.

- Know where you are? Present Working Directory

```bash
user@devops:~$ pwd
/home/user
```

- Create a directory/folder in your home directory

```bash
user@devops:~$ mkdir test
user@devops:~$
```

- Change your current working directory to test(Go to test folder).

```bash
user@devops:~$ cd test/
user@devops:~/test$
```

- Create some more directories and list them with “ls” command.

```bash
user@devops:~/test$ mkdir vpdir
user@devops:~/test$ mkdir testdir
user@devops:~/test$ mkdir devopsdir
user@devops:~/test$ ls
devopsdir testdir vpdir
```

- Create some empty files with “touch” command and list them.

```bash
user@devops:~/test$ touch file2 file3 file4
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
```

- Reconfirm your location in your system.

```bash
user@devops:~/test$ pwd
/home/user/test
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
```

---

### Absolute path and Relative path.

#### What is a path?

A path is a unique location to a file or a folder in a file system of an OS. A path to a file is
a combination of / and alpha-numeric characters.

#### What is an absolute path?

An absolute path is defined as the specifying the location of a file or directory from the root
directory(/). In other words we can say absolute path is a complete path from start of actual
filesystem from / directory.

#### What is the relative path?

Relative path is defined as path related to the present working directory(pwd). Suppose I am located
in /home/user and I want to change directory to /home/user/test . I can use relative path concept to change directory to test and also devopsdir directory.

```bash
user@devops:~$ pwd
/home/user
user@devops:~$ cd test/
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
user@devops:~/test$ pwd
/home/user/test
user@devops:~/test$ cd devopsdir/
user@devops:~/.../devopsdir$ pwd
/home/user/test/devopsdir
user@devops:~/.../devopsdir$
```

If you see, all these paths did not start with / directory.

- Creating directories in devopsdir directory with absolute and relative path.

```bash
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
user@devops:~/test$ mkdir devopsdir/ansible
user@devops:~/test$ mkdir /home/user/test/devopsdir/aws
user@devops:~/test$ ls devopsdir/
ansible aws
user@devops:~/test$
```

- Copying files into directory.

```bash
user@devops:~/test$ pwd
/home/user/test
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
user@devops:~/test$ cp file2 testdir/
user@devops:~/test$ cd testdir/
user@devops:~/.../testdir$ ls
file2
user@devops:~/.../testdir$
```

- Copying directories from one location to another.

```bash
user@devops:~/test$ pwd
/home/user/test
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
user@devops:~/test$ cp -rvfp testdir/ vpdir/
'testdir/' -> 'vpdir/testdir/'
'testdir/file1' -> 'vpdir/testdir/file1'
user@devops:~/test$ ls vpdir/
testdir
user@devops:~/test$
```

- Moving files from one location to another.

```bash
user@devops:~/test$ pwd
/home/user/test
user@devops:~/test$ ls
devopsdir file2 file3 file4 testdir vpdir
user@devops:~/test$ mv devopsdir/ vpdir/
user@devops:~/test$ ls
file2 file3 file4 testdir vpdir
user@devops:~/test$ ls vpdir/
devopsdir testdir
user@devops:~/test$
user@devops:~/test$ mv file2 file3 vpdir/
user@devops:~/test$ ls
file4 testdir vpdir
```

- Removing files and directories.

```bash
user@devops:~/test$ rm file4
user@devops:~/test$ ls
testdir vpdir
user@devops:~/test$ rm -rftestdir/
user@devops:~/test$ ls
vpdir
```

## 3.VIM Editor

Vim is a powerful and customizable text editor for the Linux command line, known for its efficiency and extensive feature set.

#### It has 3 modes:

1. Command Mode
2. Insert mode (edit mode)
3. Extended command mode

_Note: When you open the vim editor, it will be in the command mode by default_

---

#### Command Mode:

- gg - to go to the beginning of the page
- G - to go to end of the page
- w - to move the cursor forward, word by word
- b - to move the cursor backward, word by word
- nw - to move the cursor forward to n words (SW)
- nb - to move the cursor backward to n words (SB)
- u - to undo last change (word)
- U - to undo the previous changes
- ctrl+r - to redo the changes
- yy - to copy a line
- nyy - to copy n lines
- p - to paste line below the cursor position
- P - to paste line above the cursor position
- dw - to delete the word letter by letter (like Backspace)
- x - to delete the word letter by letter (like DEL key)
- dd - to delete entire line
- ndd - to delete n no. of lines from cursor position
- / - to search a word in the file

#### Extended Mode: (Colon Mode)

Extended Mode is used for save and quit or save without quit using "Esc" Key with":"

- :w - to save the changes
- :q - to quit(without saving)
- :wq - to save and quit
- :w! - to save forcefully
- :wq! - to save and quit forcefully
- :x - to save and quit
- :se nu - to set the line numbers to the file
- :se nonu - to remove the set line numbers

---

## ls command options:

- -l - Long listing format of files and directories, one per line
- -a - List all hidden files and directories started with '.'
- -F - Add a '/' classification at the end of each Directory
- -g - List all files and directories with the group name
- -i - Print index number of each file and directories
- -m - List all files and directories separated by comma ','
- -n - List numeric UID and GID of Owner and Groups
- -r - List all files and directories in reverse order
- -R - Short list all directories
- -t - Sorted by modified time, started with the newest file

---

## Types of files in Linux.

1. Regular file **-** &nbsp; &nbsp; : Normal files such as text, data
2. Directory **d** &nbsp; &nbsp; : Files that are lists of the other files
3. Symbolic Link **l** &nbsp; &nbsp;: A shortcut that points to the location of the actual file
4. Special file **c** &nbsp; &nbsp; : Mechanism used for input and output, such as files in /dev
5. Socket **s** &nbsp; &nbsp; : A special file that provides inter-process networking protected by the file system's access control
6. Pipe **p** &nbsp; &nbsp; : A special file that allows processes to communicate with each other without using network socket semantics
7. Block Special **b** &nbsp; &nbsp; : Represent device files such as hard drives, monitors, etc.

Examples of file types:

```bash
[root@centos9 ~]# ls -l
total 8
-rw-------. 1 root root 2027 Oct  1 15:43 anaconda-ks.cfg
lrwxrwxrwx. 1 root root   36 Oct  1 16:32 cmds -> /opt/dev/ops/devops/text/command.txt
drwxr-xr-x. 2 root root    6 Oct  1 15:53 devopsdir
-rw-------. 1 root root 1388 Sep 18 17:30 original-ks.cfg
[root@centos9 ~]#

```

More examples

```bash
crw-r-----. 1 root kmem      1,   4 Oct  1 15:46 port
crw-------. 1 root root    108,   0 Oct  1 15:46 ppp
crw-rw-rw-. 1 root tty       5,   2 Oct  1 17:36 ptmx
drwxr-xr-x. 2 root root           0 Oct  1 15:46 pts
crw-rw-rw-. 1 root root      1,   8 Oct  1 15:46 random
crw-rw-r--. 1 root root     10, 242 Oct  1 15:46 rfkill
lrwxrwxrwx. 1 root root           4 Oct  1 15:46 rtc -> rtc0
crw-------. 1 root root    250,   0 Oct  1 15:46 rtc0
brw-rw----. 1 root disk      8,   0 Oct  1 15:46 sda
brw-rw----. 1 root disk      8,   1 Oct  1 15:46 sda1
brw-rw----. 1 root disk      8,   2 Oct  1 15:46 sda2
brw-rw----. 1 root disk      8,   3 Oct  1 15:46 sda3
crw-rw----. 1 root disk     21,   0 Oct  1 15:46 sg0
drwxrwxrwt. 2 root root          40 Oct  1 15:46 shm
crw-------. 1 root root     10, 231 Oct  1 15:46 snapshot
drwxr-xr-x. 2 root root          80 Oct  1 15:46 snd
lrwxrwxrwx. 1 root root          15 Oct  1 15:46 stderr -> /proc/self/fd/2
lrwxrwxrwx. 1 root root          15 Oct  1 15:46 stdin -> /proc/self/fd/0
lrwxrwxrwx. 1 root root          15 Oct  1 15:46 stdout -> /proc/self/fd/1
crw-rw-rw-. 1 root tty       5,   0 Oct  1 15:46 tty
crw--w----. 1 root tty       4,   0 Oct  1 15:46 tty0

```

### Symbolic links

Symbolic links are like desktop shortcuts we use in windows.
Create a soft link for /var/log directory in our current working directory.

Example of creating a link:

```bash
[root@centos9 ~]# mkdir /opts/devs/devops/test
mkdir: cannot create directory ‘/opts/devs/devops/test’: No such file or directory
[root@centos9 ~]# mkdir -p /opts/devs/devops/test
[root@centos9 ~]# vim /opts/devs/devops/test/command.txt
[root@centos9 ~]# ln -s /opts/devs/devops/test/command.txt /home/vagrant/cmds
[root@centos9 ~]# ls
anaconda-ks.cfg  cmds  devopsdir  original-ks.cfg
[root@centos9 ~]# cat cmds
ls
pwd
mkdir
cp
mv
rm
[root@centos9 ~]#
```

Removing a link:

```bash
[root@centos9 ~]# ls -l
total 8
-rw-------. 1 root root 2027 Oct  1 15:43 anaconda-ks.cfg
lrwxrwxrwx. 1 root root   36 Oct  1 16:32 cmds -> /opt/dev/ops/devops/text/command.txt
drwxr-xr-x. 2 root root    6 Oct  1 15:53 devopsdir
-rw-------. 1 root root 1388 Sep 18 17:30 original-ks.cfg
// removing a link
[root@centos9 ~]# unlink cmds
[root@centos9 ~]# ls -l
total 8
-rw-------. 1 root root 2027 Oct  1 15:43 anaconda-ks.cfg
drwxr-xr-x. 2 root root    6 Oct  1 15:53 devopsdir
-rw-------. 1 root root 1388 Sep 18 17:30 original-ks.cfg
[root@centos9 ~]# [root@centos9 ~]# ls -l
```

## 4. Filter & I/O redirection command.

#### Grep Command

- **Grep command is used to find texts from any text input**

Let's look for firewall inside anaconda-ks.cfg file:

```bash
[root@centos9 ~]# ls
anaconda-ks.cfg  devopsdir  original-ks.cfg
[root@centos9 ~]# grep firewall anaconda-ks.cfg
firewall --disabled
```

Linux is case-sensitive, if we look for Firewall we can get different result:

```bash
[root@centos9 ~]# grep Firewall anaconda-ks.cfg
# Firewall configuration
[root@centos9 ~]#
```

We can ignore case in grep with -i option :

```bash
[root@centos9 ~]# grep -i firewall anaconda-ks.cfg
fireWall is off in this machine
# Firewall configuration
firewall --disabled
[root@centos9 ~]#
```

If we don't know where exactly is a word we are looking for. We can use \* to search everywhere in the current working directory :

```bash
[root@centos9 ~]# grep -i firewall *
anaconda-ks.cfg:fireWall is off in this machine
anaconda-ks.cfg:# Firewall configuration
anaconda-ks.cfg:firewall --disabled
grep: devopsdir: Is a directory
original-ks.cfg:firewall --disabled
[root@centos9 ~]#
```

As you can see it found all except inside a devopsdir directory, If we want to also search inside directories we can add option R :

```bash
[root@centos9 ~]# grep -iR firewall *
anaconda-ks.cfg:fireWall is off in this machine
anaconda-ks.cfg:# Firewall configuration
anaconda-ks.cfg:firewall --disabled
devopsdir/anaconda-ks.cfg:fireWall is off in this machine
devopsdir/anaconda-ks.cfg:# Firewall configuration
devopsdir/anaconda-ks.cfg:firewall --disabled
devopsdir/mybootingfile.cfg:fireWall is off in this machine
devopsdir/mybootingfile.cfg:# Firewall configuration
devopsdir/mybootingfile.cfg:firewall --disabled
original-ks.cfg:firewall --disabled
```

Sometimes we're looking for a setting like SELINUX for example, and we only know that is somewhere inside /etc/ then we can use grep with R option and search whole /etc/ directory:

```bash
[root@centos9 ~]# grep -R SELINUX /etc/*
/etc/selinux/config:# SELINUX= can take one of these three values:
/etc/selinux/config:# NOTE: In earlier Fedora kernel builds, SELINUX=disabled would also
/etc/selinux/config:SELINUX=permissive
/etc/selinux/config:# SELINUXTYPE= can take one of these three values:
/etc/selinux/config:SELINUXTYPE=targeted
/etc/selinux/targeted/contexts/x_contexts:property _SELINUX_*                   system_u:object_r:seclabel_xproperty_t:s0
/etc/selinux/.config_backup:# BACKUP_SELINUX= can take one of these three values:
/etc/selinux/.config_backup:# NOTE: In earlier Fedora kernel builds, BACKUP_SELINUX=disabled would also
/etc/selinux/.config_backup:BACKUP_SELINUX=permissive
/etc/selinux/.config_backup:# BACKUP_SELINUXTYPE= can take one of these three values:
/etc/selinux/.config_backup:BACKUP_SELINUXTYPE=targeted
/etc/sysconfig/selinux:# SELINUX= can take one of these three values:
/etc/sysconfig/selinux:# NOTE: In earlier Fedora kernel builds, SELINUX=disabled would also
/etc/sysconfig/selinux:SELINUX=permissive
/etc/sysconfig/selinux:# SELINUXTYPE= can take one of these three values:
/etc/sysconfig/selinux:SELINUXTYPE=targeted
```

We can also use grep with -v option to display things except the given word and let's add -i for case-senstive :

```bash
[root@centos9 ~]# grep -vi firewall anaconda-ks.cfg
# Generated by Anaconda 34.25.0.23
# Generated by pykickstart v3.32
#version=RHEL9
# License agreement
eula --agreed
# Reboot after installation
reboot
# Use text mode install
...
```

and we got the whole content of that file without the word _firewall_

#### Less and More Commands

The both are used to read a file similar to cat, but cat is displaying a content and just quits. **Less** and **more** are readers, and you can read a file you can also search with **/** and quit any time with q. **Less** you can use up, down arrows, as for **more** command you cannot use up arrow, down arrow you have to use enter. It's going to show you file in the percentage way also you quit with q.

###### Note:

---

- Press Enter key to scroll down line by line
- use d to go to next page
- use b to go to previous page
- use / to search for a word in the file
- use v to go vim mode where you can edit the file once you save it, you will back to less command.

---

#### Head and tail commands

- **head** it is used to display the top first 10 lines of the file
- **tail** it is used to display the last 10 lines of the file

They both will show 10 lines by default, but you can give the option of how many lines you want to display.

```bash
[root@centos9 ~]# head anaconda-ks.cfg
# Generated by Anaconda 34.25.0.23
# Generated by pykickstart v3.32
#version=RHEL9
# License agreement
eula --agreed
# Reboot after installation
reboot
# Use text mode install
text
repo --name="AppStream" --baseurl=file:///run/install/repo/AppStream
[root@centos9 ~]# ^C

```

or 4 lines

```bash
[root@centos9 ~]# head -4 anaconda-ks.cfg
# Generated by Anaconda 34.25.0.23
# Generated by pykickstart v3.32
#version=RHEL9
# License agreement
[root@centos9 ~]#

```

display last 20 lines with tail command:

```bash
[root@centos9 ~]# tail -20 anaconda-ks.cfg
# Generated using Blivet version 3.4.0
ignoredisk --only-use=sda
# System bootloader configuration
bootloader --append="no_timer_check console=tty0 console=ttyS0,115200n8 elevator=noop" --location=mbr --boot-drive=sda
# Clear the Master Boot Record
zerombr
# Partition clearing information
clearpart --all --initlabel
# Disk partitioning information
part swap --fstype="swap" --size=1024
part /boot --fstype="xfs" --size=1024
part / --fstype="xfs" --size=79871

# System timezone
timezone UTC

# Root password
rootpw --plaintext vagrant
user --name=vagrant --password=vagrant

[root@centos9 ~]#
```

Now, tail has also one very useful option, -f, and you give a file path it will show you the dynamic content. So if any changes happen in this file, it's going to show us on a screen, which is good when we read log files.

```bash
[root@centos9 log]# tail -f messages
Oct  2 14:38:23 centos9 systemd[1]: dnf-makecache.service: Main process exited, code=exited, status=1/FAILURE
Oct  2 14:38:23 centos9 systemd[1]: dnf-makecache.service: Failed with result 'exit-code'.
Oct  2 14:38:23 centos9 systemd[1]: Failed to start dnf makecache.
Oct  2 15:52:21 centos9 systemd[1]: Starting dnf makecache...
Oct  2 15:52:21 centos9 dnf[5200]: Metadata cache refreshed recently.
Oct  2 15:52:21 centos9 systemd[1]: dnf-makecache.service: Deactivated successfully.
Oct  2 15:52:21 centos9 systemd[1]: Finished dnf makecache.


//
// here is the log of new user that login to our system
//
Oct  2 16:12:23 centos9 systemd-logind[533]: New session 6 of user vagrant.
Oct  2 16:12:23 centos9 systemd[1]: Started Session 6 of User vagrant.
Oct  2 16:12:23 centos9 systemd[1]: Starting Hostname Service...
Oct  2 16:12:23 centos9 systemd[1]: Started Hostname Service.
Oct  2 16:12:53 centos9 systemd[1]: systemd-hostnamed.service: Deactivated successfully.

```

So that's how the tail -f option is very helpful. When you're troubleshooting one very important tip about troubleshooting a server, you see errors in log files. That's how you start troubleshooting.

##### Passwd file: stores information about all the users in the system

```bash
[root@centos9 ~]# cat /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
daemon:x:2:2:daemon:/sbin:/sbin/nologin
adm:x:3:4:adm:/var/adm:/sbin/nologin
lp:x:4:7:lp:/var/spool/lpd:/sbin/nologin
sync:x:5:0:sync:/sbin:/bin/sync
shutdown:x:6:0:shutdown:/sbin:/sbin/shutdown
halt:x:7:0:halt:/sbin:/sbin/halt
mail:x:8:12:mail:/var/spool/mail:/sbin/nologin
operator:x:11:0:operator:/root:/sbin/nologin
games:x:12:100:games:/usr/games:/sbin/nologin
ftp:x:14:50:FTP User:/var/ftp:/sbin/nologin
nobody:x:65534:65534:Kernel Overflow User:/:/sbin/nologin
unbound:x:999:999:Unbound DNS resolver:/etc/unbound:/sbin/nologin
systemd-coredump:x:998:996:systemd Core Dumper:/:/sbin/nologin
dbus:x:81:81:System message bus:/:/sbin/nologin
polkitd:x:997:995:User for polkitd:/:/sbin/nologin
libstoragemgmt:x:996:992:daemon account for libstoragemgmt:/var/run/lsm:/sbin/nologin
cockpit-ws:x:995:991:User for cockpit web service:/nonexisting:/sbin/nologin
cockpit-wsinstance:x:994:990:User for cockpit-ws instances:/nonexisting:/sbin/nologin
tss:x:59:59:Account used for TPM access:/dev/null:/sbin/nologin
sssd:x:993:989:User for sssd:/:/sbin/nologin
setroubleshoot:x:992:988::/var/lib/setroubleshoot:/sbin/nologin
sshd:x:74:74:Privilege-separated SSH:/usr/share/empty.sshd:/sbin/nologin
chrony:x:991:987::/var/lib/chrony:/sbin/nologin
tcpdump:x:72:72::/:/sbin/nologin
systemd-oom:x:985:985:systemd Userspace OOM Killer:/:/usr/sbin/nologin
systemd-resolve:x:984:984:systemd Resolver:/:/usr/sbin/nologin
vagrant:x:1000:1000::/home/vagrant:/bin/bash
vboxadd:x:983:1::/var/run/vboxadd:/bin/false
[root@centos9 ~]#
```

Let's say we want to only get just the usernames or maybe just the user. This file is segregated into rows and columns, it's properly segregated by using colon's and if you have that proper separators or proper delimiters like colon or comma or anything, then you use cut command.

#### Cut command.

- # cut -d -f filename (where d stands for delimiter ex. :,"&nbsp;" etc. and f stands for field )
- to delimit spaces and print field # cut -d "&nbsp;" -f1 filename

```bash
[root@centos9 ~]# cut -d: -f1 /etc/passwd
root
bin
daemon
adm
lp
sync
shutdown
halt
mail
operator
games
ftp
nobody
unbound
systemd-coredump
dbus
polkitd
libstoragemgmt
cockpit-ws
cockpit-wsinstance
tss
sssd
setroubleshoot
sshd
chrony
tcpdump
systemd-oom
systemd-resolve
vagrant
vboxadd
[root@centos9 ~]#

```

This is good only if you have proper separator like in out example - colon. But if you don't have a proper separator, then there's an intelligent filter tool called **awk**

#### Awk command

Awk command has a lot of options. You can use all your regular expressions, all your filtering techniques, and you can use awk command to apply all those filtering techniques using regular expressions.

One simple example as cut , getting the first column:

```bash
[root@centos9 ~]# awk -F':' '{print $1}' /etc/passwd
root
bin
daemon
adm
lp
sync
shutdown
halt
mail
operator
games
ftp
nobody
unbound
systemd-coredump
dbus
polkitd
libstoragemgmt
cockpit-ws
cockpit-wsinstance
tss
sssd
setroubleshoot
sshd
chrony
tcpdump
systemd-oom
systemd-resolve
vagrant
vboxadd
[root@centos9 ~]#

```

Now, this may look more complicated than cut, but sometimes for some advanced search or intelligent search, awk is always better.

---

#### Sed command

Sed stands for stream editor, which is used to search a word in the file and replace it with the word required to be in the output

```bash
[root@centos9 ~]# cat samplefile.txt
Welcome to Kernel Tech
[root@centos9 ~]#
[root@centos9 ~]# sed 's/Tech/Technologies/g' samplefile.txt
Welcome to Kernel Technologies
[root@centos9 ~]# cat samplefile.txt
Welcome to Kernel Tech
[root@centos9 ~]#

```

**Note:** it will only modify the output, but there will be no change in the original file. It's safer to see first what we're changing. But if you want to change it and you sure about it, then you can use -i option.

```bash
[root@centos9 ~]# sed -i 's/Tech/Technologies/g' samplefile.txt
[root@centos9 ~]# cat samplefile.txt
Welcome to Kernel Technologies
[root@centos9 ~]#
```

### I/O redirection.

Redirection is a process where we can copy the output of any command(s), file(s) into a new file. There are two ways of redirecting the output into a file. Using **>** or **>>** filename after the command.
The only difference is that **>** will overwrite the content of that file, but **>>** will append output to that file.

Example of redirection, I created **info** link that point to /tmp/sysinfo.txt

```bash
[root@centos9 ~]# echo "hello world"
hello world
[root@centos9 ~]# echo "####################################" > info
[root@centos9 ~]# cat info
####################################
[root@centos9 ~]# date > info
[root@centos9 ~]# cat info
Mon Oct  2 05:31:11 PM UTC 2023
[root@centos9 ~]# echo "####################################" >> info
[root@centos9 ~]# cat info
Mon Oct  2 05:31:11 PM UTC 2023
####################################
[root@centos9 ~]# uptime >> info
[root@centos9 ~]# echo "####################################" >> info
[root@centos9 ~]# free -m >> info
[root@centos9 ~]# echo "####################################" >> info
[root@centos9 ~]# df -h >> info
[root@centos9 ~]# cat info
Mon Oct  2 05:31:11 PM UTC 2023
####################################
 17:32:47 up  3:54,  2 users,  load average: 0.00, 0.00, 0.00
####################################
               total        used        free      shared  buff/cache   available
Mem:             757         272         343           2         266         484
Swap:           1023           0        1023
####################################
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        4.0M     0  4.0M   0% /dev
tmpfs           379M     0  379M   0% /dev/shm
tmpfs           152M  3.0M  149M   2% /run
/dev/sda2        78G  2.1G   76G   3% /
/dev/sda1      1014M  237M  778M  24% /boot
tmpfs            76M     0   76M   0% /run/user/1000
[root@centos9 ~]#
```

---

Sometimes you don't want to see output, not on the screen, not in any file, then you can redirect the output to somewhere else, which is /dev/null.

```bash
[root@centos9 ~]# uptime > /dev/null
[root@centos9 ~]# cat /dev/null
[root@centos9 ~]#
```

/dev/null is like a black hole there is nothing there so what ever it's redirected to /dev/null is gone.
We can use it as a trick to quickly wipe the **info** content:

```bash
anaconda-ks.cfg  devopsdir  info  original-ks.cfg  samplefile.txt
[root@centos9 ~]# cat info
Mon Oct  2 05:31:11 PM UTC 2023
####################################
 17:32:47 up  3:54,  2 users,  load average: 0.00, 0.00, 0.00
####################################
               total        used        free      shared  buff/cache   available
Mem:             757         272         343           2         266         484
Swap:           1023           0        1023
####################################
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        4.0M     0  4.0M   0% /dev
tmpfs           379M     0  379M   0% /dev/shm
tmpfs           152M  3.0M  149M   2% /run
/dev/sda2        78G  2.1G   76G   3% /
/dev/sda1      1014M  237M  778M  24% /boot
tmpfs            76M     0   76M   0% /run/user/1000
[root@centos9 ~]# cat /dev/null > info
[root@centos9 ~]# cat info
[root@centos9 ~]#
```

Ok, so that's redirecting standard output, but you get errors sometimes.

```bash
[root@centos9 ~]# free -m > /dev/null
[root@centos9 ~]# freeee -m > /dev/null
-bash: freeee: command not found
[root@centos9 ~]# freeee -m 2>> /tmp/error.log
[root@centos9 ~]# cat /tmp/error.log
-bash: freeee: command not found
[root@centos9 ~]#
```

- Redirecting only standard output to a file "1>>" this is default ">>"
- Redirecting only errors to a file "2>>"
- Redirecting all the output to a file "&>>"

```bash
[root@centos9 ~]# free -m 1>> /tmp/error.log
[root@centos9 ~]# cat /tmp/error.log
-bash: freeee: command not found
               total        used        free      shared  buff/cache   available
Mem:             757         245         262           2         374         511
Swap:           1023           0        1023
[root@centos9 ~]# free -m &>> /tmp/error.log
[root@centos9 ~]# fredadasdae -m &>> /tmp/error.log
[root@centos9 ~]# cat /tmp/error.log
-bash: freeee: command not found
               total        used        free      shared  buff/cache   available
Mem:             757         245         262           2         374         511
Swap:           1023           0        1023
               total        used        free      shared  buff/cache   available
Mem:             757         245         262           2         374         511
Swap:           1023           0        1023
-bash: fredadasdae: command not found
[root@centos9 ~]#
```

### Piping

So far we've dealt with sending data to and from files. Now we'll take a look at a mechanism for sending data from one program to another. It's called piping and the operator we use is ( | ). What this operator does is feed the output from the program on the left as input to the program on the right.

Let's say you want to count how many lines is in /etc/passwd file. you can run a command wc -l:

```bash
[root@centos9 ~]# wc -l /etc/passwd
30 /etc/passwd
```

Now, you want to know, how many files there is in /etc/. You can use a nice trick using piping:

```bash
[root@centos9 ~]# cd /etc/
[root@centos9 etc]# ls | wc -l
187
[root@centos9 etc]#
```

Or you want to search for a file name that start with host :

```bash
[root@centos9 etc]# ls | grep host
host.conf
hostname
hosts
[root@centos9 etc]#
```

Let's search if vagrant word is in last 20 lines of /var/log/messages file:

```bash
[root@centos9 etc]# tail -20 /var/log/messages | grep -i vagrant
Oct  2 16:12:23 centos9 systemd-logind[533]: New session 6 of user vagrant.
Oct  2 16:12:23 centos9 systemd[1]: Started Session 6 of User vagrant.
[root@centos9 etc]#

```

Few more examples for piping :

- only show Mem:

```bash
[root@centos9 etc]# free -m
               total        used        free      shared  buff/cache   available
Mem:             757         247         261           2         374         510
Swap:           1023           0        1023
[root@centos9 etc]# free -m | grep Mem
Mem:             757         247         261           2         374         510
[root@centos9 etc]#
```

- first 10 files

```bash
[root@centos9 etc]# ls -l | head
total 1168
-rw-r--r--. 1 root root       18 Sep 18 17:28 adjtime
-rw-r--r--. 1 root root     1529 Jun 23  2020 aliases
drwxr-xr-x. 2 root root     4096 Sep 18 17:38 alternatives
-rw-r--r--. 1 root root      541 Jul 11  2022 anacrontab
-rw-r--r--. 1 root root        1 Apr  4  2022 at.deny
drwxr-x---. 4 root root      100 Sep 18 17:37 audit
drwxr-xr-x. 3 root root     4096 Sep 18 17:40 authselect
drwxr-xr-x. 2 root root      108 Sep 18 17:39 bash_completion.d
-rw-r--r--. 1 root root     2658 Dec 21  2022 bashrc
[root@centos9 etc]# ^C

```

- last 10 files

```bash
[root@centos9 etc]# ls -l | tail
-rw-r--r--. 1 root root     4017 Feb  9  2023 vimrc
-rw-r--r--. 1 root root     1184 Feb  9  2023 virc
-rw-r--r--. 1 root root     4925 Nov  3  2021 wgetrc
drwxr-xr-x. 6 root root       70 Sep 18 17:20 X11
-rw-r--r--. 1 root root      817 Aug  9  2021 xattr.conf
drwxr-xr-x. 4 root root       38 Sep 18 17:20 xdg
drwxr-xr-x. 2 root root       29 Sep 18 17:47 xml
drwxr-xr-x. 2 root root       57 Sep 18 17:38 yum
lrwxrwxrwx. 1 root root       12 Jun 29 08:27 yum.conf -> dnf/dnf.conf
drwxr-xr-x. 2 root root       51 Sep  5 14:36 yum.repos.d
[root@centos9 etc]#

```

### Find command

Find command is used to find the files or directory's path, it is exactly like the find option in windows where you can search for a file.

Options that can be used with find command:

- **name** : For searching a file with its name
- **inum** : For searching a file with particular inode number
- **type** : For searching a particular type of file
- **user** : For files whose owner is a particular user
- **group** : For files belonging to particular group

find by -name

```bash
[root@centos9 ~]# find /etc -name host*
/etc/host.conf
/etc/hosts
/etc/hostname
[root@centos9 ~]#
```

find by -type

```bash
[root@centos9 ~]# find /etc -type l
/etc/mtab
/etc/crypto-policies/back-ends/bind.config
/etc/crypto-policies/back-ends/gnutls.config
/etc/crypto-policies/back-ends/java.config
/etc/crypto-policies/back-ends/javasystem.config
/etc/crypto-policies/back-ends/krb5.config
/etc/crypto-policies/back-ends/libreswan.config
/etc/crypto-policies/back-ends/libssh.config
/etc/crypto-policies/back-ends/nss.config
/etc/crypto-policies/back-ends/openssh.config
/etc/crypto-policies/back-ends/opensshserver.config
/etc/crypto-policies/back-ends/openssl.config
/etc/crypto-policies/back-ends/opensslcnf.config
/etc/crypto-policies/back-ends/openssl_fips.config
/etc/fonts/conf.d/20-unhint-small-dejavu-sans.conf
/etc/fonts/conf.d/57-dejavu-sans-fonts.conf
/etc/fonts/conf.d/31-cantarell.conf
/etc/fonts/conf.d/61-adobe-source-code-pro.conf
/etc/pki/tls/certs/ca-bundle.crt
/etc/pki/tls/certs/ca-bundle.trust.crt
/etc/pki/tls/cert.pem
...
[root@centos9 ~]#
```

We can also search at the root level, which is searching the entire operating system, but this may slow down our operating system. I do not recommend making search the root dir because this is a real time search.

```bash
[root@centos9 ~]# find / -name host*
```

#### Locate command

This is a package that might need to be installed if not present in your system. It's also used for searching:

```bash
yum install mlocate -y
```

After installation, we can use it like that:

```bash
[root@centos9 ~]# updatedb
[root@centos9 ~]# locate host
/dev/vhost-net
/dev/vhost-vsock
/etc/host.conf
/etc/hostname
/etc/hosts
/etc/samba/lmhosts
/etc/ssh/ssh_host_ecdsa_key
/etc/ssh/ssh_host_ecdsa_key.pub
/etc/ssh/ssh_host_ed25519_key
/etc/ssh/ssh_host_ed25519_key.pub
/etc/ssh/ssh_host_rsa_key
/etc/ssh/ssh_host_rsa_key.pub
/usr/bin/host
/usr/bin/hostid
...
[root@centos9 ~]#
```

It's not a real-time search, so even if you happen to delete some file, it will still be showing it if as long as you don't run **updatedb** command. So before you run the locate command, run **updateddb**, so you get right path or the existing data.

## 5. Users & Groups.

#### Important points related to users:

- Users and groups are used to control access to files and resources
- Users login to the system by supplying their username and password
- Every file on the system is owned by a user and associated with a group
- Every process has an owner and group affiliation, and can only access the resources its owner or group can access.
- Every user of the system is assigned a unique use ID number (UID)
- Users name and UID are stored in **/etc/passwd**
- User's password is stored in **/etc/shadow** in encrypted form.
- Users are assigned a home directory and a program that is run when they log in (Usually a shell)
- Users cannot read, write or execute each other's files without permission.

#### Types of user:

![Type of user](table.png)

---

###### In Linux there are three types of users.

1. Superuser or root user - superuser or root user is the most powerful user. He is the administrator user.
2. Systems user - system users are the users created by the softwares or applications. For example if we install Apache it will create a user apache. These kinds of users are known as system users.
3. Normal user - normal user are the users created by root user. They are normal users like Greg, John etc. Only root user has the permission to create or remove a user.

---

###### Whenever a user is created in Linux, things are created by default:

1. A home directory - /home/username
2. A mailbox - /var/spool/mail
3. Unique UID & GID are given to user

---

#### Passwd file

**/etc/passwd**

```bash
[root@centos9 ~]# head -2 /etc/passwd
root:x:0:0:root:/root:/bin/bash
bin:x:1:1:bin:/bin:/sbin/nologin
[root@centos9 ~]#
```

The above fields are:

- root=name
- x=link to password file i.e. /etc/shadow
- 0 or 1 = UID (user id)
- 0 or 1 = GID (group id)
- root or bin = comment (brief information about the user)
- /root or /bin = home directory of the user
- /bin/bash or /sbin/nologin = shell

#### Group file

**/etc/group**

The file /etc/group stores group information. Each line in this file stores one group entry:

- group name
- group password
- GID
- group members

```bash
[root@centos9 ~]# head -2 /etc/group
root:x:0:
bin:x:1:
[root@centos9 ~]#
```

##### Add user, set password and switch to user

If you logged in as a root user, you can add new user assign a new password for that user, and log in as that user without entering a password.

```bash
[root@centos9 ~]# whoami
root
[root@centos9 ~]# useradd aws
[root@centos9 ~]# passwd aws
Changing password for user aws.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
[root@centos9 ~]# su - aws
[aws@centos9 ~]$ id
uid=1003(aws) gid=1003(aws) groups=1003(aws) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
[aws@centos9 ~]$
```

Lets login in as a aws user and lets try to add new user:

```bash
[root@centos9 ~]# su - aws
Last login: Tue Oct  3 12:17:05 UTC 2023 on pts/0
[aws@centos9 ~]$ useradd jenkins
useradd: Permission denied.
useradd: cannot lock /etc/passwd; try again later.
[aws@centos9 ~]$
```

Like you can see permission denied. In order to add or delete a user you need to be a root user :

```bash
[aws@centos9 ~]$ exit
logout
[root@centos9 ~]# whoami
root
[root@centos9 ~]# useradd jenkins
[root@centos9 ~]# passwd
Changing password for user root.
New password:
Retype new password:
passwd: all authentication tokens updated successfully.
[root@centos9 ~]#
```

Let's log in as aws which is a normal user and then try to log in as jenkins user and see what happens. Remember when you are a root user you can log in to every account without entering a password.

```bash
[aws@centos9 ~]$ whoami
aws
[aws@centos9 ~]$ pwd
/home/aws
[aws@centos9 ~]$ id
uid=1003(aws) gid=1003(aws) groups=1003(aws) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
[aws@centos9 ~]$ su - jenkins
Password:
su: Authentication failure
[aws@centos9 ~]$
```

And we got authentication failure, as a normal user we need to enter a password if we want to log in to another user account.
Let's try one more time this time we will enter a valid password:

```bash
[aws@centos9 ~]$ su - jenkins
Password:
Last failed login: Tue Oct  3 12:31:15 UTC 2023 on pts/0
There were 1 failed login attempt since the last successful login.
[jenkins@centos9 ~]$ whoami
jenkins
[jenkins@centos9 ~]$ id
uid=1004(jenkins) gid=1005(jenkins) groups=1005(jenkins) context=unconfined_u:unconfined_r:unconfined_t:s0-s0:c0.c1023
[jenkins@centos9 ~]$
```

This time we successfully log in, there is also message about 1 failed login attempt.

Now let's go back to root user and quickly delete a user, and if we use -r option it will also remove home dir:

```bash
[jenkins@centos9 ~]$ exit
logout
[aws@centos9 ~]$ exit
logout
[root@centos9 ~]# userdel -r jenkins
[root@centos9 ~]# id jenkins
id: ‘jenkins’: no such user
[root@centos9 ~]# tail -4 /etc/passwd
vagrant:x:1000:1000::/home/vagrant:/bin/bash
vboxadd:x:983:1::/var/run/vboxadd:/bin/false
ansible:x:1001:1001::/home/ansible:/bin/bash
aws:x:1003:1003::/home/aws:/bin/bash
[root@centos9 ~]#
```

Jenkins is gone, but as a root user we can also add groups, add users to the groups and delete groups. Let's see all of that now. I want to check the last 10 groups and add new devops group:

```bash
[root@centos9 ~]# tail /etc/group
chrony:x:987:
slocate:x:21:
tcpdump:x:72:
sgx:x:986:
systemd-oom:x:985:
systemd-resolve:x:984:
vagrant:x:1000:
vboxsf:x:983:
ansible:x:1001:
aws:x:1003:
[root@centos9 ~]#
[root@centos9 ~]# groupadd devops
[root@centos9 ~]# grep devops /etc/group
devops:x:1004:
[root@centos9 ~]# tail -4 /etc/group
vboxsf:x:983:
ansible:x:1001:
aws:x:1003:
devops:x:1004:
[root@centos9 ~]#
```

As you can see, we created new group, let'd add aws user to our new devops group:

```bash
[root@centos9 ~]# id aws
uid=1003(aws) gid=1003(aws) groups=1003(aws)
[root@centos9 ~]# usermod -G devops aws
[root@centos9 ~]# id aws
uid=1003(aws) gid=1003(aws) groups=1003(aws),1004(devops)
[root@centos9 ~]# grep aws /etc/group
aws:x:1003:
devops:x:1004:aws
[root@centos9 ~]#
```

Now aws user belongs into two groups. Note that we used -G option, which add user to secondary group. We can use -g option if we want to add/change user primary group. Example for that:

```bash
[root@centos9 ~]# id aws
uid=1003(aws) gid=1003(aws) groups=1003(aws),1004(devops)
[root@centos9 ~]# groupadd opsadmin
[root@centos9 ~]# tail -4 /etc/group
ansible:x:1001:
aws:x:1003:
devops:x:1004:aws
opsadmin:x:1005:
[root@centos9 ~]# usermod -g opsadmin aws
[root@centos9 ~]# id aws
uid=1003(aws) gid=1005(opsadmin) groups=1005(opsadmin),1004(devops)
[root@centos9 ~]#
```

Similar to deleting user, we can delete a group:

```bash
[root@centos9 ~]# grep devops /etc/group
devops:x:1004:aws
[root@centos9 ~]# id aws
uid=1003(aws) gid=1005(opsadmin) groups=1005(opsadmin),1004(devops)
[root@centos9 ~]# groupdel devops
[root@centos9 ~]# grep devops /etc/group
[root@centos9 ~]# id aws
uid=1003(aws) gid=1005(opsadmin) groups=1005(opsadmin)
[root@centos9 ~]#
```

##### The /etc/shadow file

This file stores users password and password related information. Just like /etc/passwd file, this file also uses an individual line for each entry.

1. Username
2. Encrypted password
3. Number of days when password was last changed
4. Number of days before password can be changed
5. Number of days after password must be changed
6. Number of days before password expiry date to display the warning message
7. Number of days to disable the account after the password expiry
8. Number of days since the account is disabled
9. Reserved field

```bash
[root@centos9 ~]# head /etc/shadow
root:$6$vfUe7sC97mh55WT6$93JvBCM92/zW3ppjLtvezkCNpDMAbFKmgb4bLHUWyQHGYiwO9TieleszQ0ek.B4FbSn2kTxf04g4dy5qeL7LJ0:19633:0:99999:7:::
bin:*:18849:0:99999:7:::
daemon:*:18849:0:99999:7:::
adm:*:18849:0:99999:7:::
lp:*:18849:0:99999:7:::
sync:*:18849:0:99999:7:::
shutdown:*:18849:0:99999:7:::
halt:*:18849:0:99999:7:::
mail:*:18849:0:99999:7:::
operator:*:18849:0:99999:7:::
[root@centos9 ~]#
```

There is a few useful commands, for example whoami(will show username) or who (it will show who is logged into system) :

```bash
[root@centos9 ~]# whoami
root
[root@centos9 ~]# who
vagrant  pts/0        2023-10-03 09:10 (10.0.2.2)
[root@centos9 ~]#
```

**last** command - it'll show last login in system :

```bash
[root@centos9 ~]# last
vagrant  pts/0        10.0.2.2         Tue Oct  3 09:10   still logged in
reboot   system boot  5.14.0-366.el9.x Tue Oct  3 09:09   still running
vagrant  pts/1        10.0.2.2         Mon Oct  2 16:12 - 19:32  (03:20)
vagrant  pts/0        10.0.2.2         Mon Oct  2 13:39 - 19:32  (05:53)
reboot   system boot  5.14.0-366.el9.x Mon Oct  2 13:38 - 19:32  (05:54)
vagrant  pts/0        10.0.2.2         Sun Oct  1 16:39 - crash  (20:59)
vagrant  pts/0        10.0.2.2         Sun Oct  1 16:37 - 16:38  (00:01)
vagrant  pts/0        10.0.2.2         Sun Oct  1 15:51 - 16:37  (00:45)
reboot   system boot  5.14.0-366.el9.x Sun Oct  1 15:46 - 19:32 (1+03:46)
vagrant  pts/0        10.0.2.2         Sun Oct  1 11:31 - 15:44  (04:12)
reboot   system boot  5.14.0-366.el9.x Sun Oct  1 11:30 - 15:45  (04:15)
vagrant  pts/0        10.0.2.2         Sat Sep 30 18:21 - 18:21  (00:00)
reboot   system boot  5.14.0-366.el9.x Sat Sep 30 18:20 - 18:22  (00:02)
reboot   system boot  5.14.0-366.el9.x Mon Sep 18 17:44 - 18:06  (00:22)
reboot   system boot  5.14.0-34.el9.x8 Mon Sep 18 17:29 - 17:45  (00:16)

wtmp begins Mon Sep 18 17:29:02 2023
[root@centos9 ~]#
```

There is also **lsof** command, that you might have to install if it's not already in your system.

```bash
yum install lsof -y
```

This command is really handy if you want to list files opened by the specific user who is logged in or what user is logged in and doing what, for example:

```bash
[root@centos9 ~]# lsof -u vagrant
COMMAND   PID    USER   FD      TYPE             DEVICE SIZE/OFF       NODE NAME
systemd  2598 vagrant  cwd       DIR                8,2      262        128 /
systemd  2598 vagrant  rtd       DIR                8,2      262        128 /
systemd  2598 vagrant  txt       REG                8,2   102120  201589522 /usr/lib/systemd/systemd
systemd  2598 vagrant  mem       REG                8,2   582072  134686216 /etc/selinux/targeted/contexts/files/file_contexts.bin
systemd  2598 vagrant  mem       REG                8,2   904672       1323 /usr/lib64/libm.so.6
systemd  2598 vagrant  mem       REG                8,2   882376      42846 /usr/lib64/libzstd.so.1.5.1
systemd  2598 vagrant  mem       REG                8,2  4483280      86230 /usr/lib64/libcrypto.so.3.0.7
systemd  2598 vagrant  mem       REG                8,2    44784      16738 /usr/lib64/libffi.so.8.1.0
systemd  2598 vagrant  mem       REG                8,2   153600      58634 /u
...
ev/pts/0
[root@centos9 ~]#
```

#### Users & Group cheat sheet.

![User/Group Commands](table2.png)

## 6. File permissions.

#### Viewing Permissions from the Command-Line.

File permissions may be viewed using ls -l:

```bash
-rw-------. 1 root root 2058 Oct  2 15:39 anaconda-ks.cfg
drwxr-xr-x. 2 root root   54 Oct  2 13:53 devopsdir
lrwxrwxrwx. 1 root root   16 Oct  2 17:23 info -> /tmp/sysinfo.txt
-rw-------. 1 root root 1388 Sep 18 17:30 original-ks.cfg
-rw-r--r--. 1 root root   31 Oct  2 17:10 samplefile.txt

```

Four symbols are used when displaying permissions:

- r : permission to read a file or list a directory's contents
- w : permission to write to a file or create and remove files from a directory
- x : permission to execute a program or change into a directory and do a long listing of the directory
- -: no permission(in place of r, w or x)

#### Changing File Ownership

Only root can change a file's owner.

Only root or the owner can change a file's group.

Ownership is changed with **chown**:

1. chown [-R] user_name file|directory ...

Group ownership is changed with **chgrp**:

2. chgrp [-R] group_name file|directory ...

Let's practice that by creating a new directory, a new group and four users. Then let's add user1, user2 and user3 to that newly created group:

```bash
[root@centos9 ~]# mkdir /opt/awsservice
[root@centos9 ~]# ls -l /opt
total 0
drwxr-xr-x. 2 root    root     6 Oct  3 15:48 awsservice
drwxr-xr-x. 3 root    root    17 Oct  1 16:23 dev
drwxrwx---. 2 ansible devops  25 Oct  3 14:52 devopsdir
drwxr-xr-x. 8 root    root   136 Sep 18 17:48 VBoxGuestAdditions-6.1.46
drwxr-xr--. 2 aws     devops   6 Oct  3 14:55 webdata
[root@centos9 ~]# groupadd admins
[root@centos9 ~]# useradd user1
[root@centos9 ~]# useradd user2
[root@centos9 ~]# useradd user3
[root@centos9 ~]# useradd greg
[root@centos9 ~]# usermod -G admins user1
[root@centos9 ~]# usermod -G admins user2
[root@centos9 ~]# usermod -G admins user3
[root@centos9 ~]#
```

So, we added user1, user2 and user3 to admins group. Different way of adding is to use Vim editor to add all of them in a same time.

So I have created /opt/awsservice directory, you can check the permission of directory by using ls -ld command:

```bash
[root@centos9 ~]# ls -ld /opt/awsservice
drwxr-xr-x. 2 root root 6 Oct  3 15:48 /opt/awsservice
[root@centos9 ~]#
```

Now, I want to change the ownership to user1 and to admins group, we can use chown command, I'm using here -R(recursively) so it will also apply changes to subdirectories and to all files inside:

```bash
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr-x. 2 root root 6 Oct  3 15:48 /opt/awsservice/
[root@centos9 ~]# chown -R user1:admins /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr-x. 2 user1 admins 6 Oct  3 15:48 /opt/awsservice/
[root@centos9 ~]#
```

So, let's change some permissions, user1 got all permissions, but I want to add write permission to admins group and remove read and execute from others.

We got two methods for changing permissions :

- Symbolic Method
- Numeric Method

#### Changing Permissions - Symbolic Method

To change access modes:

- chmod [-OPTION] ... mode[,mode] file directory ...

Mode includes:

1. u, g or o for user, group and other
2. +, - or = for grant, deny or set
3. r, w or x for read, write and execute

Options include:

1.  -R Recursive
2.  -v Verbose
3.  --reference : Reference another file for its mode

Examples:

1.  chmod ugo+r file: Grant read access to all for file
2.  chmod o-wx dir: Deny write and execute to others for dir

In practice, it will look like that:

```bash
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr-x. 2 user1 admins 6 Oct  3 15:48 /opt/awsservice/
[root@centos9 ~]# chmod g+w /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwxr-x. 2 user1 admins 6 Oct  3 15:48 /opt/awsservice/
[root@centos9 ~]# chmod o-r /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwx--x. 2 user1 admins 6 Oct  3 15:48 /opt/awsservice/
[root@centos9 ~]# chmod o-x /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwx---. 2 user1 admins 6 Oct  3 15:48 /opt/awsservice/
[root@centos9 ~]#
```

So, now it's how I wanted it to be, user1 has full permission to read, write and execute also admins group has full permissions to read, write and execute and others have no permission whatsoever.

Now I'll switch to greg, which is others user for this file, it shouldn't have permissions. Let's test it:

```bash
[root@centos9 ~]# su - greg
[greg@centos9 ~]$ whoami
greg
[greg@centos9 ~]$ cd /opt/awsservice/
-bash: cd: /opt/awsservice/: Permission denied
[greg@centos9 ~]$ ls /opt/awsservice/
ls: cannot open directory '/opt/awsservice/': Permission denied
[greg@centos9 ~]$ touch /opt/awsservice/newfile.txt
touch: cannot touch '/opt/awsservice/newfile.txt': Permission denied
[greg@centos9 ~]$
```

If we switch to user3 then we should have full permissions, let's test it:

```bash
[greg@centos9 ~]$ exit
logout
[root@centos9 ~]# su - user3
[user3@centos9 ~]$ id user3
uid=1008(user3) gid=1011(user3) groups=1011(user3),1008(admins)
[user3@centos9 ~]$ cd /opt/awsservice
[user3@centos9 awsservice]$ ls -l
total 0
[user3@centos9 awsservice]$ touch newfile.txt
[user3@centos9 awsservice]$ ls -l
total 0
-rw-r--r--. 1 user3 user3 0 Oct  3 17:40 newfile.txt
[user3@centos9 awsservice]$
[user3@centos9 ~]$ exit
logout
[root@centos9 ~]#
```

Like you can see user3 got all permissions because it's belongs to admins group.

There is another method I mention before - Numeric.

#### Changing Permissions - Numeric Method

Uses a three-digit mode number

1. First digit specifies owner's permissions
2. Second digit specifies group permissions
3. Third digit represents others' permissions

Permissions are calculated by adding:

1. 4 (for read)
2. 2 (for write)
3. 1 (for execute)

Example:

1. chmod 640 myfile

Let's say that I want to keep the user1 full permission, but remove write permission for the admins group, and add read permission for others. I'll use numeric method this time and add -R option for Recursive:

```bash
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwx---. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod -R 754 /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr--. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]#
```

So, first digit is a user it has full permission (4 + 2 + 1 = 7), then second digit is admins group it has only read and execute permissions (4 + 1 = 5) and others have read permission (4).
Numeric method is easy or quick way to give permission for user, group and others at the same time.

Exercise:

```bash
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwx---. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod 754 /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr--. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod +x /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr-x. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod 660 /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drw-rw----. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod +x /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwx--x. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod 444 /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
dr--r--r--. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod +wx /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr-x. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod 444 /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
dr--r--r--. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod ugo+wx /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxrwxrwx. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]# chmod 754 /opt/awsservice/
[root@centos9 ~]# ls -ld /opt/awsservice/
drwxr-xr--. 2 user1 admins 25 Oct  3 17:40 /opt/awsservice/
[root@centos9 ~]#
```
