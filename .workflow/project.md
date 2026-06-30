# Project: daji-docs-animate

## What This Is

Vue3 + SCSS 动画示例文档库，提供 40+ 可复用的 CSS 动画组件（加载、运动、过渡、图标、文字、交互、SVG、3D、大屏等类别），支持分类筛选、详情预览和一键复制代码。部署于 GitHub Pages。

## Core Value

**让开发者快速找到并复用动画效果** — 如果其他功能都失败，动画展示和代码复制必须可靠工作。

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->
- [x] 动画分类展示（按类型筛选）
- [x] 动画详情页（演示 + 代码 + 实现原理）
- [x] 大屏动画系统（20 个数据驱动变体，统一渲染器）
- [x] 响应式布局
- [x] GitHub Pages 部署

### Active

<!-- Current scope being built toward. These are hypotheses until shipped. -->
- [ ] 架构重构与升级（待细化方向：TypeScript 迁移 / 组件接口统一 / 工程化升级 / 样式系统重构）

### Out of Scope

<!-- Explicit boundaries. Include reasoning to prevent re-adding. -->
- 动画编辑器 / 可视化配置面板 — 当前聚焦文档展示，交互式编辑是独立产品方向
- 后端服务 / 数据库 — 纯静态站点，无服务端需求

## Context

项目从 2024 年启动，已迭代到 v1.2.0。包含 24 个独立动画组件 + 1 个大屏渲染器（驱动 20 个变体）。数据层由 `animations.js` + `bigScreenAnimations.js` + `codeExamples.js` 组成，视图层为 Home（列表）和 AnimationDetail（详情）两个页面。SCSS 变量体系集中管理颜色、尺寸、断点。

## Constraints

- **部署**: GitHub Pages（静态站点，base path `/daji-docs-animate/`）
- **浏览器**: Chrome, Firefox, Safari, Edge
- **许可证**: MIT

## Tech Stack

- **Language**: JavaScript (ES Modules)
- **Framework**: Vue 3 (Composition API + Options API 混用)
- **Router**: Vue Router 4
- **Styling**: SCSS (scoped styles)
- **Build**: Vite 5
- **Package Manager**: npm

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| 大屏动画统一渲染器模式 | 20 个变体共享一个 BigScreenAnimation.vue，通过 variant prop + bigScreenVisuals 数据驱动，避免维护 20 套独立模板 | — Pending |

## Stakeholders

- beerui (维护者)

---
*Last updated: 2025-07-01 after initialization*
