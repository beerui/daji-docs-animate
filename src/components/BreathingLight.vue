<template>
  <div class="breathing-light">Breathing Light</div>
</template>

<script>
export default {
  name: 'BreathingLight'
}
</script>

<style scoped lang="scss">
.breathing-light {
  display: inline-block;
  padding: 1.2em 2.3em;
  background: #3b3f46;
  color: #fff;
  border-radius: 1.8em;
  box-shadow: 0 0 0 0 #00e6f6;
  animation: breathing 2.2s infinite;
  font-size: 1.1rem;
}

@keyframes breathing {
  0%, 100% { box-shadow: 0 0 0 0 #00e6f688; }
  50% { box-shadow: 0 0 24px 8px #00e6f6cc; }
}
</style>
 


