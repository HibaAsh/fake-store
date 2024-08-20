<template>
  <div>
    <Header />
    <div v-if="cartItems?.length > 0" class="container">
      <h4>Cart Items</h4>

      <div class="card-container">
        <v-card
          v-for="cartItem in cartItems"
          :key="cartItem.product.id"
        >
          <v-img :src="cartItem.product.image" />
          <v-card-title>
            {{ cartItem.product.title }}
          </v-card-title>
          <v-card-text>
            <div>
              <p>
                {{ cartItem.product.description.slice(0, 150) }}
              </p>
              <p @click="navigate_to_product(cartItem.product.id)" class="text-primary cursor-pointer" style="width: fit-content;">
                Read more ...
              </p>
            </div>
    
            <div class="d-flex justify-space-between px-3">
              <div>
                <v-icon icon="mdi-star" color="warning" />
                <p class="d-inline ms-1">{{ cartItem.product.rating.rate }}</p>
              </div>
              <div>
                <v-icon icon="mdi-eye" color="primary" />
                <p class="d-inline ms-1">{{ cartItem.product.rating.count }}</p>
              </div>
            </div>

            <div class="my-3">
              Quantity: {{ cartItem.quantity }}
            </div>
            <div class="d-flex justify-space-between">
              <p class="cursor-pointer" @click="update_item(cartItem)">
                Edit quantity
              </p>
              <p class="cursor-pointer" @click="delete_item(cartItem)">
                Delete item
              </p>
            </div>
            <v-form v-if="isUpdatedItem && (updateItem.product.id === cartItem.product.id)" @submit.prevent="submit_update">
              <v-text-field v-model="quantity" variant="outline" type="number" />
              <v-btn type="submit">Update</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
    </div>
    <div v-else class="container" style="display: flex; justify-content: center; padding: 2rem;">
      <b class="text-danger">No items are added to the cart yet</b>
    </div>
    
    <Footer />
  </div>
</template>

<script setup>
import { useStore } from "..store/useStore"
import { onMounted, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"

import Header from '..components/Header.vue'
import Footer from '..components/Footer.vue'


const store = useStore()
const route = useRoute()
const router = useRouter()

const cartItems = ref([])

const navigate_to_product = id => {
  router.push({ name: 'product-details', params: { id: id } })
}

const updateItem = ref()
const isUpdatedItem = ref(false)
const quantity = ref(0)

const update_item = cartItem => {
  updateItem.value = cartItem
  isUpdatedItem.value = true
  quantity.value = cartItem.quantity
}

const submit_update = _ => {
  let items = []
  cartItems.value.map(item => {
    if(item.product.id === updateItem.value.product.id) {
      item.quantity = quantity.value
    }
    items.push(item)
  })

  cartItems.value = items
  store.cartItems = items
  isUpdatedItem.value = false
}

const delete_item = cartItem => {
  let items = []
  cartItems.value.map(item => {
    if(item.product.id !== cartItem.product.id) {
      items.push(item)
    }
  })

  cartItems.value = items
  store.cartItems = items
}

onMounted(async _ => {
  cartItems.value = store.cartItems
})

</script>

<style lang="scss" scoped>

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

:deep(.v-field) {
  background-color: lightgray;
  padding: 0 !important;
}
</style>