# 大集动画文档库

一个基于Vue3 + SCSS的动画示例文档库，主打简单易用。

## 项目特点

- 🎨 **简单易用** - 专注于实用的动画效果
- 📱 **响应式设计** - 完美适配各种设备
- 🔍 **分类筛选** - 按动画类型快速查找
- 📝 **详细文档** - 每个动画都有完整的实现说明
- 📋 **一键复制** - 轻松复制代码到你的项目
- ⚡ **Vue3 + Vite** - 现代化的开发体验

## 动画类型

- **加载动画** - 文字闪烁、圆形加载器、波浪加载
- **运动动画** - 弹跳小球
- **过渡动画** - 淡入滑动
- **图标动画** - 心跳脉搏
- **文字动画** - 打字机效果
- **交互动画** - 浮动按钮

## 快速开始

### 安装依赖

\`\`\`bash
npm install
\`\`\`

### 启动开发服务器

\`\`\`bash
npm run dev
\`\`\`

### 构建生产版本

\`\`\`bash
npm run build
\`\`\`

## 项目结构

\`\`\`
daji-docs-animate/
├── src/
│   ├── components/          # 动画组件
│   │   ├── LoadingDots.vue
│   │   ├── LoadingCircle.vue
│   │   ├── BounceBall.vue
│   │   ├── FadeSlide.vue
│   │   ├── PulseHeart.vue
│   │   ├── WaveLoading.vue
│   │   ├── TypingText.vue
│   │   └── FloatingButton.vue
│   ├── views/               # 页面组件
│   │   ├── Home.vue         # 首页
│   │   └── AnimationDetail.vue # 详情页
│   ├── data/                # 数据文件
│   │   ├── animations.js    # 动画列表数据
│   │   └── codeExamples.js  # 代码示例数据
│   ├── styles/              # 样式文件
│   │   ├── variables.scss   # SCSS变量
│   │   └── global.scss      # 全局样式
│   ├── App.vue              # 主应用组件
│   └── main.js              # 入口文件
├── index.html
├── package.json
├── vite.config.js
└── README.md
\`\`\`

## 使用方法

1. 在首页浏览动画列表
2. 使用分类筛选快速查找所需动画
3. 点击动画卡片进入详情页
4. 查看动画演示和实现原理
5. 复制代码到你的项目中
6. 根据需要调整动画参数

## 技术栈

- **Vue 3** - 渐进式JavaScript框架
- **Vue Router** - 官方路由管理器
- **SCSS** - CSS预处理器
- **Vite** - 现代化构建工具

## 自定义动画

### 添加新动画

1. 在 \`src/components/\` 目录创建新的动画组件
2. 在 \`src/data/animations.js\` 中添加动画信息
3. 在 \`src/data/codeExamples.js\` 中添加代码示例
4. 在首页和详情页组件中引入新组件

### 动画组件规范

- 使用Vue单文件组件格式
- 样式使用SCSS并添加 \`scoped\` 属性
- 动画应该是无限循环播放
- 组件应该是自包含的，不依赖外部样式

## 浏览器兼容性

- Chrome (推荐)
- Firefox
- Safari
- Edge

## 许可证

MIT License

## 贡献

欢迎提交Issue和Pull Request来完善这个项目！

## 联系方式

如有问题或建议，请创建Issue或联系维护者。 