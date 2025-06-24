# GitHub Pages 故障排除指南

## 常见问题及解决方案

### 1. GitHub Pages 未启用错误

**错误信息**:
```
Error: Get Pages site failed. Please verify that the repository has Pages enabled and configured to build using GitHub Actions
```

**解决方案**:

#### 方法一：手动启用 GitHub Pages
1. 前往 GitHub 仓库页面
2. 点击 "Settings" 选项卡
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 部分选择 "GitHub Actions"
5. 保存设置

#### 方法二：检查工作流权限
1. 前往仓库的 "Settings" > "Actions" > "General"
2. 确保 "Workflow permissions" 设置为 "Read and write permissions"
3. 勾选 "Allow GitHub Actions to create and approve pull requests"

### 2. 静态资源 404 错误

**错误信息**:
```
GET https://beerui.github.io/src/main.js net::ERR_ABORTED 404 (Not Found)
```

**原因**: 静态资源路径配置不正确，没有使用正确的 base 路径。

**解决方案**:
已在项目中修复，确保以下配置正确：

- `vite.config.js` 中的 `base` 配置
- `src/main.js` 中的路由配置使用 `import.meta.env.BASE_URL`
- `index.html` 中的 favicon 使用相对路径或内联资源

### 3. 空白页面问题

**可能原因**:
- 路由配置错误
- JavaScript 文件加载失败
- 基础路径配置错误

**排查步骤**:
1. 打开浏览器开发者工具查看控制台错误
2. 检查网络选项卡确认所有资源是否正确加载
3. 验证 base URL 配置是否与 GitHub Pages URL 匹配

### 4. GitHub Actions 构建失败

**常见原因及解决方案**:

#### 依赖安装失败
```bash
# 在本地测试构建
npm ci
npm run build:gh-pages
```

#### Node.js 版本不兼容
- 检查 `.github/workflows/deploy.yml` 中的 Node.js 版本
- 确保与本地开发环境版本兼容

#### 构建命令错误
- 验证 `package.json` 中的构建脚本
- 确保 `cross-env` 包已安装用于跨平台支持

### 5. 权限错误

**错误信息**:
```
Error: HttpError: Not Found
```

**解决方案**:
1. 检查仓库是否为公开仓库（私有仓库需要 GitHub Pro）
2. 验证 workflow 权限设置
3. 确保 `GITHUB_TOKEN` 有足够权限

### 6. 部署后页面不更新

**可能原因**:
- 浏览器缓存
- CDN 缓存
- 构建产物未正确更新

**解决方案**:
1. 强制刷新浏览器 (Ctrl+F5)
2. 检查 GitHub Actions 工作流是否成功完成
3. 验证 `dist` 目录内容是否正确生成

## 调试步骤

### 1. 本地调试
```bash
# 1. 清理构建目录
rm -rf dist

# 2. 重新安装依赖
npm install

# 3. 本地构建测试
npm run build:gh-pages

# 4. 本地预览构建结果
npm run preview
```

### 2. 检查构建产物
```bash
# 检查 dist 目录结构
ls -la dist/

# 检查 HTML 文件中的资源路径
cat dist/index.html
```

### 3. 验证配置
```bash
# 检查 base URL 配置
grep -r "base:" vite.config.js

# 检查路由配置
grep -r "BASE_URL" src/
```

## 监控和日志

### GitHub Actions 日志
1. 前往仓库的 "Actions" 选项卡
2. 点击最新的工作流运行
3. 展开各个步骤查看详细日志
4. 重点关注 "构建项目" 和 "部署到 GitHub Pages" 步骤

### 浏览器调试
1. 打开开发者工具 (F12)
2. 查看控制台错误信息
3. 检查网络选项卡中的失败请求
4. 验证资源文件的实际 URL

## 联系支持

如果以上方案都无法解决问题，请：

1. 收集错误信息（截图/日志）
2. 描述重现步骤
3. 提供环境信息（浏览器、操作系统等）
4. 在 GitHub 仓库创建 Issue

## 有用的链接

- [GitHub Pages 官方文档](https://docs.github.com/en/pages)
- [GitHub Actions 文档](https://docs.github.com/en/actions)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [Vue Router 部署文档](https://router.vuejs.org/guide/essentials/history-mode.html) 