<template>
  <div class="bouncing-dots" aria-label="加载中">
    <span></span><span></span><span></span>
  </div>
</template>

<script>
export default {
  name: 'BouncingDots'
}
</script>

<style scoped lang="scss">
.bouncing-dots {
  display: flex;
  gap: 8px;
}

.bouncing-dots span {
  display: block;
  width: 16px;
  height: 16px;
  background: #1fd1f9;
  border-radius: 50%;
  animation: bounceDot 0.8s infinite alternate;
}

.bouncing-dots span:nth-child(2) {
  animation-delay: 0.16s;
}

.bouncing-dots span:nth-child(3) {
  animation-delay: 0.32s;
}

@keyframes bounceDot {
  to {
    transform: translateY(-16px);
    opacity: 0.6;
  }
}
</style>
 
