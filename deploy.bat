@echo off
setlocal

REM GitHub Pages 本地部署脚本 (Windows版本)
echo 🚀 开始部署到 GitHub Pages...

REM 检查是否有未提交的更改
git status --porcelain > temp.txt
for /f %%i in (temp.txt) do (
    echo ❌ 检测到未提交的更改，请先提交所有更改
    git status
    del temp.txt
    exit /b 1
)
del temp.txt

REM 构建项目
echo 📦 构建项目...
call npm run build:gh-pages

if %errorlevel% neq 0 (
    echo ❌ 构建失败
    exit /b 1
)

REM 部署到 GitHub Pages
echo 🌐 部署到 GitHub Pages...
call npm run deploy

if %errorlevel% equ 0 (
    echo ✅ 部署成功！
    echo 🔗 访问地址: https://beerui.github.io/daji-docs-animate/
) else (
    echo ❌ 部署失败
    exit /b 1
) 