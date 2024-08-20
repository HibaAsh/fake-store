<template>
  <div>
    <Header />
    <div>
      <h4>{{ $route.params.category }} products</h4>
      <div class="card-container">
        <v-card
          v-for="product in products"
          :key="product.id"
        >
          <v-img :src="product.image" />
          <v-card-title>
            {{ product.title }}
          </v-card-title>
          <v-card-text>
            <div>
              <p>
                {{ product.description.slice(0, 150) }}
              </p>
              <p @click="navigate_to_product(product.id)" class="text-primary cursor-pointer" style="width: fit-content;">
                Read more ...
              </p>
            </div>
    
            <div class="d-flex justify-space-between px-3">
              <div>
                <v-icon icon="mdi-star" color="warning" />
                <p class="d-inline ms-1">{{ product.rating.rate }}</p>
              </div>
              <div>
                <v-icon icon="mdi-eye" color="primary" />
                <p class="d-inline ms-1">{{ product.rating.count }}</p>
              </div>
              <div @click="add_to_cart(product)" class="cursor-pointer">
                Add to cart
              </div>
            </div>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { useStore } from "@/store/useStore"
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


const store = useStore()
const route = useRoute()
const router = useRouter()

const products = ref([])

const navigate_to_product = id => {
  router.push({ name: 'product-details', params: { id: id } })
}

const add_to_cart = product => {
  if(store.cartItems.length === 0) {
    store.cartItems.push({
      "product": product,
      "quantity": 1
    })
  }

  else {
    let flag = true
    store.cartItems.map(item => {
      if(item.product.id === product.id) {
        item.quantity += 1
        flag = false
      }
    })

    if(flag) {
      store.cartItems.push({
        "product": product,
        "quantity": 1
      })
    }
  }
}

watch(_ => route.params.category, async _ => {
  await store.get_category_products(route.params.category)
  products.value = store.categoriesProducts
})

onMounted(async _ => {
  await store.get_category_products(route.params.category)
  products.value = store.categoriesProducts
})

</script>

<style lang="scss" scoped>
h4 {
  margin: 1rem 2rem;
  color: #000;
  text-transform: uppercase;
  width: fit-content;
  padding: 1rem;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: .5rem;
  width: 75%;
  margin: 4rem auto;
}

.v-card {
  width: 350px;

  .v-img {
    height: 250px;
  }
}

@media only screen and (max-width: 1024px) {
  .card-container {
    width: 100% !important;
  }
}

</style>