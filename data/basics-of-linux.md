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

## 4. Filter & IO redirection command.
