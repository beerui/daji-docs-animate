<template>
  <div class="home">
    <div class="container">
      <!-- 页面标题 -->
      <section class="hero">
        <h1 class="hero-title">大集动画文档库</h1>
        <p class="hero-subtitle">简单易用的Vue3 + SCSS动画示例集合</p>
        <div class="hero-actions">
          <a
            class="btn github-btn"
            href="https://github.com/beerui/daji-docs-animate"
            target="_blank"
            rel="noopener noreferrer"
          >
            查看 GitHub 源码
          </a>
        </div>
      </section>

      <!-- 分类过滤器 -->
      <section class="filters">
        <div class="filter-tabs">
          <button
            v-for="category in categories"
            :key="category"
            :class="['filter-tab', { active: activeCategory === category }]"
            @click="setActiveCategory(category)"
          >
            {{ category }}
          </button>
        </div>
      </section>

      <!-- 动画列表 -->
      <section class="animations-grid">
        <div
          v-for="animation in filteredAnimations"
          :key="animation.id"
          class="animation-card card"
          @click="goToDetail(animation.id)"
        >
          <div class="card-preview">
            <component
              :is="getComponent(animation.component)"
              v-if="getComponent(animation.component)"
            />
            <div v-else class="preview-placeholder">
              {{ animation.title }}
            </div>
          </div>
          
          <div class="card-content">
            <h3 class="card-title">{{ animation.title }}</h3>
            <p class="card-description">{{ animation.description }}</p>
            
            <div class="card-meta">
              <span class="difficulty" :class="animation.difficulty">
                {{ animation.difficulty }}
              </span>
              <span class="category">{{ animation.category }}</span>
            </div>
            
            <div class="card-tags">
              <span
                v-for="tag in animation.tags"
                :key="tag"
                class="tag"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { animations, categories } from '../data/animations.js'

// 导入动画组件
import LoadingDots from '../components/LoadingDots.vue'
import LoadingCircle from '../components/LoadingCircle.vue'
import BounceBall from '../components/BounceBall.vue'
import FadeSlide from '../components/FadeSlide.vue'
import PulseHeart from '../components/PulseHeart.vue'
import WaveLoading from '../components/WaveLoading.vue'
import TypingText from '../components/TypingText.vue'
import FloatingButton from '../components/FloatingButton.vue'
import ShimmerLoading from '../components/ShimmerLoading.vue'
import SpinnerDots from '../components/SpinnerDots.vue'
import ProgressBar from '../components/ProgressBar.vue'
import RotatingCard from '../components/RotatingCard.vue'
import ShineText from '../components/ShineText.vue'
import CameraIcon from '../components/CameraIcon.vue'
import BouncingDots from '../components/BouncingDots.vue'
import RainbowBorder from '../components/RainbowBorder.vue'
import BreathingLight from '../components/BreathingLight.vue'
import RippleButton from '../components/RippleButton.vue'
import GlobalStepCard1 from '../components/GlobalStepCard1.vue'
import GlobalStepCard2 from '../components/GlobalStepCard2.vue'

export default {
  name: 'Home',
  components: {
    LoadingDots,
    LoadingCircle,
    BounceBall,
    FadeSlide,
    PulseHeart,
    WaveLoading,
    TypingText,
    FloatingButton,
    ShimmerLoading,
    SpinnerDots,
    ProgressBar,
    RotatingCard,
    ShineText,
    CameraIcon
    , BouncingDots
    , RainbowBorder
    , BreathingLight
    , RippleButton
    , GlobalStepCard1
    , GlobalStepCard2
  },
  setup() {
    const router = useRouter()
    const activeCategory = ref('全部')

    const filteredAnimations = computed(() => {
      if (activeCategory.value === '全部') {
        return animations
      }
      return animations.filter(animation => animation.category === activeCategory.value)
    })

    const setActiveCategory = (category) => {
      activeCategory.value = category
    }

    const goToDetail = (id) => {
      router.push(`/animation/${id}`)
    }

    const getComponent = (componentName) => {
      const components = {
        LoadingDots,
        LoadingCircle,
        BounceBall,
        FadeSlide,
        PulseHeart,
        WaveLoading,
        TypingText,
        FloatingButton,
        ShimmerLoading,
        SpinnerDots,
        ProgressBar,
        RotatingCard,
        ShineText,
        CameraIcon
        , BouncingDots
        , RainbowBorder
        , BreathingLight
        , RippleButton
        , GlobalStepCard1
        , GlobalStepCard2
      }
      return components[componentName]
    }

    return {
      categories,
      activeCategory,
      filteredAnimations,
      setActiveCategory,
      goToDetail,
      getComponent
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;

.hero {
  text-align: center;
  margin-bottom: 60px;
  
  &-title {
    font-size: 48px;
    font-weight: 700;
    color: $text-dark;
    margin-bottom: 20px;
    
    @media (max-width: $mobile) {
      font-size: 36px;
    }
  }
  
  &-subtitle {
    font-size: 20px;
    color: $text-light;
    
    @media (max-width: $mobile) {
      font-size: 18px;
    }
  }

  .hero-actions {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}

.btn.github-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 18px;
  border-radius: 10px;
  background: #111827;
  color: #fff;
  text-decoration: none;
  border: 1px solid rgba(255,255,255,0.08);
  box-shadow: 0 6px 18px rgba(17,24,39,0.25);
  transition: $transition;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(17,24,39,0.35);
  }
}

.filters {
  margin-bottom: 40px;
  
  .filter-tabs {
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
    
    @media (max-width: $mobile) {
      gap: 8px;
    }
  }
  
  .filter-tab {
    padding: 10px 20px;
    border: 2px solid $border-color;
    background: white;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: $transition;
    
    &:hover {
      border-color: $primary-color;
      color: $primary-color;
    }
    
    &.active {
      background: $primary-color;
      border-color: $primary-color;
      color: white;
    }
    
    @media (max-width: $mobile) {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
}

.animations-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: $tablet) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  
  @media (max-width: $mobile) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
}

.animation-card {
  cursor: pointer;
  overflow: hidden;
  
  .card-preview {
    height: 200px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    
    .preview-placeholder {
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  }
  
  .card-content {
    padding: 24px;
  }
  
  .card-title {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 12px;
    color: $text-dark;
  }
  
  .card-description {
    color: $text-light;
    margin-bottom: 16px;
    line-height: 1.5;
  }
  
  .card-meta {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
    
    .difficulty {
      padding: 4px 12px;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
      
      &.简单 {
        background: rgba($secondary-color, 0.1);
        color: $secondary-color;
      }
      
      &.中等 {
        background: rgba($warning-color, 0.1);
        color: $warning-color;
      }
      
      &.困难 {
        background: rgba($accent-color, 0.1);
        color: $accent-color;
      }
    }
    
    .category {
      padding: 4px 12px;
      background: rgba($info-color, 0.1);
      color: $info-color;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 600;
    }
  }
  
  .card-tags {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    
    .tag {
      padding: 4px 8px;
      background: $bg-light;
      color: $text-light;
      border-radius: 12px;
      font-size: 11px;
      font-weight: 500;
    }
  }
}
</style> 