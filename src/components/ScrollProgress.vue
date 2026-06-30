<template>
  <div class="scroll-progress-wrap">
    <div class="scroll-progress">
      <span class="progress-fill" :style="{ width: pct + '%' }"></span>
    </div>
    <div class="scroll-body" ref="bodyRef">
      <slot>
        <div class="scroll-demo">
          <p v-for="i in 6" :key="i" class="demo-line">Scroll to see progress — line {{ i }}</p>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'ScrollProgress',
  props: {
    height: { type: String, default: '3px' },
    color: { type: String, default: '' }
  },
  setup(props) {
    const bodyRef = ref(null)
    const pct = ref(0)

    const update = () => {
      const el = bodyRef.value
      if (!el) return
      const max = Math.max(1, el.scrollHeight - el.clientHeight)
      pct.value = Math.min(100, Math.max(0, (el.scrollTop / max) * 100))
    }

    onMounted(() => {
      const el = bodyRef.value
      if (el) el.addEventListener('scroll', update, { passive: true })
      update()
    })

    onBeforeUnmount(() => {
      const el = bodyRef.value
      if (el) el.removeEventListener('scroll', update)
    })

    return { bodyRef, pct }
  }
}
</script>

<style scoped lang="scss">
.scroll-progress-wrap {
  border-radius: 16px;
  overflow: hidden;
  background: #f6f9ff;
  border: 1px solid rgba(18, 63, 125, 0.12);
}

.scroll-progress {
  position: sticky;
  top: 0;
  height: v-bind(height);
  background: rgba(0, 0, 0, 0.04);
  z-index: 10;
}

.progress-fill {
  display: block;
  height: 100%;
  background: linear-gradient(90deg, #0f6df3, #23c7f7, #00d4b3);
  box-shadow: 0 0 14px rgba(35, 199, 247, 0.55);
  transition: width 0.08s linear;
  border-radius: 0 2px 2px 0;
}

.scroll-body {
  max-height: 220px;
  overflow-y: auto;
  padding: 16px;
}

.scroll-demo {
  min-height: 340px;
}

.demo-line {
  padding: 12px 0;
  color: #5d6d86;
  font-size: 14px;
  border-bottom: 1px solid rgba(18, 63, 125, 0.06);
}
</style>
