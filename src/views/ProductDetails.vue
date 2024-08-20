<template>
  <div class="main-container">
    <Header />

    <div>
      <h3>Product Details</h3>
  
      <v-row v-if="product">
        <v-col cols="12" md="4">
          <v-img :src="product.image" />
        </v-col>
        <v-col cols="12" md="8" class="content">
          <h4 class="mx-2">{{ product.title }}</h4>
          <p style="padding: 2rem;">{{ product.description }}</p>
          <div class="d-flex justify-space-between mx-2">
            <div>
              <v-icon icon="mdi-star" color="warning" />
              <p class="d-inline ms-1">{{ product.rating.rate }}</p>
            </div>
            <div>
              <v-icon icon="mdi-eye" color="primary" />
              <p class="d-inline ms-1">{{ product.rating.count }}</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>

    <Footer />
  </div>
</template>

<script setup>
import { useStore } from "@/store/useStore"
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"

import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'


const store = useStore()
const route = useRoute()

const product = ref()

onMounted(async _ => {
  await store.get_product(route.params.id)

  product.value = store.product
})

</script>

<style lang="scss" scoped>

.main-container {

  h3 {
    margin: 1rem 2rem;
    color: #000;
    text-transform: uppercase;
    width: fit-content;
    padding: 1rem;
  }

  .v-row {
    display: flex;
    justify-content: center;
    align-items: center;

    .v-img {
      height: 500px;
      margin: 2rem;
    }

    .content {
      padding: 8rem;
    }
  }
}

</style>