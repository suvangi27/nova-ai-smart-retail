@echo off
title Push NOVA to GitHub with Token
echo ========================================================
echo   Pushing to https://github.com/suvangi27/nova-ai-smart-retail
echo ========================================================
echo.
set /p TOKEN="Enter your GitHub Personal Access Token (classic with repo scope): "
if "%TOKEN%"=="" (
    echo Token cannot be empty.
    pause
    exit /b
)
set "PATH=%~dp0..\mingit\cmd;%PATH%"
git push -u https://%TOKEN%@github.com/suvangi27/nova-ai-smart-retail.git main
echo.
pause
