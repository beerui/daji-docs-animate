#!/bin/bash

# GitHub Pages 本地部署脚本
echo "🚀 开始部署到 GitHub Pages..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
  echo "❌ 检测到未提交的更改，请先提交所有更改"
  git status
  exit 1
fi

# 构建项目
echo "📦 构建项目..."
npm run build:gh-pages

if [ $? -ne 0 ]; then
  echo "❌ 构建失败"
  exit 1
fi

# 部署到 GitHub Pages
echo "🌐 部署到 GitHub Pages..."
npm run deploy

if [ $? -eq 0 ]; then
  echo "✅ 部署成功！"
  echo "🔗 访问地址: https://beerui.github.io/daji-docs-animate/"
else
  echo "❌ 部署失败"
  exit 1
fi 