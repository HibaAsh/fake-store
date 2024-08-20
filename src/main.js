import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { Icon } from '@iconify/vue';
import { i18n } from './plugins/i18n/index'
import { createPinia } from 'pinia'

import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel'
// import { BootstrapVue } from 'bootstrap-vue'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

import 'vue3-carousel/dist/carousel.css'

loadFonts()

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(Icon)
  .use(i18n)
  .use(pinia)

  .component('Carousel', Carousel)
  .component('Slide', Slide)
  .component('Navigation', Navigation)
  .component('Pagination', Pagination)

  .mount('#app')
