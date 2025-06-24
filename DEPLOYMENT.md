# GitHub Pages 部署指南

## 自动化部署流程

本项目已配置自动化 GitHub Actions 工作流，当代码推送到 `main` 分支时会自动构建和部署到 GitHub Pages。

### 部署步骤

1. **启用 GitHub Pages**
   - 前往你的 GitHub 仓库设置页面
   - 滚动到 "Pages" 部分
   - 在 "Source" 下选择 "GitHub Actions"

2. **自动部署**
   - 推送代码到 `main` 分支会自动触发部署
   - 在 Actions 选项卡中可以查看部署状态
   - 部署完成后可在 `https://beerui.github.io/daji-docs-animate/` 访问

3. **手动部署**
   ```bash
   # 本地构建和部署（需要先安装 gh-pages）
   npm install
   npm run deploy
   ```

### 配置说明

#### Vite 配置 (`vite.config.js`)
- 设置了 `base` 路径以匹配 GitHub Pages 的 URL 结构
- 配置了生产环境构建优化
- 启用了代码分割以提高加载性能

#### GitHub Actions 工作流 (`.github/workflows/deploy.yml`)
- **触发条件**: 推送到 `main` 分支或手动触发
- **构建环境**: Ubuntu Latest + Node.js 20
- **构建过程**: 
  1. 检出代码
  2. 设置 Node.js 环境
  3. 安装依赖
  4. 构建项目
  5. 部署到 GitHub Pages

#### 路由配置
- Vue Router 配置了正确的 base URL 以支持 GitHub Pages
- 使用 `import.meta.env.BASE_URL` 确保路由在不同环境下正常工作

### 文件说明

- `public/.nojekyll`: 告诉 GitHub Pages 不要使用 Jekyll 处理文件
- `dist/`: 构建输出目录（由 GitHub Actions 自动生成）

### 访问地址

部署成功后，你的应用将在以下地址可用：
- **生产地址**: https://beerui.github.io/daji-docs-animate/
- **本地开发**: http://localhost:5173

### 故障排除

1. **部署失败**
   - 检查 GitHub Actions 日志
   - 确保仓库设置中启用了 GitHub Pages
   - 确认权限设置正确

2. **页面空白**
   - 检查浏览器控制台错误
   - 确认 base URL 配置正确
   - 检查静态资源路径

3. **路由不工作**
   - GitHub Pages 不支持 SPA 的客户端路由
   - 考虑使用 hash 模式或配置 404 页面重定向

### 开发工作流

1. 本地开发: `npm run dev`
2. 构建测试: `npm run build:gh-pages`
3. 本地预览: `npm run preview`
4. 推送部署: `git push origin main`

部署完成后，每次推送到 main 分支都会自动更新线上版本。 