<template>
  <button ref="btnRef" class="ripple-btn" @click="createRipple">点击有波纹</button>
</template>

<script>
import { ref, onBeforeUnmount } from 'vue'

export default {
  name: 'RippleButton',
  setup() {
    const btnRef = ref(null)

    const createRipple = (e) => {
      const btn = btnRef.value
      if (!btn) return
      const circle = document.createElement('span')
      circle.className = 'ripple'
      const rect = btn.getBoundingClientRect()
      circle.style.left = (e.clientX - rect.left) + 'px'
      circle.style.top = (e.clientY - rect.top) + 'px'
      const size = Math.max(btn.offsetWidth, btn.offsetHeight)
      circle.style.width = circle.style.height = size + 'px'
      btn.appendChild(circle)
      const handleEnd = () => circle.remove()
      circle.addEventListener('animationend', handleEnd, { once: true })
    }

    onBeforeUnmount(() => {
      const btn = btnRef.value
      if (!btn) return
      const ripples = btn.querySelectorAll('.ripple')
      ripples.forEach(el => el.remove())
    })

    return { btnRef, createRipple }
  }
}
</script>

<style scoped lang="scss">
.ripple-btn {
  position: relative;
  overflow: hidden;
  background: #ff6ec4;
  color: #fff;
  padding: 1em 2em;
  border: none;
  border-radius: 2em;
  cursor: pointer;
  font-size: 1.05rem;
  z-index: 1;
}

.ripple-btn :deep(.ripple) {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple-effect 0.5s linear;
  background: rgba(255, 255, 255, 0.5);
  pointer-events: none;
  z-index: 2;
}

@keyframes ripple-effect {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
