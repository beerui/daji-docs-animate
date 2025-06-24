<template>
  <div class="loading-dots-container">
    <span class="loading-dots">
      <span class="dot">视</span>
      <span class="dot">频</span>
      <span class="dot">上</span>
      <span class="dot">传</span>
      <span class="dot">成</span>
      <span class="dot">功</span>
    </span>
  </div>
</template>

<style scoped lang="scss">
/* 加载点动画 */
.loading-dots-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
}

.loading-dots {
  display: inline-block;
  font-size: 24px;
  font-weight: 600;
}

.dot {
  animation: blink 1.4s infinite both;
  font-weight: bold;
  color: #eed174;
  margin: 0 2px;
}

.dot:nth-child(1) {
  animation-delay: 0s;
}

.dot:nth-child(2) {
  animation-delay: 0.2s;
}

.dot:nth-child(3) {
  animation-delay: 0.4s;
}
.dot:nth-child(4) {
  animation-delay: 0.6s;
}
.dot:nth-child(5) {
  animation-delay: 0.8s;
}
.dot:nth-child(6) {
  animation-delay: 1s;
}
.dot:nth-child(7) {
  animation-delay: 1.2s;
}
@keyframes blink {
  0%,
  80%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
</style>