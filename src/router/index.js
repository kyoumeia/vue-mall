import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/home.vue')
const Category = () => import('../views/category/category.vue')
const Store = () => import('../views/store/store.vue')
const Cart = () => import('../views/cart/cart.vue')
const Profile = () => import('../views/profile/profile.vue')

const routes = [{
  path: '',
  redirect: '/home'
}, {
  path: '/home',
  component: Home
}, {
  path: '/category',
  component: Category
}, {
  path: '/store',
  component: Store
}, {
  path: '/cart',
  component: Cart
}, {
  path: '/profile',
  component: Profile
}]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router