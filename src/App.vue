<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <h1 class="logo">
          <router-link to="/">大集动画文档库</router-link>
        </h1>
        <nav class="nav">
          <router-link to="/" class="nav-link">首页</router-link>
        </nav>
      </div>
    </header>
    
    <main class="main">
      <router-view />
    </main>
    
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 大集动画文档库 - 简单易用的Vue3 + SCSS动画示例</p>
      </div>
    </footer>
    
    <!-- 悬浮返回按钮 -->
    <FloatingBackButton />
  </div>
</template>

<script>
import FloatingBackButton from './components/FloatingBackButton.vue'

export default {
  name: 'App',
  components: {
    FloatingBackButton
  }
}
</script>

<style lang="scss" scoped>
@use "./src/styles/variables.scss" as *;

.header {
  background: white;
  box-shadow: $box-shadow;
  position: sticky;
  top: 0;
  z-index: 100;
  
  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
  }
  
  .logo a {
    font-size: 24px;
    font-weight: 700;
    color: $primary-color;
    text-decoration: none;
    transition: $transition;
    
    &:hover {
      color: $primary-color-dark;
    }
  }
  
  .nav-link {
    color: $text-dark;
    text-decoration: none;
    font-weight: 500;
    transition: $transition;
    
    &:hover,
    &.router-link-active {
      color: $primary-color;
    }
  }
}

.main {
  min-height: calc(100vh - 140px);
  padding: 40px 0;
}

.footer {
  background: $bg-dark;
  color: $text-white;
  text-align: center;
  padding: 20px 0;
  
  p {
    opacity: 0.8;
  }
}
</style> 