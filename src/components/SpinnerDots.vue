<template>
  <div class="spinner-dots">
    <div class="dot-container">
      <div class="dot dot-1"></div>
      <div class="dot dot-2"></div>
      <div class="dot dot-3"></div>
      <div class="dot dot-4"></div>
      <div class="dot dot-5"></div>
      <div class="dot dot-6"></div>
      <div class="dot dot-7"></div>
      <div class="dot dot-8"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.spinner-dots {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
}

.dot-container {
  position: relative;
  width: 80px;
  height: 80px;
  animation: containerSpin 2s linear infinite;
}

.dot {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(45deg, #ffffff, #a1a1a1);
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform-origin: 0 0;
  animation: dotPulse 1.5s ease-in-out infinite;
}

.dot-1 {
  transform: translate(-50%, -50%) rotate(0deg) translateY(-30px);
  animation-delay: 0s;
}

.dot-2 {
  transform: translate(-50%, -50%) rotate(45deg) translateY(-30px);
  animation-delay: 0.2s;
}

.dot-3 {
  transform: translate(-50%, -50%) rotate(90deg) translateY(-30px);
  animation-delay: 0.4s;
}

.dot-4 {
  transform: translate(-50%, -50%) rotate(135deg) translateY(-30px);
  animation-delay: 0.6s;
}

.dot-5 {
  transform: translate(-50%, -50%) rotate(180deg) translateY(-30px);
  animation-delay: 0.8s;
}

.dot-6 {
  transform: translate(-50%, -50%) rotate(225deg) translateY(-30px);
  animation-delay: 1s;
}

.dot-7 {
  transform: translate(-50%, -50%) rotate(270deg) translateY(-30px);
  animation-delay: 1.2s;
}

.dot-8 {
  transform: translate(-50%, -50%) rotate(315deg) translateY(-30px);
  animation-delay: 1.4s;
}

@keyframes containerSpin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dotPulse {
  0%, 100% {
    opacity: 1;
    transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(1);
  }
  50% {
    opacity: 0.3;
    transform: translate(-50%, -50%) rotate(var(--rotation, 0deg)) translateY(-30px) scale(0.6);
  }
}

// 为每个点设置旋转角度
.dot-1 { --rotation: 0deg; }
.dot-2 { --rotation: 45deg; }
.dot-3 { --rotation: 90deg; }
.dot-4 { --rotation: 135deg; }
.dot-5 { --rotation: 180deg; }
.dot-6 { --rotation: 225deg; }
.dot-7 { --rotation: 270deg; }
.dot-8 { --rotation: 315deg; }
</style> 