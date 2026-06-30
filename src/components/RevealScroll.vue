<template>
  <div class="reveal-scroll" ref="elRef">
    <div class="reveal-item" :class="{ visible }">
      <slot>
        <div class="reveal-placeholder">
          <strong>Scroll Reveal</strong>
          <span>Elements appear as you scroll</span>
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'RevealScroll',
  props: {
    threshold: { type: Number, default: 0.15 },
    delay: { type: Number, default: 0 }
  },
  setup(props) {
    const elRef = ref(null)
    const visible = ref(false)
    let observer = null

    onMounted(() => {
      observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setTimeout(() => { visible.value = true }, props.delay)
            observer.unobserve(entry.target)
          }
        })
      }, { threshold: props.threshold, rootMargin: '0px 0px -5% 0px' })

      if (elRef.value) observer.observe(elRef.value)
    })

    onBeforeUnmount(() => {
      if (observer && elRef.value) observer.unobserve(elRef.value)
    })

    return { elRef, visible }
  }
}
</script>

<style scoped lang="scss">
.reveal-scroll {
  min-height: 80px;
}

.reveal-item {
  opacity: 0;
  transform: translate3d(0, 28px, 0) scale(0.985);
  filter: blur(8px);
  transition: opacity 0.74s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.74s cubic-bezier(0.16, 1, 0.3, 1),
              filter 0.74s cubic-bezier(0.16, 1, 0.3, 1);

  &.visible {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
}

.reveal-placeholder {
  padding: 40px 20px;
  text-align: center;
  background: linear-gradient(135deg, #f0f7ff, #ffffff);
  border-radius: 18px;
  border: 1px solid rgba(21, 109, 242, 0.1);

  strong {
    display: block;
    font-size: 22px;
    letter-spacing: -0.03em;
    color: #0b3c9d;
  }

  span {
    display: block;
    margin-top: 8px;
    color: #5d6d86;
    font-size: 14px;
  }
}
</style>
