<template>
  <div class="animation-detail">
    <div class="container">


      <!-- 动画信息 -->
      <div v-if="animation" class="detail-content">
        <header class="detail-header">
          <h1 class="detail-title">{{ animation.title }}</h1>
          <p class="detail-description">{{ animation.description }}</p>
          
          <div class="detail-meta">
            <span class="difficulty" :class="animation.difficulty">
              {{ animation.difficulty }}
            </span>
            <span class="category">{{ animation.category }}</span>
          </div>
          
          <div class="detail-tags">
            <span
              v-for="tag in animation.tags"
              :key="tag"
              class="tag"
            >
              {{ tag }}
            </span>
          </div>
        </header>

        <!-- 动画演示 -->
        <section class="animation-demo card">
          <h2 class="section-title">动画演示</h2>
          <div class="demo-container">
            <component
              :is="getComponent(animation.component)"
              v-if="getComponent(animation.component)"
            />
            <div v-else class="demo-placeholder">
              动画组件加载中...
            </div>
          </div>
        </section>

        <!-- 实现原理 -->
        <section class="animation-explanation card" v-if="codeExample">
          <h2 class="section-title">实现原理</h2>
          <div class="explanation-content">
            <p v-for="(line, index) in explanationLines" :key="index" class="explanation-line">
              {{ line }}
            </p>
          </div>
        </section>

        <!-- 代码示例 -->
        <section class="code-examples" v-if="codeExample">
          <!-- Template 代码 -->
          <div class="code-section card">
            <div class="code-header">
              <h3 class="code-title">Template</h3>
              <button class="copy-btn" @click="copyCode('template')">
                复制代码
              </button>
            </div>
            <pre class="code-block"><code>{{ codeExample.template }}</code></pre>
          </div>

          <!-- Style 代码 -->
          <div class="code-section card">
            <div class="code-header">
              <h3 class="code-title">Style</h3>
              <button class="copy-btn" @click="copyCode('style')">
                复制代码
              </button>
            </div>
            <pre class="code-block"><code>{{ codeExample.style }}</code></pre>
          </div>

          <!-- Script 代码（如果有） -->
          <div v-if="codeExample.script" class="code-section card">
            <div class="code-header">
              <h3 class="code-title">Script</h3>
              <button class="copy-btn" @click="copyCode('script')">
                复制代码
              </button>
            </div>
            <pre class="code-block"><code>{{ codeExample.script }}</code></pre>
          </div>
        </section>

        <!-- 使用说明 -->
        <section class="usage-guide card">
          <h2 class="section-title">使用方法</h2>
          <div class="usage-steps">
            <div class="step">
              <span class="step-number">1</span>
              <p>复制上面的代码到你的Vue组件中</p>
            </div>
            <div class="step">
              <span class="step-number">2</span>
              <p>确保已安装SCSS预处理器</p>
            </div>
            <div class="step">
              <span class="step-number">3</span>
              <p>根据需要调整动画参数（如时长、颜色等）</p>
            </div>
            <div class="step">
              <span class="step-number">4</span>
              <p>在需要的地方引入并使用组件</p>
            </div>
          </div>
        </section>
      </div>

      <!-- 动画未找到 -->
      <div v-else class="not-found">
        <h2>动画未找到</h2>
        <p>抱歉，您访问的动画不存在。</p>
        <router-link to="/" class="btn primary">返回首页</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { animations } from '../data/animations.js'
import { codeExamples } from '../data/codeExamples.js'

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

export default {
  name: 'AnimationDetail',
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
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const animation = computed(() => {
      return animations.find(item => item.id === props.id)
    })

    const codeExample = computed(() => {
      return codeExamples[props.id]
    })

    const explanationLines = computed(() => {
      if (!codeExample.value?.explanation) return []
      return codeExample.value.explanation.split('\n').filter(line => line.trim())
    })

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
      }
      return components[componentName]
    }

    const copyCode = async (type) => {
      if (!codeExample.value) return
      
      const code = codeExample.value[type]
      if (!code) return

      try {
        await navigator.clipboard.writeText(code)
        alert('代码已复制到剪贴板！')
      } catch (err) {
        console.error('复制失败:', err)
        alert('复制失败，请手动复制代码')
      }
    }

    return {
      animation,
      codeExample,
      explanationLines,
      getComponent,
      copyCode
    }
  }
}
</script>

<style lang="scss" scoped>
@use "../styles/variables.scss" as *;

.back-nav {
  margin-bottom: 30px;
}

.detail-header {
  text-align: center;
  margin-bottom: 40px;
  
  .detail-title {
    font-size: 36px;
    font-weight: 700;
    margin-bottom: 16px;
    color: $text-dark;
  }
  
  .detail-description {
    font-size: 18px;
    color: $text-light;
    margin-bottom: 24px;
  }
  
  .detail-meta {
    display: flex;
    gap: 16px;
    justify-content: center;
    margin-bottom: 20px;
    
    .difficulty {
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
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
      padding: 8px 16px;
      background: rgba($info-color, 0.1);
      color: $info-color;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
    }
  }
  
  .detail-tags {
    display: flex;
    gap: 12px;
    justify-content: center;
    flex-wrap: wrap;
    
    .tag {
      padding: 6px 12px;
      background: $bg-light;
      color: $text-light;
      border-radius: 15px;
      font-size: 12px;
      font-weight: 500;
    }
  }
}

.section-title {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 24px;
  color: $text-dark;
}

.animation-demo {
  margin-bottom: 40px;
  padding: 40px;
  
  .demo-container {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    border-radius: $border-radius;
    padding: 60px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
    
    .demo-placeholder {
      color: white;
      font-size: 18px;
      font-weight: 600;
    }
  }
}

.animation-explanation {
  margin-bottom: 40px;
  padding: 30px;
  
  .explanation-content {
    background: $bg-light;
    padding: 24px;
    border-radius: $border-radius;
    border-left: 4px solid $primary-color;
    
    .explanation-line {
      margin-bottom: 12px;
      color: $text-dark;
      line-height: 1.6;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}

.code-examples {
  margin-bottom: 40px;
  
  .code-section {
    margin-bottom: 24px;
    
    .code-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 24px 0;
      
      .code-title {
        font-size: 18px;
        font-weight: 600;
        color: $text-dark;
      }
      
      .copy-btn {
        padding: 8px 16px;
        background: $primary-color;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 12px;
        font-weight: 600;
        transition: $transition;
        
        &:hover {
          background: $primary-color-dark;
        }
      }
    }
    
    .code-block {
      margin: 16px 24px 24px;
      padding: 20px;
      background: #1e1e1e;
      border-radius: 6px;
      overflow-x: auto;
      
      code {
        color: #d4d4d4;
        font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
        font-size: 13px;
        line-height: 1.5;
        white-space: pre;
      }
    }
  }
}

.usage-guide {
  padding: 30px;
  
  .usage-steps {
    .step {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
      
      &:last-child {
        margin-bottom: 0;
      }
      
      .step-number {
        width: 32px;
        height: 32px;
        background: $primary-color;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        margin-right: 16px;
        flex-shrink: 0;
      }
      
      p {
        color: $text-dark;
        line-height: 1.6;
        margin: 6px 0 0 0;
      }
    }
  }
}

.not-found {
  text-align: center;
  padding: 60px 20px;
  
  h2 {
    font-size: 32px;
    margin-bottom: 16px;
    color: $text-dark;
  }
  
  p {
    font-size: 18px;
    color: $text-light;
    margin-bottom: 32px;
  }
}

@media (max-width: $mobile) {
  .detail-header {
    .detail-title {
      font-size: 28px;
    }
    
    .detail-meta {
      flex-direction: column;
      align-items: center;
    }
  }
  
  .animation-demo {
    padding: 20px;
    
    .demo-container {
      padding: 40px 20px;
    }
  }
  
  .code-section .code-header {
    flex-direction: column;
    gap: 12px;
    align-items: flex-start;
  }
}
</style> 