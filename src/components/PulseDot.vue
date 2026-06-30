<template>
  <span class="pulse-dot">
    <i class="dot-core"></i>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'PulseDot'
}
</script>

<style scoped lang="scss">
.pulse-dot {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 700;
  color: #0b3c9d;
}

.dot-core {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #00c49b;
  box-shadow: 0 0 0 6px rgba(0, 196, 155, 0.14);
  animation: dotPulse 1.5s ease-in-out infinite;
}

@keyframes dotPulse {
  0%, 100% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 196, 155, 0.14); }
  50% { transform: scale(0.72); box-shadow: 0 0 0 12px rgba(0, 196, 155, 0.08); }
}
</style>
