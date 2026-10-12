@echo off
title NOVA AI Smart Retail Store - MBA Challenge 2026
echo ========================================================
echo   NOVA -- Shop Smarter. Live Better.
echo   MBA Digital Business Challenge 2026 Prototype
echo ========================================================
echo.
set "PATH=%~dp0..\nodejs;%PATH%"
echo Starting NOVA AI Smart Retail Store...
start http://localhost:5173
"%~dp0..\nodejs\node.exe" "%~dp0node_modules\vite\bin\vite.js" --host
pause
