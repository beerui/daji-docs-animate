<template>
  <div class="glass-sweep">
    <div class="glass-sheen"></div>
    <div class="glass-content">
      <slot>
        <strong>Glass Card</strong>
        <span>Light sweep effect</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlassSweep'
}
</script>

<style scoped lang="scss">
.glass-sweep {
  position: relative;
  border-radius: 24px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(235, 245, 255, 0.7));
  border: 1px solid rgba(255, 255, 255, 0.7);
  box-shadow: 0 24px 72px rgba(18, 53, 105, 0.13), inset 0 1px 0 rgba(255, 255, 255, 0.9);
  overflow: hidden;
  min-height: 220px;
  padding: 28px;
  backdrop-filter: blur(18px);
}

.glass-sheen {
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 1;
  background: linear-gradient(115deg, transparent 10%, rgba(255, 255, 255, 0.5) 28%, transparent 46%);
  transform: translateX(-120%);
  animation: glassSweep 6s ease-in-out infinite;
}

@keyframes glassSweep {
  0%, 42% {
    transform: translateX(-120%);
  }
  74%, 100% {
    transform: translateX(120%);
  }
}

.glass-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 50px 20px;

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
