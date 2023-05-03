---
title: "CS 45: Software Installation"
---

<script lang="ts">
  import Callout from '$lib/Callout.svelte';
  import OnlyShowOn, { system } from '$lib/OnlyShowOn.svelte';
</script>

# Software & Computer Setup

<OnlyShowOn mac>
  <Callout warning>
    We’ve detected that you're using a Mac computer.
    <a href="#top" on:click={() => ($system = 'windows')}> Click here if you’re using Windows </a>
    or <a href="#top" on:click={() => ($system = 'linux')}>Linux.</a>
    The instructions on this page will be tailored to the detected system.
  </Callout>
</OnlyShowOn>

<OnlyShowOn windows>
  <Callout warning>
    We’ve detected that you're using a Windows computer.
    <a href="#top" on:click={() => ($system = 'mac')}>Click here if you’re using Mac</a>
    or <a href="#top" on:click={() => ($system = 'linux')}>Linux.</a>
    The instructions on this page will be tailored to the detected system.
  </Callout>
</OnlyShowOn>

<OnlyShowOn linux>
  <Callout warning>
    We’ve detected that you're using a Linux computer.
    <a href="#top" on:click={() => ($system = 'mac')}>Click here if you’re using Mac</a>
    or <a href="#top" on:click={() => ($system = 'windows')}>Windows.</a>
    The instructions on this page will be tailored to the detected system.
  </Callout>
</OnlyShowOn>

<OnlyShowOn unknown>
  <Callout warning>
    The instructions on this page are tailored to your system, but we couldn't detect it.
    <a href="#top" on:click={() => ($system = 'mac')}>Click here if you’re using Mac</a>, or
    <a href="#top" on:click={() => ($system = 'windows')}>here if you're using Windows</a>, or
    <a href="#top" on:click={() => ($system = 'windows')}>here if you're using Linux</a>.
  </Callout>
</OnlyShowOn>

## Setting Up Your Shell Environment {#shell-setup}

<OnlyShowOn linux>

If you’re running linux, you’re already all good to go! Note that the install instructions below
assume you’re running some flavor of Ubuntu or Debian; if you use a different distribution, replace
`apt-get install` with the appropriate installation command for the package manager your
distribution uses (e.g. `pacman` or `yum`)

</OnlyShowOn>

<OnlyShowOn mac>

### Installing Homebrew

macOS already has a working shell environment, but it’s not straightforward to install some of the
tools we’ll be using manually. Instead, we’ll use **Homebrew**, the “missing package manager for
macOS.”

If you already have Homebrew installed, you don’t need to install it again.

To install, open the Terminal app on your Mac and follow the instructions at
[Homebrew’s website](https://brew.sh). Namely, copy-paste the following into your terminal window
and press Return:

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Then follow the instructions as they show up in your terminal. You may need to type your computer
password at some point; note that there will be no visual feedback, just hit enter once it has been
typed.

**At the end of the setup, there may be a section that reads “Next Steps...” with instructions to
copy/paste a few lines. Please do these to finish the setup.**

You can test to make sure you did it correctly by typing `brew` and making sure it gives you help
text and information (and does not say “command not found”).

</OnlyShowOn>

<OnlyShowOn windows>

### Installing WSL

Windows Subsystem for Linux, or WSL, allows you to run a traditional Unix shell on your Windows
machine. We’ll do our best to show off Windows-compatible and Windows-native software as we go
through, but many useful and/or necessary tools used when doing software developemnt are only
available via a Unix shell. (This is a problem Microsoft realized, and WSL is their answer to it!)

To install WSL, ensure you’re running a recent version of Windows 10 or Windows 11. Then,
right-click the start menu, and click **Command Prompt: Administrator** or **Windows Powershell:
Administrator**. Press "Yes" when prompted. Finally, type in the following command:

```powershell
wsl --install -d Ubuntu
```

Wait for it to finish. Once you’re done, you should find a new application on your computer entitled
**Ubuntu** – launch this to get a Unix shell. All the install instructions below will assume you’re
working within a Unix shell.

</OnlyShowOn>

## Software for the Class

### Lecture 2: The Shell and Shell Tools

Follow the <a href="#shell-setup">shell setup</a> instructions and you’ll be good to go.

I demoed a non-standard command called `bat` during the lecture.  This can optionally be installed using:
<OnlyShowOn windows linux>

```bash
apt install bat
```
</OnlyShowOn>
<OnlyShowOn mac>

```zsh
brew install bat
```
</OnlyShowOn>

We'll add more here as we go through the quarter; be sure to check back before
each lecture!

### Lecture 5: Text Editors

You'll want to install the `vim` program to fully follow along:

<OnlyShowOn windows linux>

```shell
sudo apt-get install vim
```

</OnlyShowOn>

<OnlyShowOn mac>

```shell
brew install vim
```

</OnlyShowOn>

### Lecture 6: Command-Line Environment

You'll want to install the `tmux` program to fully follow along:

<OnlyShowOn windows linux>

```shell
sudo apt-get install tmux
```

</OnlyShowOn>

<OnlyShowOn mac>

```shell
brew install tmux
```

</OnlyShowOn>

### Lecture 8: Computer Networking {#lec8}

You'll want to install `python3`, `node`, `ngrok`, `dig` and optionally Wireshark to fully follow
along. You'll also need to sign up for an [`ngrok` account](https://ngrok.com).

<OnlyShowOn linux>
On Linux, you may also need to install `traceroute` and `dig`:

```shell
sudo apt-get install inetutils-traceroute dnsutils python3 wireshark curl dnsutils
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

...then restart your terminal, and run...

```shell
nvm install node

curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list && sudo apt update && sudo apt install ngrok
```

</OnlyShowOn>

<OnlyShowOn windows>

```shell
sudo apt-get install curl dnsutils
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
```

...then restart your terminal, and run...

```shell
nvm install node

curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | sudo tee /etc/apt/sources.list.d/ngrok.list && sudo apt update && sudo apt install ngrok
```

</OnlyShowOn>

<OnlyShowOn mac>

```shell
brew install node
brew install ngrok/ngrok/ngrok
brew install python3
```

</OnlyShowOn>

<OnlyShowOn windows mac>

You can download Wireshark [here](https://www.wireshark.org/download.html).

</OnlyShowOn>

### Lectures 9 and 10: Version Control

You'll want to install the `git` and `gh` programs to fully follow along:

<OnlyShowOn windows linux>

Many distributions ship with `git` already, but if it's not installed you can
install it via a package manager:

```shell
sudo apt-get install git
```

To install `gh`, follow the steps from
[the official installation instructions](https://github.com/cli/cli/blob/trunk/docs/install_linux.md)

</OnlyShowOn>

<OnlyShowOn mac>

On macOS, `git` is already installed as part of the Assignment 0 installation.

```shell
brew install gh
```

</OnlyShowOn>

You'll also want to sign up for a GitHub account at [github.com/signup](https://github.com/signup)

<!-- ### Lecture 12: Recent Unix Tools -->

<!-- We'll be covering an assortment of tools, including `rg`, `fd`, `exa`, `fish`, `magick`, `pandoc`, -->
<!-- and `ffmpeg`. The slides and lecture notes have links to the installation instructions for each -->
<!-- piece of software. The ones you need for Assignment 6 are Pandoc (`pandoc`) and ImageMagick -->
<!-- (`convert`). -->

<!-- <OnlyShowOn mac> -->

<!-- ```shell -->
<!-- brew install pandoc -->
<!-- brew install imagemagick -->
<!-- ``` -->

<!-- </OnlyShowOn> -->

<!-- <OnlyShowOn windows linux> -->

<!-- ```shell -->
<!-- sudo apt-get install pandoc imagemagick -->
<!-- ``` -->

<!-- </OnlyShowOn> -->

<!-- ### Lecture 15: Virtual Machines & Containers -->

<!-- You'll want to install a virtual machine hypervisor for your platform, and Docker Desktop. -->
<!-- You'll also need to grab a copy of an Ubuntu Server disk image, which you -->
<!-- can download from [here](https://ubuntu.com/download/server). **If you're on an -->
<!-- M1 Mac, please make sure to download the "Ubuntu Server for ARM" verison from -->
<!-- [here](https://ubuntu.com/download/server/arm)**. -->

<!-- <OnlyShowOn mac> -->

<!-- Download UTM from [here](https://mac.getutm.app/). -->

<!-- </OnlyShowOn> -->

<!-- <OnlyShowOn windows> -->

<!-- Download Virtualbox from [here](https://www.virtualbox.org/wiki/Downloads). -->

<!-- </OnlyShowOn> -->

<!-- <OnlyShowOn linux> -->

<!-- Download Virtualbox from [here](https://www.virtualbox.org/wiki/Linux_Downloads). -->

<!-- </OnlyShowOn> -->

<!-- And finally, download and install Docker Desktop from [here](https://docs.docker.com/get-docker/). -->

<!-- ### Lecture 16: Cloud & Serverless Computing -->

<!-- You’ll need to sign up for an account with Vercel and Oracle Cloud. -->

<!-- Sign up or log in to your [Vercel account](https://vercel.com), and sign up or log in to your -->
<!-- [Oracle Cloud account](https://www.oracle.com/cloud/sign-in.html). -->

<!-- (Note that you will need to provide a payment method to Oracle Cloud in order to complete sign-up. -->
<!-- You will not be charged. Let us know if this presents you with any issue!) -->
