<template>
  <div class="loading"></div>
</template>
<style scoped lang="scss">
@property --per {
  syntax: '<percentage>';
  inherits: false;
  initial-value: 10%;
}
.loading {
  position: relative;
  margin: auto;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid rgba(255, 255, 255, 0.4);
  transform: rotate(360deg);
  animation: rotate 1.6s infinite linear;

  &::after {
    position: absolute;
    content: '';
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: 50%;
    border: 4px solid transparent;
    border-right: 4px solid #fff;
    animation: rotate 4s infinite ease-in-out;
  }
}

@keyframes rotate {
  100% {
    transform: rotate(0deg);
  }
}
</style>