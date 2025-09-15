<template>
  <div class="rainbow-border-animate">Rainbow Border</div>
</template>

<script>
export default {
  name: 'RainbowBorder'
}
</script>

<style scoped lang="scss">
.rainbow-border-animate {
  display: inline-block;
  padding: 1.2em 2.2em;
  color: #fff;
  background: #222;
  border-radius: 2em;
  position: relative;
  font-size: 1.1rem;
  overflow: hidden;
  z-index: 1;
}

.rainbow-border-animate::before {
  content: "";
  position: absolute;
  z-index: -1;
  top: -4px;
  left: -4px;
  right: -4px;
  bottom: -4px;
  background: linear-gradient(270deg, #ff6ec4, #7873f5, #1fd1f9, #7bf6b5, #ff6ec4);
  background-size: 400% 400%;
  border-radius: 2em;
  filter: blur(2px);
  animation: rainbowBorder 6s ease-in-out infinite;
}

@keyframes rainbowBorder {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
</style>
 
