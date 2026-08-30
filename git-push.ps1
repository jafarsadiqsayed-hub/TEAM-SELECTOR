# ==============================================================================
# Auto Git Commit and Push Automation Script
# Kanniyath Usthad Islamic Academy - Arts Fest Team Selection Portal
# Target: https://github.com/jafarsadiqsayed-hub/TEAM-SELECTOR
# ==============================================================================

param(
    [string]$RemoteUrl = "https://github.com/jafarsadiqsayed-hub/TEAM-SELECTOR.git",
    [string]$CommitMessage = "Initial Commit: Kanniyath Usthad Islamic Academy - Arts Fest Team Selection Portal"
)

# Refresh environment PATH
$env:Path = [System.Environment]::GetEnvironmentVariable("Path","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path","User")
$gitExe = (Get-Command git.exe -ErrorAction SilentlyContinue).Source

if (-not $gitExe) {
    if (Test-Path "C:\Program Files\Git\cmd\git.exe") {
        $gitExe = "C:\Program Files\Git\cmd\git.exe"
    } elseif (Test-Path "C:\Program Files (x86)\Git\cmd\git.exe") {
        $gitExe = "C:\Program Files (x86)\Git\cmd\git.exe"
    } elseif (Test-Path "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe") {
        $gitExe = "$env:LOCALAPPDATA\Programs\Git\cmd\git.exe"
    }
}

if (-not $gitExe) {
    Write-Host "[INFO] Waiting for Git to finish installing on this PC..." -ForegroundColor Yellow
    Write-Host "Please run this script again in a moment or install Git from https://git-scm.com/download/win" -ForegroundColor Cyan
    exit 1
}

Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host "   INITIAL COMMIT & PUSH: TEAM-SELECTOR -> GITHUB               " -ForegroundColor Green
Write-Host "=================================================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Using Git at: $gitExe" -ForegroundColor DarkGray

# 1. Initialize Git
if (-not (Test-Path ".git")) {
    Write-Host "-> Initializing Git repository..." -ForegroundColor Yellow
    & $gitExe init
    & $gitExe branch -M main
}

# 2. Configure Git user identity
$userName = & $gitExe config user.name
if (-not $userName) {
    Write-Host "-> Setting Git identity for Jafar Sadiq..." -ForegroundColor DarkGray
    & $gitExe config user.name "jafarsadiqsayed-hub"
    & $gitExe config user.email "jafarsadiqsayed@gmail.com"
}

# 3. Stage all files
Write-Host "-> Staging all files..." -ForegroundColor Yellow
& $gitExe add -A

# 4. Commit
Write-Host "-> Creating initial commit..." -ForegroundColor Yellow
& $gitExe commit -m $CommitMessage

# 5. Remote configuration
$currentRemote = & $gitExe remote get-url origin 2>$null
if ($currentRemote) {
    & $gitExe remote set-url origin $RemoteUrl
} else {
    & $gitExe remote add origin $RemoteUrl
}

Write-Host "-> Remote origin set to: $RemoteUrl" -ForegroundColor Green

# 6. Push to GitHub
Write-Host "-> Pushing to GitHub (git push -u origin main)..." -ForegroundColor Cyan
& $gitExe push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "=================================================================" -ForegroundColor Green
    Write-Host " [SUCCESS] Initial commit pushed to https://github.com/jafarsadiqsayed-hub/TEAM-SELECTOR !" -ForegroundColor Green
    Write-Host "=================================================================" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "[NOTE] If a browser login window opened, please authorize Git to complete the push." -ForegroundColor Yellow
}
