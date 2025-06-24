export const codeExamples = {
  'loading-dots': {
    template: `<template>
  <h2 class="text-title">
    视频上传成功
    <span class="loading-dots">
      <span class="dot">视</span>
      <span class="dot">频</span>
      <span class="dot">上</span>
      <span class="dot">传</span>
      <span class="dot">成</span>
      <span class="dot">功</span>
    </span>
  </h2>
</template>`,
    style: `<style scoped lang="scss">
.text-title {
  font-size: 30px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 20px 0 0 40px;
  position: relative;
}

.loading-dots {
  display: inline-block;
  margin-left: 4px;
  position: absolute;
  left: 0;
  top: 0;
}

.dot {
  animation: blink 1.4s infinite both;
  font-weight: bold;
  color: #eed174d3;
}

.dot:nth-child(1) { animation-delay: 0s; }
.dot:nth-child(2) { animation-delay: 0.2s; }
.dot:nth-child(3) { animation-delay: 0.4s; }
.dot:nth-child(4) { animation-delay: 0.6s; }
.dot:nth-child(5) { animation-delay: 0.8s; }
.dot:nth-child(6) { animation-delay: 1s; }

@keyframes blink {
  0%, 80%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 使用 nth-child 选择器为每个字符设置不同的动画延迟
2. blink 关键帧动画控制透明度变化
3. animation-delay 属性让每个字符依次显示
4. infinite 让动画无限循环播放`
  },

  'loading-circle': {
    template: `<template>
  <div class="loading"></div>
</template>`,
    style: `<style scoped lang="scss">
.loading {
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid rgba(255, 255, 255, 0.4);
  animation: rotate 1.6s infinite linear;

  &::after {
    position: absolute;
    content: '';
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-right: 4px solid #fff;
    animation: rotate 4s infinite ease-in-out;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(0deg);
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 主圆环设置半透明背景色作为轨道
2. 使用 ::after 伪元素创建旋转的进度条
3. transform: rotate() 实现旋转动画
4. 两个元素设置不同的旋转速度创造层次感`
  },

  'bounce-ball': {
    template: `<template>
  <div class="bounce-ball">
    <div class="ball"></div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.bounce-ball {
  height: 120px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  
  .ball {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #ff6b6b, #ff8e8e);
    border-radius: 50%;
    animation: bounce 1.5s infinite ease-in-out;
    box-shadow: 0 2px 10px rgba(255, 107, 107, 0.3);
  }
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-60px);
  }
  60% {
    transform: translateY(-30px);
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 使用 translateY 控制垂直位移
2. 关键帧设置不同高度模拟弹跳效果
3. ease-in-out 缓动函数让运动更自然
4. 渐变背景和阴影增强视觉效果`
  },

  'fade-slide': {
    template: `<template>
  <div class="fade-slide-container">
    <div class="fade-slide-item">淡入滑动效果</div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.fade-slide-container {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .fade-slide-item {
    background: linear-gradient(45deg, #4ecdc4, #44a08d);
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    font-weight: 600;
    animation: fadeSlideIn 2s infinite;
    box-shadow: 0 4px 15px rgba(78, 205, 196, 0.3);
  }
}

@keyframes fadeSlideIn {
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  50% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(30px);
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 同时控制 opacity 和 translateX 属性
2. 从左侧淡入到中央，再淡出到右侧
3. 50% 关键帧为完全显示状态
4. 创造出流畅的滑动过渡效果`
  },

  'pulse-heart': {
    template: `<template>
  <div class="pulse-heart">
    <div class="heart">❤️</div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.pulse-heart {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .heart {
    font-size: 40px;
    animation: pulse 1.2s infinite;
    filter: drop-shadow(0 0 10px rgba(255, 69, 0, 0.5));
  }
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 使用 scale 属性控制元素缩放
2. 多个关键帧创造不规则的脉搏节奏
3. drop-shadow 滤镜增加发光效果
4. 模拟真实心跳的律动感`
  },

  'wave-loading': {
    template: `<template>
  <div class="wave-loading">
    <div class="wave-container">
      <div class="wave"></div>
      <div class="wave"></div>
      <div class="wave"></div>
    </div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.wave-loading {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .wave-container {
    display: flex;
    gap: 4px;
    align-items: flex-end;
    height: 60px;
  }
  
  .wave {
    width: 6px;
    background: linear-gradient(45deg, #667eea, #764ba2);
    border-radius: 3px;
    animation: wave 1.2s ease-in-out infinite;
    
    &:nth-child(1) { animation-delay: 0s; }
    &:nth-child(2) { animation-delay: 0.2s; }
    &:nth-child(3) { animation-delay: 0.4s; }
  }
}

@keyframes wave {
  0%, 40%, 100% {
    height: 20px;
  }
  20% {
    height: 60px;
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 多个条形元素组成波浪效果
2. 控制 height 属性创造起伏动画
3. animation-delay 让每个条形错开时间
4. 形成连续的波浪传播效果`
  },

  'typing-text': {
    template: `<template>
  <div class="typing-text">
    <span class="text">{{ displayText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const fullText = '大集动画文档库'
    const displayText = ref('')
    let currentIndex = 0
    let timer = null

    const typeText = () => {
      if (currentIndex < fullText.length) {
        displayText.value += fullText[currentIndex]
        currentIndex++
      } else {
        setTimeout(() => {
          displayText.value = ''
          currentIndex = 0
        }, 2000)
      }
    }

    onMounted(() => {
      timer = setInterval(typeText, 200)
    })

    onUnmounted(() => {
      if (timer) clearInterval(timer)
    })

    return { displayText }
  }
}
</script>`,
    style: `<style scoped lang="scss">
.typing-text {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #2c3e50;
  
  .text {
    color: #3498db;
  }
  
  .cursor {
    animation: blink 1s infinite;
    color: #3498db;
    margin-left: 2px;
  }
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. JavaScript 控制文字逐个显示
2. setInterval 定时器控制打字速度
3. CSS 动画实现光标闪烁效果
4. 循环播放模拟真实打字过程`
  },

  'floating-button': {
    template: `<template>
  <div class="floating-button">
    <button class="float-btn">点击我</button>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.floating-button {
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .float-btn {
    padding: 15px 30px;
    background: linear-gradient(45deg, #ff9a56, #ff6b6b);
    border: none;
    border-radius: 25px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    animation: float 2s ease-in-out infinite;
    box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
    transition: all 0.3s ease;
    
    &:hover {
      transform: translateY(-5px);
      box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
    }
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. translateY 控制垂直浮动
2. 简单的上下往复运动
3. hover 状态增强交互体验
4. 渐变背景和阴影增加立体感`
  },

  'shimmer-loading': {
    template: `<template>
  <div class="shimmer-loading">
    <div class="shimmer-card">
      <div class="shimmer-line long"></div>
      <div class="shimmer-line medium"></div>
      <div class="shimmer-line short"></div>
    </div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.shimmer-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  padding: 20px;
}

.shimmer-card {
  width: 200px;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.shimmer-line {
  height: 16px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  border-radius: 4px;
  margin-bottom: 12px;
  animation: shimmer 1.5s infinite;
  
  &.long { width: 100%; }
  &.medium { width: 75%; }
  &.short { width: 50%; }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 线性渐变背景模拟闪光效果
2. background-position 控制闪光位置
3. background-size 扩大背景尺寸
4. 不同宽度的条形模拟骨架屏`
  },

  'spinner-dots': {
    template: `<template>
  <div class="spinner-dots">
    <div class="dot-container">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
      <div class="dot dot-5"></div>
      <div class="dot dot-6"></div>
      <div class="dot dot-7"></div>
      <div class="dot dot-8"></div>
    </div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.spinner-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.dot-container {
  position: relative;
  width: 80px;
  height: 80px;
  animation: containerSpin 2s linear infinite;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #667eea, #764ba2);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.dot-1 { transform: translate(-50%, -50%) rotate(0deg) translateY(-30px); animation-delay: 0s; }
.dot-2 { transform: translate(-50%, -50%) rotate(45deg) translateY(-30px); animation-delay: 0.2s; }
.dot-3 { transform: translate(-50%, -50%) rotate(90deg) translateY(-30px); animation-delay: 0.4s; }
.dot-4 { transform: translate(-50%, -50%) rotate(135deg) translateY(-30px); animation-delay: 0.6s; }
.dot-5 { transform: translate(-50%, -50%) rotate(180deg) translateY(-30px); animation-delay: 0.8s; }
.dot-6 { transform: translate(-50%, -50%) rotate(225deg) translateY(-30px); animation-delay: 1s; }
.dot-7 { transform: translate(-50%, -50%) rotate(270deg) translateY(-30px); animation-delay: 1.2s; }
.dot-8 { transform: translate(-50%, -50%) rotate(315deg) translateY(-30px); animation-delay: 1.4s; }

@keyframes containerSpin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(1); }
  50% { opacity: 0.3; transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(0.6); }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 容器整体旋转配合点的脉冲动画
2. 每个点固定在圆形轨道上的不同位置
3. animation-delay 创造错开的脉冲效果
4. 双重动画叠加产生复杂的视觉效果`
  },

  'progress-bar': {
    template: `<template>
  <div class="progress-bar">
    <div class="progress-container">
      <div class="progress-fill"></div>
      <div class="progress-text">{{ progress }}%</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    const progress = ref(0)
    let timer = null

    const startProgress = () => {
      progress.value = 0
      timer = setInterval(() => {
        if (progress.value < 100) {
          progress.value += 1
        } else {
          setTimeout(() => {
            progress.value = 0
          }, 1000)
        }
      }, 50)
    }

    onMounted(() => startProgress())
    onUnmounted(() => timer && clearInterval(timer))

    return { progress }
  }
}
</script>`,
    style: `<style scoped lang="scss">
.progress-container {
  position: relative;
  width: 250px;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #44a08d);
  border-radius: 10px;
  transition: width 0.1s ease;
  width: v-bind(progress + '%');
  
  &::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    animation: shimmer 2s infinite;
  }
}

@keyframes shimmer {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. JavaScript 控制进度数值变化
2. v-bind 响应式绑定宽度属性
3. ::after 伪元素创建闪光效果
4. 定时器实现自动进度循环`
  },

  'rotating-card': {
    template: `<template>
  <div class="rotating-card">
    <div class="card-3d" @mouseenter="isFlipped = true" @mouseleave="isFlipped = false" :class="{ flipped: isFlipped }">
      <div class="card-front">
        <div class="card-icon">🎨</div>
        <h3>前面</h3>
        <p>悬停查看背面</p>
      </div>
      <div class="card-back">
        <div class="card-icon">✨</div>
        <h3>背面</h3>
        <p>3D 翻转效果</p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const isFlipped = ref(false)
    return { isFlipped }
  }
}
</script>`,
    style: `<style scoped lang="scss">
.rotating-card {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  perspective: 1000px;
  padding: 20px;
}

.card-3d {
  width: 200px;
  height: 120px;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.4, 0.0, 0.2, 1);
  cursor: pointer;
  
  &.flipped {
    transform: rotateY(180deg);
  }
}

.card-front, .card-back {
  position: absolute;
  width: 100%; height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.card-front {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  z-index: 2;
}

.card-back {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
  transform: rotateY(180deg);
  z-index: 1;
}

.card-icon {
  font-size: 24px;
  margin-bottom: 8px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. perspective 属性创建3D视角空间
2. transform-style: preserve-3d 保持子元素3D效果
3. backface-visibility: hidden 隐藏卡片背面
4. Vue响应式状态控制翻转效果，提供更好的控制力`
  },

  'shine-text': {
    template: `<template>
  <div class="shine-text-container">
    <div class="shine-text">为全球用户提供专业AI系统性解决方案</div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.shine-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 20px;
}

/* 扫光效果 */
.shine-text {
  background: #1a1a1a linear-gradient(to left, transparent, #dcdcdc, transparent) no-repeat 0 0;
  background-size: 40% 100%;
  background-position: -100% 0;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 8s infinite;
  animation-delay: 1.5s;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  20% {
    background-position: 100% 0;
  }
  100% {
    background-position: 100% 0;
  }
}
</style>`,
    explanation: `这个动画通过以下方式实现：
1. 使用线性渐变作为文字背景，模拟光线效果
2. background-clip: text 让背景只在文字区域显示
3. color: transparent 让文字变透明，只显示背景
4. 动画改变 background-position 实现扫光移动效果`
  },

  'camera-icon': {
    template: `<template>
  <div class="camera-container">
    <div class="camera-wrapper group">
      <!-- 相机图标 -->
      <svg width="64" height="54" viewBox="0 0 64 54" fill="none" class="camera-icon">
        <path
          d="M63.8788 45.168C63.9023 45.1284 63.9301 45.0864 63.9464 45.0422L64 45.0422C63.9651 45.1028 63.9187 45.154 63.8789 45.2099L63.8789 49.1567C63.8789 51.3247 62.1069 53.0874 59.9298 53.0874L3.94921 53.0874C1.77214 53.0874 0 51.3247 0 49.1567L0 10.8894C0 8.72271 1.77214 6.96 3.94921 6.96L15.9178 6.96L15.9854 6.82964L17.5502 3.71988C17.6178 3.56733 19.2407 7.37868e-07 21.4435 7.37868e-07L42.4377 0C44.5916 0 46.1728 3.36244 46.3497 3.75599L47.8958 6.82964L47.9634 6.96L59.9297 6.96C62.1068 6.96 63.8788 8.72271 63.8788 10.8894L63.8788 45.168ZM49.2881 15.486C49.2881 17.222 50.7016 18.6353 52.4364 18.6353C54.1735 18.6353 55.5869 17.222 55.5869 15.486C55.5869 13.7477 54.1735 12.3354 52.4364 12.3354C50.7016 12.3354 49.2881 13.7477 49.2881 15.486ZM18.2138 28.4839C18.2138 35.9003 24.2819 41.936 31.7379 41.936C39.1939 41.936 45.2598 35.9003 45.2598 28.4839C45.2598 21.0676 39.1939 15.0343 31.7379 15.0343C24.2819 15.0343 18.2138 21.0676 18.2138 28.4839ZM22.3817 28.4839C22.3817 23.3565 26.5777 19.186 31.7378 19.186C36.8956 19.186 41.0938 23.3565 41.0938 28.4839C41.0938 33.6114 36.8956 37.7842 31.7378 37.7842C26.5777 37.7842 22.3817 33.6114 22.3817 28.4839Z"
          class="camera-path"
        />
      </svg>
      <div class="camera-label">相机图标动画</div>
    </div>
  </div>
</template>`,
    style: `<style scoped lang="scss">
.camera-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 200px;
  padding: 2rem;
}

.camera-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  padding: 2rem;
  border-radius: 16px;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(250, 62, 62, 0.05);
    transform: translateY(-2px);
  }
}

.camera-label {
  font-size: 14px;
  color: #666;
  font-weight: 500;
  text-align: center;
}

/* 相机图标SVG动画 */
.camera-icon {
  transform: scale(1);
  transition: transform 0.1s ease;
}

.camera-path {
  fill: #fa3e3e;
  stroke: none;
  transition: all 0.1s ease;
}

/* 鼠标悬停时的动画效果 */
.group:hover .camera-icon {
  animation: camera-pulse-once 1s ease-in-out forwards !important;
}

.group:hover .camera-path {
  animation: camera-stroke-once 2s ease-in-out forwards !important;
}

/* 鼠标移出时的反向动画 */
.group:not(:hover) .camera-icon {
  animation: camera-pulse-out 1s ease-in-out forwards !important;
}

.group:not(:hover) .camera-path {
  animation: camera-stroke-out 1.5s ease-in-out forwards !important;
}

@keyframes camera-stroke-once {
  0% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 300;
    stroke-dasharray: 0 300;
    stroke-width: 2;
  }
  50% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 0;
    stroke-dasharray: 300 0;
    stroke-width: 2;
  }
  80% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-width: 1;
  }
  100% {
    fill: rgba(250, 62, 62, 1);
    stroke: rgba(250, 62, 62, 0);
    stroke-dashoffset: -300;
    stroke-dasharray: 300 0;
    stroke-width: 0;
  }
}

@keyframes camera-pulse-once {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
  100% {
    transform: scale(1.05);
  }
}

@keyframes camera-pulse-out {
  0% {
    transform: scale(1.05);
  }
  50% {
    transform: scale(0.98);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes camera-stroke-out {
  0% {
    fill: rgba(250, 62, 62, 1);
    stroke: rgba(250, 62, 62, 0);
    stroke-dashoffset: -300;
    stroke-dasharray: 300 0;
    stroke-width: 0;
  }
  30% {
    fill: rgba(250, 62, 62, 0.5);
    stroke: #fa3e3e;
    stroke-width: 1;
    stroke-dashoffset: -150;
    stroke-dasharray: 150 150;
  }
  60% {
    fill: rgba(250, 62, 62, 0);
    stroke: #fa3e3e;
    stroke-dashoffset: 0;
    stroke-dasharray: 0 300;
    stroke-width: 2;
  }
  100% {
    fill: #fa3e3e;
    stroke: none;
    stroke-dashoffset: 0;
    stroke-dasharray: 0 0;
    stroke-width: 0;
  }
}
</style>`,
    explanation: `这个SVG动画通过以下方式实现：
1. **描边动画**：使用 stroke-dasharray 和 stroke-dashoffset 创建描边绘制效果
2. **脉冲动画**：通过 transform: scale() 实现图标的缩放脉冲效果
3. **填充过渡**：从描边状态过渡到填充状态，营造绘制完成的效果
4. **反向动画**：鼠标移出时播放反向动画，回到初始状态
5. **双向交互**：悬停进入和离开都有对应的动画效果`
  }
} 