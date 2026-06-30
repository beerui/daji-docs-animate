<template>
  <h2 class="text-gradient">
    <slot>流光渐变文字</slot>
  </h2>
</template>

<script>
export default {
  name: 'TextGradient'
}
</script>

<style scoped lang="scss">
.text-gradient {
  margin: 0;
  font-size: clamp(32px, 5vw, 56px);
  line-height: 1.05;
  letter-spacing: -0.06em;
  font-weight: 900;
  text-align: center;
  background: linear-gradient(98deg, #0a42ba 0%, #1576f8 46%, #12c9f0 100%);
  background-size: 220% 220%;
  -webkit-background-clip: text;
  color: transparent;
  animation: textFlow 5.5s ease-in-out infinite;
}

@keyframes textFlow {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
