<template>
  <div class="floating-back-button" v-show="showButton">
    <router-link to="/" class="back-btn" title="返回首页">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12H5M12 19L5 12L12 5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>首页</span>
    </router-link>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'FloatingBackButton',
  setup() {
    const route = useRoute()
    const showButton = ref(false)

    const checkShowButton = () => {
      const isDetailPage = route.path.includes('/animation/')
      showButton.value = isDetailPage
    }

    const handleScroll = () => {
      checkShowButton()
    }

    watch(() => route.path, () => {
      checkShowButton()
    })

    onMounted(() => {
      checkShowButton()
      window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll)
    })

    return {
      showButton
    }
  }
}
</script>

<style scoped lang="scss">
@use "../styles/variables.scss" as *;

.floating-back-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
  animation: fadeInUp 0.5s ease-out;
}

.back-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: linear-gradient(135deg, $primary-color 0%, $primary-color-dark 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 20px rgba($primary-color, 0.3);
  transition: all 0.3s ease;
  font-weight: 600;
  font-size: 14px;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba($primary-color, 0.4);
    background: linear-gradient(135deg, $primary-color-dark 0%, $primary-color-darker 100%);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    width: 20px;
    height: 20px;
  }
  
  span {
    font-weight: 600;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: $mobile) {
  .floating-back-button {
    bottom: 20px;
    right: 20px;
  }
  
  .back-btn {
    padding: 10px 16px;
    font-size: 13px;
    
    svg {
      width: 18px;
      height: 18px;
    }
  }
}
</style> 