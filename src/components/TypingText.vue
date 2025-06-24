<template>
  <div class="typing-text">
    <span class="text">{{ displayText }}</span>
    <span class="cursor">|</span>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'TypingText',
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
      if (timer) {
        clearInterval(timer)
      }
    })

    return {
      displayText
    }
  }
}
</script>

<style scoped lang="scss">
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
</style> 