<template>
  <div class="bar-wave">
    <span v-for="n in 5" :key="n" class="bar"></span>
  </div>
</template>

<script>
export default {
  name: 'BarWave'
}
</script>

<style scoped lang="scss">
.bar-wave {
  display: flex;
  gap: 6px;
  align-items: flex-end;
  height: 90px;
  justify-content: center;
}

.bar {
  width: 28px;
  border-radius: 999px;
  background: linear-gradient(180deg, #22c6f3, #136ff0);
  opacity: 0.88;
  transform-origin: bottom;
  animation: barWave 1.8s ease-in-out infinite;
  height: 60%;

  &:nth-child(1) { height: 42%; animation-delay: 0s; }
  &:nth-child(2) { height: 68%; animation-delay: 0.16s; }
  &:nth-child(3) { height: 54%; animation-delay: 0.32s; }
  &:nth-child(4) { height: 88%; animation-delay: 0.48s; }
  &:nth-child(5) { height: 76%; animation-delay: 0.64s; }
}

@keyframes barWave {
  0%, 100% { transform: scaleY(0.78); }
  50% { transform: scaleY(1.18); }
}
</style>
