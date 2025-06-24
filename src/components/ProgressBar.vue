<template>
  <div class="progress-bar">
    <div class="progress-container">
      <div class="progress-fill"></div>
      <div class="progress-text">{{ progress || 0 }}%</div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'ProgressBar',
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

    onMounted(() => {
      startProgress()
    })

    onUnmounted(() => {
      if (timer) {
        clearInterval(timer)
      }
    })

    return {
      progress
    }
  }
}
</script>

<style scoped lang="scss">
.progress-bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 20px;
}

.progress-container {
  position: relative;
  width: 250px;
  height: 20px;
  background: #f0f0f0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4ecdc4, #44a08d);
  border-radius: 10px;
  transition: width 0.1s ease;
  width: v-bind(progress + '%');
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    animation: shimmer 2s infinite;
  }
}

.progress-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  font-weight: 600;
  color: #333;
  z-index: 1;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style> 