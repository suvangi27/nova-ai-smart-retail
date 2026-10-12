@echo off
title NOVA AI Smart Retail Store - Production Preview
echo ========================================================
echo   NOVA -- Production Preview
echo   MBA Digital Business Challenge 2026
echo ========================================================
echo.
set "PATH=%~dp0..\nodejs;%PATH%"
echo Launching Production Build...
start http://localhost:4173
"%~dp0..\nodejs\node.exe" "%~dp0node_modules\vite\bin\vite.js" preview --host
pause
