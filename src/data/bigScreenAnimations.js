export const bigScreenVisuals = {
  'orbital-command': {
    label: 'ORBIT',
    visual: 'orbit',
    primary: '#28d7ff',
    secondary: '#7c5cff',
    accent: '#f6d365'
  },
  'flux-grid': {
    label: 'FLUX',
    visual: 'flow',
    primary: '#00f5a0',
    secondary: '#00d9f5',
    accent: '#ffffff'
  },
  'radar-sweep': {
    label: 'RADAR',
    visual: 'radar',
    primary: '#38f07b',
    secondary: '#00b3ff',
    accent: '#f8ff74'
  },
  'hologram-scan': {
    label: 'SCAN',
    visual: 'scan',
    primary: '#6ee7ff',
    secondary: '#b26bff',
    accent: '#ffffff'
  },
  'particle-constellation': {
    label: 'NODES',
    visual: 'constellation',
    primary: '#82f7ff',
    secondary: '#ff6ec7',
    accent: '#fff176'
  },
  'neon-equalizer': {
    label: 'AUDIO',
    visual: 'equalizer',
    primary: '#ff4ecd',
    secondary: '#2af6ff',
    accent: '#ffe66d'
  },
  'aurora-wave': {
    label: 'AURORA',
    visual: 'aurora',
    primary: '#30f2a2',
    secondary: '#2d8cff',
    accent: '#d2ff72'
  },
  'energy-core': {
    label: 'CORE',
    visual: 'core',
    primary: '#ffcf5c',
    secondary: '#ff5d73',
    accent: '#ffffff'
  },
  'signal-rings': {
    label: 'SIGNAL',
    visual: 'rings',
    primary: '#38d9ff',
    secondary: '#4aff9a',
    accent: '#ffffff'
  },
  'matrix-rain': {
    label: 'MATRIX',
    visual: 'matrix',
    primary: '#7cff6b',
    secondary: '#00d9a3',
    accent: '#d9ffe0'
  },
  'hex-network': {
    label: 'HEX',
    visual: 'hex',
    primary: '#8bfffb',
    secondary: '#4478ff',
    accent: '#f7fbff'
  },
  'digital-tunnel': {
    label: 'TUNNEL',
    visual: 'tunnel',
    primary: '#57a6ff',
    secondary: '#f15cff',
    accent: '#ffffff'
  },
  'comet-trail': {
    label: 'COMET',
    visual: 'comet',
    primary: '#7de7ff',
    secondary: '#ffb86b',
    accent: '#ffffff'
  },
  'blueprint-reveal': {
    label: 'PLAN',
    visual: 'blueprint',
    primary: '#5bd7ff',
    secondary: '#2b6cff',
    accent: '#d9f5ff'
  },
  'heatmap-pulse': {
    label: 'HEAT',
    visual: 'heatmap',
    primary: '#ff5252',
    secondary: '#ffcf5c',
    accent: '#5cffc8'
  },
  'orbit-panels': {
    label: 'PANEL',
    visual: 'panels',
    primary: '#60f6ff',
    secondary: '#9d7cff',
    accent: '#ffffff'
  },
  'timeline-beacon': {
    label: 'TIME',
    visual: 'timeline',
    primary: '#48f2ff',
    secondary: '#00f5a0',
    accent: '#ffe66d'
  },
  'ribbon-stream': {
    label: 'STREAM',
    visual: 'ribbons',
    primary: '#ff77e9',
    secondary: '#36e8ff',
    accent: '#fff176'
  },
  'cyber-map': {
    label: 'MAP',
    visual: 'map',
    primary: '#50f0ff',
    secondary: '#58ff8a',
    accent: '#ffef7a'
  },
  'command-pulse': {
    label: 'COMMAND',
    visual: 'command',
    primary: '#4fd8ff',
    secondary: '#ff5df4',
    accent: '#ffffff'
  }
}

const toComponentName = (variant) => {
  return `BigScreen${variant
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')}`
}

const bigScreenItems = [
  ['orbital-command', '轨道指挥中心', '多层轨道围绕中心数据核心旋转，适合大屏主视觉开场', '困难', ['轨道', '指挥中心', '数据核心']],
  ['flux-grid', '流光网格矩阵', '网格线和流动光束叠加形成高速数据流动效果', '中等', ['网格', '流光', '矩阵']],
  ['radar-sweep', '雷达扫描波', '扇形扫描光束循环扫过，模拟监控大屏雷达探测', '中等', ['雷达', '扫描', '监控']],
  ['hologram-scan', '全息扫描屏', '透明面板配合纵向扫描线，营造全息识别效果', '中等', ['全息', '扫描', '面板']],
  ['particle-constellation', '粒子星座网络', '节点与连线在暗色空间中呼吸闪烁，表现关系网络', '困难', ['粒子', '节点', '网络']],
  ['neon-equalizer', '霓虹音频柱', '多列霓虹柱高低跳动，适合音频或实时指标大屏', '简单', ['霓虹', '音频', '柱状']],
  ['aurora-wave', '极光数据波', '多层柔性波带横向漂移，模拟趋势数据的能量波动', '中等', ['极光', '波形', '趋势']],
  ['energy-core', '能量核心脉冲', '中心能量球持续脉冲并向外释放光环', '中等', ['能量', '脉冲', '核心']],
  ['signal-rings', '信号扩散环', '同心环向外扩散，表现广播、连接或告警信号', '简单', ['信号', '扩散', '同心环']],
  ['matrix-rain', '数字雨幕', '垂直数字流持续下落，形成数据瀑布背景', '简单', ['数字雨', '数据', '背景']],
  ['hex-network', '蜂巢网络脉冲', '六边形节点错位闪烁，表现科技网络结构', '中等', ['蜂巢', '网络', '脉冲']],
  ['digital-tunnel', '数字隧道穿梭', '透视框层层推进，形成向前穿梭的空间感', '困难', ['隧道', '透视', '穿梭']],
  ['comet-trail', '彗星轨迹拖尾', '高速光点带拖尾划过画面，适合作为动态强调元素', '简单', ['彗星', '拖尾', '速度']],
  ['blueprint-reveal', '蓝图描边揭示', '线框和扫描线逐步显现，模拟蓝图加载过程', '中等', ['蓝图', '描边', '揭示']],
  ['heatmap-pulse', '热力图脉冲', '色块按节奏明暗变化，表现区域热度起伏', '简单', ['热力图', '色块', '脉冲']],
  ['orbit-panels', '环绕信息面板', '多个信息面板围绕中心错位浮动，适合数据卡片展示', '中等', ['面板', '环绕', '数据卡']],
  ['timeline-beacon', '时间轴信标', '时间节点沿横轴依次点亮，适合流程与进度大屏', '简单', ['时间轴', '信标', '进度']],
  ['ribbon-stream', '丝带数据流', '多条霓虹曲线交错流动，形成轻量动态背景', '中等', ['丝带', '数据流', '背景']],
  ['cyber-map', '赛博地图定位', '地图节点、路线和定位点交替闪烁，模拟地理监控', '中等', ['地图', '定位', '路线']],
  ['command-pulse', '指挥舱脉冲面板', '中心圆盘、侧边刻度和状态点组合成大屏指挥舱', '困难', ['指挥舱', '面板', '状态']]
]

export const bigScreenAnimations = bigScreenItems.map(([variant, title, description, difficulty, tags]) => ({
  id: `big-screen-${variant}`,
  title,
  description,
  category: '大屏动画',
  difficulty,
  tags,
  component: toComponentName(variant),
  variant
}))

const createCodeExample = (animation) => ({
  template: `<template>
  <BigScreenAnimation variant="${animation.variant}" />
</template>

<script>
import BigScreenAnimation from './BigScreenAnimation.vue'

export default {
  name: '${animation.component}',
  components: {
    BigScreenAnimation
  }
}
</script>`,
  style: `<style scoped lang="scss">
/* 具体动效样式集中在 BigScreenAnimation.vue 中维护。
   新增大屏动画时优先扩展 bigScreenVisuals 数据，而不是复制整套 CSS。 */
</style>`,
  explanation: `${animation.title}通过以下方式实现：
1. 使用统一的大屏动画渲染器承载舞台、网格、扫描线和光效层
2. 通过 variant="${animation.variant}" 选择对应视觉结构与配色
3. 使用 CSS keyframes 驱动核心运动，避免引入额外动画依赖
4. 元数据、组件映射和代码示例由 bigScreenAnimations.js 统一生成
5. 数据驱动结构让 20 个动画保持独立入口，同时避免重复维护 20 套模板`
})

export const bigScreenCodeExamples = Object.fromEntries(
  bigScreenAnimations.map(animation => [animation.id, createCodeExample(animation)])
)
