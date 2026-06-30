import { h } from 'vue'
import { bigScreenAnimations } from '../data/bigScreenAnimations.js'
import BigScreenAnimation from './BigScreenAnimation.vue'

export const bigScreenComponents = Object.fromEntries(
  bigScreenAnimations.map(animation => [
    animation.component,
    {
      name: animation.component,
      render() {
        return h(BigScreenAnimation, { variant: animation.variant })
      }
    }
  ])
)
