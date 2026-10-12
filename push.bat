@echo off
title Push NOVA to GitHub
echo ========================================================
echo   Pushing to https://github.com/suvangi27/nova-ai-smart-retail
echo ========================================================
echo.
set "PATH=%~dp0..\mingit\cmd;%PATH%"
git push -u origin main
echo.
pause
