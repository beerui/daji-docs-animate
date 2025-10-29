## 1.2.0 (2025-10-29)

### 新增
- 新增全局步骤卡片组件：
  - GlobalStepCard1 步骤卡片组件（`src/components/GlobalStepCard1.vue`）
    - 支持图片缩放、标题移动、按钮渐现的悬停效果
    - 包含 RFQ 按钮的交互式步骤展示
  - GlobalStepCard2 国家卡片组件（`src/components/GlobalStepCard2.vue`）
    - 支持图片缩放和遮罩层渐现效果
    - 适用于国家/地区展示场景
- 数据与页面注册：
  - 在 `src/data/animations.js` 新增 2 个动画条目（global-step-card-1、global-step-card-2）
  - 在 `src/data/codeExamples.js` 新增对应的模板、样式和解释代码
  - 在 `src/views/Home.vue` 与 `src/views/AnimationDetail.vue` 导入并映射新组件

### 技术特性
- 使用 Vue 3 Composition API 和 SCSS 样式
- 响应式设计，支持悬停交互效果
- 模块化组件设计，便于复用和维护

## 1.1.0 (2025-09-15)

### 新增
- 新增组件：
  - BouncingDots 弹跳加载点（`src/components/BouncingDots.vue`）
  - RainbowBorder 彩虹流光边框（`src/components/RainbowBorder.vue`）
  - BreathingLight 呼吸灯效果（`src/components/BreathingLight.vue`）
  - RippleButton 按钮波纹点击特效（`src/components/RippleButton.vue`）
- 数据与页面注册：
  - 在 `src/data/animations.js` 新增 4 个动画条目
  - 在 `src/data/codeExamples.js` 新增 4 个示例代码块
  - 在 `src/views/Home.vue` 与 `src/views/AnimationDetail.vue` 导入并映射新组件

### 修复
- 修复 RippleButton 在 `scoped` 样式下涟漪不可见的问题，使用 `:deep(.ripple)` 选择器（`src/components/RippleButton.vue`）。
- 清理 SFC 重复 `<template>` 引起的构建错误（新建组件）。

### 其他
- 文档与示例保持一致，预览与详情页均可复制代码直接使用。


