<template>
  <div class="shine-text-container">
    <div class="shine-text">为全球用户提供专业AI系统性解决方案</div>
  </div>
</template>

<style scoped lang="scss">
@use "../styles/variables.scss" as *;

.shine-text-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  padding: 20px;
}

/* 扫光效果 */
.shine-text {
  background: #1a1a1a linear-gradient(to left, transparent, #dcdcdc, transparent) no-repeat 0 0;
  background-size: 40% 100%;
  background-position: -100% 0;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: shine 6s infinite;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  
  @media (max-width: $mobile) {
    font-size: 18px;
    white-space: normal;
  }
}

@keyframes shine {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
</style> 