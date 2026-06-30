import { bigScreenAnimations } from './bigScreenAnimations.js'

export const animations = [
  {
    id: 'loading-dots',
    title: '文字逐个闪烁',
    description: '文字按顺序依次闪烁显示的动画效果',
    category: '加载动画',
    difficulty: '简单',
    tags: ['文字', '闪烁', '加载'],
    component: 'LoadingDots'
  },
  {
    id: 'loading-circle',
    title: '圆形加载器',
    description: '经典的圆形旋转加载动画',
    category: '加载动画',
    difficulty: '简单',
    tags: ['圆形', '旋转', '加载'],
    component: 'LoadingCircle'
  },
  {
    id: 'bounce-ball',
    title: '弹跳小球',
    description: '小球上下弹跳的动画效果',
    category: '运动动画',
    difficulty: '简单',
    tags: ['弹跳', '小球', '运动'],
    component: 'BounceBall'
  },
  {
    id: 'fade-slide',
    title: '淡入滑动',
    description: '元素从透明到不透明并伴随滑动效果',
    category: '过渡动画',
    difficulty: '简单',
    tags: ['淡入', '滑动', '过渡'],
    component: 'FadeSlide'
  },
  {
    id: 'pulse-heart',
    title: '心跳脉搏',
    description: '心形图标的脉搏跳动动画',
    category: '图标动画',
    difficulty: '简单',
    tags: ['心跳', '脉搏', '图标'],
    component: 'PulseHeart'
  },
  {
    id: 'wave-loading',
    title: '波浪加载',
    description: '模拟波浪起伏的加载动画',
    category: '加载动画',
    difficulty: '中等',
    tags: ['波浪', '起伏', '加载'],
    component: 'WaveLoading'
  },
  {
    id: 'typing-text',
    title: '打字机效果',
    description: '模拟打字机逐字显示文本的效果',
    category: '文字动画',
    difficulty: '中等',
    tags: ['打字机', '文字', '逐字'],
    component: 'TypingText'
  },
  {
    id: 'floating-button',
    title: '浮动按钮',
    description: '按钮悬浮上下浮动的动画效果',
    category: '交互动画',
    difficulty: '简单',
    tags: ['浮动', '按钮', '交互'],
    component: 'FloatingButton'
  },
  {
    id: 'shimmer-loading',
    title: '闪光加载',
    description: '模拟骨架屏的闪光加载效果',
    category: '加载动画',
    difficulty: '中等',
    tags: ['闪光', '骨架屏', '加载'],
    component: 'ShimmerLoading'
  },
  {
    id: 'spinner-dots',
    title: '旋转点阵',
    description: '多个点围成圆形旋转的加载动画',
    category: '加载动画',
    difficulty: '中等',
    tags: ['旋转', '点阵', '加载'],
    component: 'SpinnerDots'
  },
  {
    id: 'progress-bar',
    title: '进度条',
    description: '带闪光效果的进度条动画',
    category: '加载动画',
    difficulty: '中等',
    tags: ['进度条', '闪光', '百分比'],
    component: 'ProgressBar'
  },
  {
    id: 'rotating-card',
    title: '3D翻转卡片',
    description: '鼠标悬停触发的3D卡片翻转效果',
    category: '交互动画',
    difficulty: '中等',
    tags: ['3D', '翻转', '悬停'],
    component: 'RotatingCard'
  },
  {
    id: 'shine-text',
    title: '文字扫光',
    description: '文字上的光线扫过效果，打造科技感',
    category: '文字动画',
    difficulty: '中等',
    tags: ['扫光', '文字', '科技感'],
    component: 'ShineText'
  },
  {
    id: 'camera-icon',
    title: '相机图标动画',
    description: 'SVG相机图标的描边动画和脉冲效果',
    category: 'SVG动画',
    difficulty: '中等',
    tags: ['SVG', '相机', '描边', '脉冲'],
    component: 'CameraIcon'
  },
  {
    id: 'bouncing-dots',
    title: '弹跳加载点',
    description: '三个小圆点依次向上弹跳的加载动画',
    category: '加载动画',
    difficulty: '简单',
    tags: ['加载', '弹跳', '点'],
    component: 'BouncingDots'
  },
  {
    id: 'rainbow-border',
    title: '彩虹流光边框',
    description: '彩虹渐变背景移动形成流光边框效果',
    category: '交互动画',
    difficulty: '简单',
    tags: ['边框', '渐变', '流光'],
    component: 'RainbowBorder'
  },
  {
    id: 'breathing-light',
    title: '呼吸灯效果',
    description: '通过阴影强度变化模拟呼吸光效',
    category: '过渡动画',
    difficulty: '简单',
    tags: ['呼吸', '发光', '阴影'],
    component: 'BreathingLight'
  },
  {
    id: 'ripple-button',
    title: '按钮波纹点击',
    description: '点击位置产生扩散涟漪的按钮特效',
    category: '交互动画',
    difficulty: '简单',
    tags: ['按钮', '波纹', '点击'],
    component: 'RippleButton'
  },
  {
    id: 'global-step-card-1',
    title: '卡片展示1',
    description: '卡片组件，包含悬停动画效果',
    category: '交互动画',
    difficulty: '中等',
    tags: ['卡片', '悬停', '展示'],
    component: 'GlobalStepCard1'
  },
  {
    id: 'global-step-card-2',
    title: '卡片展示2',
    description: '展示卡片组件，包含悬停动画效果',
    category: '交互动画',
    difficulty: '中等',
    tags: ['卡片', '悬停', '展示'],
    component: 'GlobalStepCard2'
  },
  {
    id: 'daji-tilt-rotate',
    title: '大集圆环倾斜旋转',
    description: '使用图片纹理实现倾斜透视下的圆环旋转效果',
    category: '3D动画',
    difficulty: '中等',
    tags: ['图片', '3D', '旋转', '透视'],
    component: 'DajiTiltRotate'
  },
  {
    id: 'tilt-card',
    title: '3D倾斜卡片',
    description: '鼠标移动时卡片跟随倾斜，配合光泽扫过效果，营造立体交互感',
    category: '交互动画',
    difficulty: '中等',
    tags: ['3D', '倾斜', '卡片', '鼠标跟随'],
    component: 'TiltCard'
  },
  {
    id: 'glass-sweep',
    title: '毛玻璃扫光',
    description: '毛玻璃质感卡片表面周期性光线扫过，打造高端科技视觉',
    category: '过渡动画',
    difficulty: '简单',
    tags: ['毛玻璃', '扫光', '科技感'],
    component: 'GlassSweep'
  },
  {
    id: 'orbit-ring',
    title: '轨道环旋转',
    description: '多层同心环带发光点绕中心旋转，模拟卫星轨道或数据环',
    category: '运动动画',
    difficulty: '中等',
    tags: ['轨道', '旋转', '光环', '科技'],
    component: 'OrbitRing'
  },
  {
    id: 'float-orb',
    title: '悬浮光球',
    description: '立体渐变光球上下浮动，带环绕光环和内部高光，适合作为视觉焦点',
    category: '运动动画',
    difficulty: '简单',
    tags: ['光球', '悬浮', '渐变', '焦点'],
    component: 'FloatOrb'
  },
  {
    id: 'bar-wave',
    title: '柱状波浪',
    description: '多根柱形依次起伏波动，模拟音频均衡器或数据指标跳动',
    category: '加载动画',
    difficulty: '简单',
    tags: ['柱状', '波浪', '均衡器', '跳动'],
    component: 'BarWave'
  },
  {
    id: 'svg-draw-path',
    title: 'SVG路径绘制',
    description: 'SVG曲线描边动画 + 光点沿路径移动，模拟路线动画或数据流向',
    category: 'SVG动画',
    difficulty: '中等',
    tags: ['SVG', '路径', '描边', '光点'],
    component: 'SvgDrawPath'
  },
  {
    id: 'count-up',
    title: '数字滚动',
    description: '数字从0递增到目标值的滚动动画，进入视口时自动触发',
    category: '文字动画',
    difficulty: '中等',
    tags: ['数字', '滚动', '计数', '视口触发'],
    component: 'CountUp'
  },
  {
    id: 'scroll-progress',
    title: '滚动进度条',
    description: '跟随内容滚动实时更新的进度指示条，带渐变色发光填充',
    category: '交互动画',
    difficulty: '中等',
    tags: ['滚动', '进度', '指示器'],
    component: 'ScrollProgress'
  },
  {
    id: 'text-gradient',
    title: '渐变流光文字',
    description: '文字填充渐变色并在背景上循环流动，打造醒目标题效果',
    category: '文字动画',
    difficulty: '简单',
    tags: ['渐变', '流光', '文字', '标题'],
    component: 'TextGradient'
  },
  {
    id: 'reveal-scroll',
    title: '滚动揭示',
    description: '元素在进入视口时从模糊到清晰、从下方淡入，适合页面滚动叙事',
    category: '过渡动画',
    difficulty: '简单',
    tags: ['滚动', '揭示', '淡入', '模糊'],
    component: 'RevealScroll'
  },
  {
    id: 'pulse-dot',
    title: '脉冲指示点',
    description: '小圆点周期性缩放脉冲，配合外圈扩散光晕，表示在线状态或活跃信号',
    category: '图标动画',
    difficulty: '简单',
    tags: ['脉冲', '指示点', '状态', '信号'],
    component: 'PulseDot'
  },
  {
    id: 'radar-breath',
    title: '雷达呼吸波',
    description: '从中心向外扩散的环形波纹，模拟雷达扫描或信号广播效果',
    category: 'SVG动画',
    difficulty: '简单',
    tags: ['雷达', '波纹', '扩散', '扫描'],
    component: 'RadarBreath'
  },
  {
    id: 'logo-sheen',
    title: 'Logo扫光',
    description: '品牌标识上的对角线光泽扫过效果，适合 Logo 或图标展示',
    category: '图标动画',
    difficulty: '简单',
    tags: ['Logo', '扫光', '品牌', '标识'],
    component: 'LogoSheen'
  },
  ...bigScreenAnimations
]

export const categories = [
  '全部',
  '加载动画',
  '运动动画',
  '过渡动画',
  '图标动画',
  '文字动画',
  '交互动画',
  'SVG动画',
  '3D动画',
  '大屏动画',
  '视口动画'
]
