---
layout: post
title: "Remote Server Envoriment For ML Project"
background: '/img/pages/simon.jpg'
---

# Remote Development using SSH

The Visual Studio Code Remote - SSH extention allows us to open a remote folder on any remote machine, virtual machine. The work flow is shown below,

![img](https://code.visualstudio.com/assets/docs/remote/ssh/architecture-ssh.png)

## Connect romte server with vscode

Follow [the official tutorial](https://code.visualstudio.com/docs/remote/ssh-tutorial), we are fine to connect remote server with vscode. 

## Configuring key based authentication

Typing password each time we connect to remote server is no doubt annoying. Here, set uo SSH key based authentication for your remote host can be useful. To avoid redundencym, follow [this tutorial](https://code.visualstudio.com/docs/remote/troubleshooting).

# Install Anaconda

Conda is an open-source package and environment management system. To install conda we first have Anaconda Installers downloaded at our local machine and then uploaded by drag the file to remote server.

follow [tutorial](https://linoxide.com/install-anaconda-on-ubuntu/).

## Useful conda command

```conda info --envs``` - list of all your envs

```conda create --name <env_name>``` - create env with name

## Pytorch & Cuda

[here](https://pytorch.org/get-started/locally/)

# Git clone project

```git clone <repo_link>```

