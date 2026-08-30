@echo off
title College Arts Fest - Localhost Server
color 0a
echo =====================================================================
echo           COLLEGE ARTS FEST - LOCALHOST SERVER LAUNCHER
echo =====================================================================
echo.
echo Starting local web server on http://localhost:8000 ...
echo.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
