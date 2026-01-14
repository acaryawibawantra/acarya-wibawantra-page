---
title: "Mastering the Terminal: Panduan Lengkap dari Pemula hingga Mahir"
date: 2026-01-14
draft: false
tags: ["terminal", "cli", "productivity", "tutorial", "learning"]
author: "Acarya Wibawantra"
summary: "Catatan lengkap perjalanan saya belajar Terminal - dari takut command line sampai jadi productivity powerhouse. Includes cheat sheet, tips, dan tricks!"
ShowReadingTime: true
ShowShareButtons: true
---

# 💻 Mastering the Terminal

> Dari GUI enthusiast yang takut Command Line, menjadi Terminal power user yang tidak bisa hidup tanpa CLI.

---

## 📖 Apa Itu Terminal?

### Definisi Terminal

**Terminal** (atau **Command Line Interface/CLI**) adalah sebuah antarmuka berbasis teks yang memungkinkan Anda berkomunikasi langsung dengan sistem operasi komputer menggunakan **perintah tertulis** (commands), bukan dengan cara klik-klik menggunakan mouse seperti pada **GUI (Graphical User Interface)**.

**Analogi Sederhana:**
- **GUI** = Berbicara dengan komputer menggunakan **bahasa gambar** (icons, buttons, windows)
- **Terminal** = Berbicara dengan komputer menggunakan **bahasa teks** (commands)

```
┌─────────────────────────────────────────┐
│  GUI (Graphical User Interface)        │
│  ┌───────┐  ┌───────┐  ┌───────┐       │
│  │ 📁    │  │ 📄    │  │ 🗑️    │       │
│  │Folder │  │ File  │  │Trash  │       │
│  └───────┘  └───────┘  └───────┘       │
│         👆 Click to interact            │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│  CLI (Command Line Interface)           │
│  $ mkdir folder                         │
│  $ touch file.txt                       │
│  $ rm file.txt                          │
│         ⌨️ Type to interact             │
└─────────────────────────────────────────┘
```

---

### Komponen Terminal

#### 1. **Shell**
Program yang membaca dan mengeksekusi command Anda.

**Jenis-jenis Shell:**
- **Bash** - Bourne Again Shell (Linux default)
- **Zsh** - Z Shell (MacOS default sejak Catalina)
- **Fish** - Friendly Interactive Shell
- **PowerShell** - Windows default

```bash
# Check shell Anda:
echo $SHELL
# Output: /bin/zsh (MacOS)
# Output: /bin/bash (Linux)
```

#### 2. **Terminal Emulator**
Aplikasi yang menampilkan shell (window tempat Anda mengetik).

**Contoh:**
- **Terminal.app** (MacOS built-in)
- **iTerm2** (MacOS, more features)
- **GNOME Terminal** (Linux)
- **Windows Terminal** (Windows)
- **Hyper**, **Alacritty**, **Kitty** (Cross-platform)

---

### Terminal vs GUI: Kapan Pakai Apa?

| Aspek | Terminal (CLI) | GUI |
|-------|---------------|-----|
| **Speed** | ⚡ Sangat cepat (kalau sudah hafal) | 🐢 Lebih lambat (banyak klik) |
| **Automation** | ✅ Mudah (scripting) | ❌ Sulit/tidak bisa |
| **Remote Access** | ✅ SSH, lightweight | ❌ Butuh remote desktop, berat |
| **Precision** | ✅ Exact control | ⚠️ Limited options |
| **Learning Curve** | 📈 Steep (harus hafal command) | 📉 Easy (visual) |
| **Resource Usage** | 💚 Ringan | 💛 Lebih berat |
| **Multitasking** | ✅ Multiple commands parallel | ⚠️ One window at a time |

**Kapan pakai Terminal?**
- Development work (npm, git, docker)
- Server management
- Automation & scripting
- Batch operations (process 100 files sekaligus)
- Remote work via SSH

**Kapan pakai GUI?**
- Casual browsing files
- Image editing
- Video editing
- When you don't know exact file name/location

---

### Kenapa Developer Harus Belajar Terminal?

#### 1. **Developer Tools Built for CLI**
Hampir semua development tools modern dirancang untuk CLI:

```bash
# Version Control
git clone, git commit, git push

# Package Managers
npm install, pip install, brew install

# Build Tools
webpack, vite, hugo

# Deployment
ssh, docker, kubectl

# Databases
mysql -u root, psql, mongosh
```

**Tanpa Terminal = Tidak bisa pakai tools ini!**

#### 2. **Server Management**
Server production **tidak punya GUI**. Harus pakai SSH + Terminal.

```bash
# Connect to remote server
ssh user@server.example.com

# Deploy website
git pull origin main
npm run build
pm2 restart app
```

#### 3. **Automation**
Automate repetitive tasks yang di GUI butuh berjam-jam:

```bash
# Resize 1000 images in 1 command
for img in *.jpg; do convert $img -resize 800x600 resized/$img; done

# vs GUI: Open Photoshop → Open image → Resize → Save → Repeat 1000x 😭
```

#### 4. **Professional Standard**
Di dunia profesional, komunikasi sering melalui terminal command:

**Code review comments:**
> "To fix this, run: `npm install --legacy-peer-deps`"

**Documentation:**
> **Installation**
> ```bash
> git clone repo
> npm install
> npm run dev
> ```

**Job requirements:**
> Familiar with Linux command line, Git, Docker CLI

---

### Struktur Dasar Command

Semua command di terminal mengikuti pattern yang sama:

```bash
command [options] [arguments]
```

**Contoh:**
```bash
ls -lah /Users/acarya/Desktop
│  │   │
│  │   └─ Argument (what folder to list)
│  └───── Options/Flags (how to list: l=long, a=all, h=human-readable)
└──────── Command (list files)
```

**Breakdown:**
- **Command**: Apa yang ingin dilakukan (`ls`, `cd`, `git`)
- **Options/Flags**: Modifikasi perilaku command (`-l`, `--help`, `-r`)
- **Arguments**: Target operasi (file name, folder path, URL)

**Contoh lain:**
```bash
git commit -m "Add new feature"
│   │      │  │
│   │      │  └─ Argument (commit message)
│   │      └──── Option (-m = message)
│   └─────────── Sub-command
└─────────────── Main command

curl -X POST https://api.github.com
│    │  │    │
│    │  │    └─ Argument (URL)
│    │  └────── Argument (HTTP method)
│    └───────── Option
└────────────── Command
```

---

### Navigasi File System di Terminal

Di GUI, Anda lihat folder sebagai icons. Di Terminal, semua adalah **path** (alamat):

```
Graphical View (Finder):
📁 Users
  └─ 📁 acaryawibawantra
      └─ 📁 projects
          └─ 📁 website
              └─ 📄 index.html

Terminal View:
/Users/acaryawibawantra/projects/website/index.html
 │     │                │        │       └─ File
 │     │                │        └───────── Folder
 │     │                └────────────────── Folder
 │     └─────────────────────────────────── User home
 └───────────────────────────────────────── Root
```

**Absolute Path** (dari root):
```bash
/Users/acaryawibawantra/projects/website/index.html
└─ Starts with / (root)
```

**Relative Path** (dari current directory):
```bash
./website/index.html    # Current folder
../projects/website     # Parent folder
~/projects/website      # Home folder
```

---

### Terminal Workflow vs GUI Workflow

**Task: Create project structure**

**GUI Way (5-10 minutes):**
1. Open Finder
2. Navigate to Projects folder
3. Right-click → New Folder → Type "my-app"
4. Open my-app folder
5. Right-click → New Folder → Type "src"
6. Repeat for: public, components, utils
7. Right-click → New File → "index.html"
8. Right-click → New File → "App.js"
9. ... (repeat for every file)

**Terminal Way (10 seconds):**
```bash
cd ~/projects && \
mkdir -p my-app/{src/{components,utils},public} && \
cd my-app && \
touch src/{App.js,index.js} public/index.html && \
code .
```

**Result:**
```
my-app/
  ├── src/
  │   ├── components/
  │   ├── utils/
  │   ├── App.js
  │   └── index.js
  └── public/
      └── index.html
```

**2 lines of code vs 20 mouse clicks.** Ini power of Terminal! ⚡

---

## 🎯 Kenapa Harus Belajar Terminal?

### 1. **Speed & Efficiency**
```bash
# GUI: Buka Finder → Navigate → Right Click → New Folder → Type name
# Terminal (1 detik):
mkdir project-baru
```

### 2. **Automation**
```bash
# Bikin 10 folder sekaligus
mkdir project-{1..10}

# Hasil:
# project-1, project-2, ... project-10
```

### 3. **Remote Work**
```bash
# Connect ke server
ssh user@server.com

# Deploy website
git push origin main
```

### 4. **Developer Tools**
```bash
npm install    # Node.js packages
git clone      # Version control
docker run     # Containerization
hugo serve     # Static site generator
```

**Bottom Line**: GUI untuk casual use, Terminal untuk professional work.

---

## 📚 Terminal Basics: Command Essentials

### 🗂️ Navigation Commands

#### `pwd` - Print Working Directory
Lihat di mana posisi Anda sekarang.

```bash
pwd
# Output: /Users/acaryawibawantra/projects
```

**Kapan pakai?**
- Saat tersesat di folder structure
- Sebelum hapus/modify file (pastikan lokasi benar!)

---

#### `ls` - List Files
Lihat isi folder.

```bash
# Basic
ls

# Detailed view (size, permissions, date)
ls -l

# Include hidden files (dimulai dengan .)
ls -a

# Human-readable file sizes
ls -lh

# Combine multiple flags
ls -lah

# Urutkan by last modified
ls -lt
```

**Output Example:**
```bash
ls -lah
# drwxr-xr-x  5 acarya  staff   160B Jan 14 21:30 .
# drwxr-xr-x  8 acarya  staff   256B Jan 14 20:15 ..
# -rw-r--r--  1 acarya  staff   2.1K Jan 14 21:45 README.md
# drwxr-xr-x  3 acarya  staff    96B Jan 14 21:30 src
```

**Pro Tip**: Saya pakai alias `ll` untuk `ls -lah` (lebih praktis).

---

#### `cd` - Change Directory
Pindah folder.

```bash
# Masuk ke folder
cd projects

# Balik ke parent folder
cd ..

# Balik ke home directory
cd ~
# atau cukup:
cd

# Ke folder sebelumnya
cd -

# Absolute path
cd /Users/acaryawibawantra/Desktop

# Relative path
cd ./src/components
```

**Shortcuts:**
- `~` = Home directory (`/Users/acaryawibawantra`)
- `.` = Current directory
- `..` = Parent directory
- `-` = Previous directory

---

### 📝 File Operations

#### `touch` - Create File
```bash
# Bikin file baru
touch index.html

# Bikin multiple files
touch file1.txt file2.txt file3.txt

# Update timestamp existing file
touch existing-file.md
```

---

#### `mkdir` - Make Directory
```bash
# Bikin folder
mkdir new-folder

# Bikin nested folders sekaligus
mkdir -p parent/child/grandchild

# Bikin multiple folders
mkdir folder1 folder2 folder3
```

**Common Error:**
```bash
mkdir parent/child
# mkdir: parent: No such file or directory

# Fix: use -p flag
mkdir -p parent/child  # ✅
```

---

#### `cp` - Copy Files
```bash
# Copy file
cp source.txt destination.txt

# Copy folder (recursive)
cp -r folder1 folder2

# Copy multiple files ke folder
cp file1.txt file2.txt /destination/folder/

# Copy dengan konfirmasi (prevent overwrite)
cp -i source.txt dest.txt
```

---

#### `mv` - Move/Rename
```bash
# Rename file
mv old-name.txt new-name.txt

# Move file ke folder lain
mv file.txt /path/to/destination/

# Move multiple files
mv file1.txt file2.txt /destination/

# Rename folder
mv old-folder-name new-folder-name
```

---

#### `rm` - Remove Files
```bash
# ⚠️ HATI-HATI! Deletion is permanent!

# Delete file
rm file.txt

# Delete folder (recursive)
rm -r folder-name

# Force delete (no confirmation)
rm -rf folder-name

# Delete with confirmation
rm -i file.txt
```

**⚠️ WARNING: `rm -rf /` = DELETE EVERYTHING!**

**Safer Alternative:**
```bash
# Better: Move to trash instead
# (Mac only)
brew install trash
trash unwanted-file.txt  # Recoverable from Trash
```

---

### 🔍 Viewing & Searching

#### `cat` - View File Contents
```bash
# Print entire file
cat file.txt

# Concatenate multiple files
cat file1.txt file2.txt

# Show line numbers
cat -n file.txt
```

---

#### `less` / `more` - View Large Files
```bash
# Navigate dengan arrow keys, q untuk quit
less large-file.log

# Older alternative
more file.txt
```

**Controls in `less`:**
- `Space` = Next page
- `b` = Previous page
- `/search-term` = Search
- `q` = Quit

---

#### `head` / `tail` - View Start/End of File
```bash
# First 10 lines
head file.txt

# First 20 lines
head -n 20 file.txt

# Last 10 lines
tail file.txt

# Real-time monitoring (great for logs!)
tail -f server.log
```

---

#### `grep` - Search Inside Files
```bash
# Find lines containing "error"
grep "error" log.txt

# Case-insensitive search
grep -i "error" log.txt

# Search in multiple files
grep "TODO" *.js

# Search recursively in all files
grep -r "function" ./src

# Show line numbers
grep -n "import" App.tsx

# Invert match (show lines NOT containing pattern)
grep -v "debug" log.txt
```

**Real Example:**
```bash
# Find all console.log in project
grep -r "console.log" ./src
```

---

#### `find` - Search Files by Name
```bash
# Find file by name
find . -name "index.html"

# Case-insensitive
find . -iname "README.md"

# Find all .js files
find . -name "*.js"

# Find files modified in last 7 days
find . -mtime -7

# Find and delete
find . -name "*.log" -delete
```

---

### ⚙️ System Commands

#### `echo` - Print Text
```bash
# Print to terminal
echo "Hello World"

# Write to file (overwrite)
echo "content" > file.txt

# Append to file
echo "more content" >> file.txt

# Print variable
echo $HOME
```

---

#### `clear` - Clear Terminal
```bash
clear

# Shortcut: Cmd + K (Mac)
#          Ctrl + L (Linux)
```

---

#### `history` - Command History
```bash
# Show all previous commands
history

# Run previous command
!!

# Run command number 42 from history
!42

# Search history interactively
# Ctrl + R (then type search term)
```

---

#### `man` - Manual Pages
```bash
# Read manual for any command
man ls
man grep
man git

# Navigate: Space (next page), q (quit)
```

---

## 🚀 Advanced Commands

### File Permissions

#### `chmod` - Change Permissions
```bash
# Make file executable
chmod +x script.sh

# Numeric permissions (rwx = 4+2+1 = 7)
chmod 755 file.sh
# 7 = rwx (owner)
# 5 = r-x (group)
# 5 = r-x (others)

# Recursive
chmod -R 755 folder/
```

**Permission Guide:**
- `r` = Read (4)
- `w` = Write (2)
- `x` = Execute (1)

Common combinations:
- `755` = rwxr-xr-x (executable files)
- `644` = rw-r--r-- (regular files)
- `700` = rwx------ (private files)

---

### Process Management

#### `ps` - Process Status
```bash
# Show running processes
ps

# Detailed view
ps aux

# Find specific process
ps aux | grep "node"
```

---

#### `top` / `htop` - System Monitor
```bash
# Real-time system stats
top

# Better alternative (install first)
brew install htop
htop
```

---

#### `kill` - Stop Process
```bash
# Kill by PID
kill 1234

# Force kill
kill -9 1234

# Kill by name
killall node
```

---

### Networking

#### `ping` - Test Connection
```bash
# Check if host is reachable
ping google.com

# Limit to 5 packets
ping -c 5 google.com
```

---

#### `curl` - Transfer Data
```bash
# Download file
curl https://example.com/file.zip -o file.zip

# API request
curl https://api.github.com/users/acaryawibawantra

# POST request
curl -X POST -d "key=value" https://api.example.com
```

---

#### `wget` - Download Files
```bash
# Download file
wget https://example.com/file.zip

# Download with custom name
wget -O custom-name.zip https://example.com/file.zip

# Resume interrupted download
wget -c https://example.com/large-file.zip
```

---

### Compression

#### `tar` - Archive Files
```bash
# Create archive
tar -czf archive.tar.gz folder/

# Extract archive
tar -xzf archive.tar.gz

# List contents without extracting
tar -tzf archive.tar.gz
```

**Flags meaning:**
- `c` = create
- `x` = extract
- `z` = gzip compression
- `f` = file
- `v` = verbose (show progress)

---

#### `zip` / `unzip`
```bash
# Create zip
zip -r archive.zip folder/

# Extract zip
unzip archive.zip

# Extract to specific folder
unzip archive.zip -d destination/
```

---

## 🎨 Terminal Customization

### Oh My Zsh (MacOS)

**Install:**
```bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

**Popular Themes:**
```bash
# Edit ~/.zshrc
nano ~/.zshrc

# Change theme
ZSH_THEME="robbyrussell"  # Default
ZSH_THEME="agnoster"      # Powerline style
ZSH_THEME="powerlevel10k/powerlevel10k"  # Most popular
```

**Apply changes:**
```bash
source ~/.zshrc
```

---

### Aliases (Shortcuts)

Edit `~/.zshrc` or `~/.bashrc`:

```bash
# Navigation
alias ..="cd .."
alias ...="cd ../.."
alias home="cd ~"
alias desktop="cd ~/Desktop"
alias projects="cd ~/projects"

# List files
alias ll="ls -lah"
alias la="ls -a"

# Git shortcuts
alias gs="git status"
alias ga="git add ."
alias gc="git commit -m"
alias gp="git push"
alias gl="git log --oneline --graph"

# NPM shortcuts
alias ni="npm install"
alias nrd="npm run dev"
alias nrb="npm run build"

# Safety aliases
alias rm="rm -i"  # Confirm before delete
alias cp="cp -i"  # Confirm before overwrite
alias mv="mv -i"  # Confirm before overwrite

# Productivity
alias c="clear"
alias h="history"
alias myip="curl ifconfig.me"  # Get public IP

# Project specific
alias blog="cd ~/acaryawibawantra.xyz && code ."
alias serve="hugo serve"
```

**Activate:**
```bash
source ~/.zshrc
```

**Now you can:**
```bash
# Instead of:
cd ~/projects/acaryawibawantra.xyz

# Just type:
blog
```

---

## 💡 Tips & Tricks

### 1. **Tab Completion** ⚡
```bash
# Type first few letters, then press Tab
cd proj[Tab]
# Auto-completes to: cd projects/

# Double Tab shows all options
ls proj[Tab][Tab]
# Shows: project-1/ project-2/ project-baru/
```

---

### 2. **Command History Search** 🔍
```bash
# Press Ctrl + R, then type keyword
# Example: search "git commit"
(reverse-i-search)`git': git commit -m "Add feature"

# Press Enter to run
# Press Ctrl + R again to cycle through matches
```

---

### 3. **Piping Commands** 🔀
```bash
# Chain commands together
ls | grep ".md"  # List only .md files

cat file.txt | grep "error" | wc -l  # Count error lines

ps aux | grep "node" | awk '{print $2}'  # Get PIDs of Node processes
```

---

### 4. **Output Redirection** 📝
```bash
# Save output to file
ls -la > files.txt

# Append to file
echo "New line" >> files.txt

# Redirect errors
command 2> errors.log

# Redirect both output and errors
command &> all-output.log

# Discard output
command > /dev/null
```

---

### 5. **Background Processes** ⏭️
```bash
# Run in background
long-running-command &

# Bring to foreground
fg

# List background jobs
jobs

# Stop current process (Ctrl + Z), then:
bg  # Continue in background
```

---

### 6. **Multiple Commands** 🔗
```bash
# Run sequentially
command1; command2; command3

# Run only if previous succeeds (AND)
command1 && command2 && command3

# Run if previous fails (OR)
command1 || command2

# Example:
mkdir new-project && cd new-project && npm init -y
```

---

### 7. **Wildcards** 🃏
```bash
# * = any characters
rm *.log  # Delete all .log files

# ? = single character
ls file?.txt  # Matches: file1.txt, fileA.txt

# {} = multiple patterns
cp file.{txt,md,json} backup/

# Range
rm file{1..10}.txt  # Delete file1.txt to file10.txt
```

---

### 8. **Keyboard Shortcuts** ⌨️

**Navigation:**
- `Ctrl + A` = Start of line
- `Ctrl + E` = End of line
- `Ctrl + U` = Delete line before cursor
- `Ctrl + K` = Delete line after cursor
- `Ctrl + W` = Delete word before cursor
- `Ctrl + L` = Clear screen (same as `clear`)

**Control:**
- `Ctrl + C` = Cancel current command
- `Ctrl + D` = Exit terminal (same as `exit`)
- `Ctrl + Z` = Suspend process
- `Ctrl + R` = Search history

---

### 9. **Quick File Edit** ✏️
```bash
# Open file in default editor
nano file.txt    # Beginner-friendly
vim file.txt     # Advanced
code file.txt    # VS Code (if installed)

# Quick one-liner edit
echo "new content" > file.txt
```

---

### 10. **Disk Usage** 💾
```bash
# Check disk space
df -h

# Check folder size
du -sh folder/

# Find largest files
du -ah . | sort -rh | head -20
```

---

## 🐛 Common Errors & Solutions

### ❌ "Permission Denied"
```bash
# Error
bash: ./script.sh: Permission denied

# Solution
chmod +x script.sh
./script.sh
```

---

### ❌ "Command Not Found"
```bash
# Error
zsh: command not found: git

# Solutions:
# 1. Install the tool
brew install git

# 2. Check if it's installed
which git

# 3. Add to PATH
export PATH=$PATH:/path/to/tool
```

---

### ❌ "No Such File or Directory"
```bash
# Error
cd projects
# cd: no such file or directory: projects

# Solutions:
# 1. Check spelling
ls  # See available folders

# 2. Use full path
cd ~/projects

# 3. Check if you're in right directory
pwd
```

---

### ❌ Accidentally Deleted File
```bash
# Prevention: Use trash instead
brew install trash
trash file.txt  # Moves to Trash (recoverable)

# If already deleted with rm:
# Sorry, it's gone 😢
# Lesson: Always backup important files!
```

---

## 🎓 Learning Resources

### Beginner-Friendly:
- [Explain Shell](https://explainshell.com) - Paste command, get explanation
- [Linux Journey](https://linuxjourney.com) - Interactive tutorial
- [Command Line Challenge](https://cmdchallenge.com) - Practice problems

### Interactive:
- [Learn Enough Command Line](https://www.learnenough.com/command-line-tutorial)
- [The Art of Command Line](https://github.com/jlevy/the-art-of-command-line)

### Reference:
- [DevHints Bash Cheat Sheet](https://devhints.io/bash)
- [TLDR Pages](https://tldr.sh) - Simplified man pages

---

## 🚀 My Current Terminal Setup

### Tools I Use Daily:
- **Shell**: Zsh with Oh My Zsh
- **Theme**: Powerlevel10k
- **Terminal App**: iTerm2 (Mac) / Built-in Terminal
- **Plugins**: 
  - `zsh-autosuggestions` (command suggestions)
  - `zsh-syntax-highlighting` (syntax colors)
  - `git` (git aliases)
  - `npm` (npm completion)

### Must-Have CLI Tools:
```bash
brew install git          # Version control
brew install node         # JavaScript runtime
brew install hugo         # Static site generator
brew install tree         # Directory visualization
brew install tldr         # Simplified man pages
brew install bat          # Better cat with syntax highlighting
brew install fzf          # Fuzzy finder
```

---

## 🎬 Final Thoughts

**Terminal dulu vs sekarang:**

**Dulu (2024):**
```bash
# Me: *nervously types*
ls
# *Nothing bad happened, phew*
```

**Sekarang (2026):**
```bash
# Me: *rapid fire commands*
cd ~/projects && \
  mkdir new-app && \
  cd new-app && \
  npm init -y && \
  npm i next react && \
  code . && \
  echo "🚀 Let's build!"
```

**What I Learned:**
1. ⚡ **Practice > Theory** - Just use it daily
2. 🔥 **Break things** - That's how you learn
3. 📚 **Google is your friend** - No one memorizes everything
4. 🛠️ **Customize** - Make it YOUR workflow
5. 🤝 **Share knowledge** - Teach others what you learn

---

## 📋 Quick Reference Cheat Sheet

```bash
# NAVIGATION
pwd                 # Print current directory
ls -lah             # List files (detailed + hidden)
cd folder           # Change directory
cd ..               # Go up one level
cd ~                # Go home

# FILES
touch file.txt      # Create file
mkdir folder        # Create folder
cp file1 file2      # Copy
mv old new          # Move/rename
rm file             # Delete file
rm -rf folder       # Delete folder

# VIEWING
cat file            # View entire file
less file           # View file (scrollable)
head -n 20 file     # First 20 lines
tail -f file        # Last lines (real-time)

# SEARCHING
grep "text" file    # Search in file
find . -name "*.js" # Find files

# SYSTEM
ps aux              # Running processes
kill PID            # Stop process
df -h               # Disk space
top                 # System monitor

# GIT (Bonus!)
git status          # Check status
git add .           # Stage all files
git commit -m "msg" # Commit
git push            # Push to remote
git pull            # Pull from remote
git log --oneline   # View commits
```

---

**Download this post as PDF**: [Coming soon]

**Questions?** Drop them in the comments or reach out on [GitHub](https://github.com/acaryawibawantra)!

---

*Last updated: January 14, 2026*

**Keep coding, keep learning, keep typing those commands!** ⚡💻

