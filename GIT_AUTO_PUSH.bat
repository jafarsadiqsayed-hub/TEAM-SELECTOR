@echo off
title Auto Git Commit and Push - Arts Fest Team Selection
color 0b
echo =====================================================================
echo         AUTO GIT COMMIT AND PUSH TO GITHUB
echo         Kanniyath Usthad Islamic Academy - Arts Fest Portal
echo =====================================================================
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0git-push.ps1"
echo.
pause
