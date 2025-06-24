import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Home from './views/Home.vue'
import AnimationDetail from './views/AnimationDetail.vue'
import './styles/global.scss'

const routes = [
  { path: '/', component: Home },
  { path: '/animation/:id', component: AnimationDetail, props: true }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

createApp(App).use(router).mount('#app') 