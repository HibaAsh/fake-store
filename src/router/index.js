import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import ProductCategory from '../views/ProductCategory.vue'
import ProductDetails from '../views/ProductDetails.vue'

import CartItems from '../views/CartItems.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },

  {
    path: '/product/category/:category',
    name: 'product-category',
    component: ProductCategory,
    params: true
  },
  
  {
    path: '/product/:id',
    name: 'product-details',
    component: ProductDetails,
    params: true
  },
  
  {
    path: '/cart-items-list',
    name: 'cart-items-list',
    component: CartItems
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
