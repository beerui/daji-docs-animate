<template>
  <div class="country-card">
    <img class="rounded-8px" src="https://static.chinamarket.cn/static/trade-exhibition/en-station/about/seeking-national-1.jpg" alt="Malaysia" />
    <div class="country-overlay">
      <span class="country-name">Malaysia</span>
    </div>
  </div>
</template>

<script setup>
</script>
<style scoped lang="scss">
.country-card {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  .country-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s;
  }
  
  .country-name {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
  }
  
  &:hover .country-overlay {
    opacity: 1;
  }
  &:hover img {
    transform: scale(1.2);
  }
}
</style>