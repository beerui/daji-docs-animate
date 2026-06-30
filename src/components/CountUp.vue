<template>
  <div class="count-up" ref="elRef">
    <span class="count-prefix">{{ prefix }}</span>
    <span class="count-value">{{ display }}</span>
    <span class="count-suffix">{{ suffix }}</span>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'CountUp',
  props: {
    target: { type: Number, default: 10000 },
    prefix: { type: String, default: '' },
    suffix: { type: String, default: '+' },
    duration: { type: Number, default: 1800 },
    comma: { type: Boolean, default: true }
  },
  setup(props) {
    const elRef = ref(null)
    const display = ref('0')
    let counted = false

    const format = (n) => {
      return props.comma ? Math.round(n).toLocaleString('en-US') : String(Math.round(n))
    }

    const animate = () => {
      if (counted) return
      counted = true
      const start = performance.now()
      const step = (now) => {
        const p = Math.min(1, (now - start) / props.duration)
        const eased = 1 - Math.pow(1 - p, 3)
        display.value = format(props.target * eased)
        if (p < 1) requestAnimationFrame(step)
      }
      requestAnimationFrame(step)
    }

    onMounted(() => {
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animate()
            obs.unobserve(entry.target)
          }
        })
      }, { threshold: 0.5 })
      if (elRef.value) obs.observe(elRef.value)
    })

    return { elRef, display }
  }
}
</script>

<style scoped lang="scss">
.count-up {
  font-weight: 800;
  letter-spacing: -0.04em;
  text-align: center;
  padding: 20px;
}

.count-prefix {
  font-size: 0.6em;
  color: #5d6d86;
}

.count-value {
  font-size: 42px;
  color: #0d55d8;
  display: inline-block;
}

.count-suffix {
  font-size: 28px;
  color: #0d55d8;
}
</style>
