<template>
  <v-container>
    <h3 class="my-5">New Arrivals</h3>

    <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="autoplay" :transition="1000" :wrap-around="true">
      <Slide v-for="offer in offers" :key="offer.id">
        <v-card @click="$router.push({ path: `product/${offer.id}` })">
          <v-img :src="offer.img" />
          <v-card-title>
            {{ offer.name }}
          </v-card-title>
          <v-card-text>
           AED {{ offer.price }} 
          </v-card-text>
        </v-card>
      </Slide>
  
      <template #addons>
        <Pagination class="mt-5" />
      </template>
    </Carousel>
  </v-container>
</template>

<script setup>
import image1 from "@/assets/Images/D.png"
import image2 from "@/assets/Images/F.png"
import image3 from "@/assets/Images/G.png"
import image4 from "@/assets/Images/H.png"

import { ref } from "vue"


const autoplay = ref(3000)

const settings = {
  itemsToShow: 1,
  snapAlign: 'center'
}

const breakpoints = {
  400: {
    itemsToShow: 2,
    snapAlign: 'center',
  },

  576: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },

  767: {
    itemsToShow: 3.5,
    snapAlign: 'center',
  },
  
  976: {
    itemsToShow: 4.5,
    snapAlign: 'center',
  },
  
  1200: {
    itemsToShow: 5.5,
    snapAlign: 'center',
  },
}

const offers = [
  {
    "id": 1,
    "name": "Lorem ipsum dolor",
    "price": "899.00",
    "img": image1
  },

  {
    "id": 2,
    "name": "Lorem ipsum dolor",
    "price": "899.00",
    "img": image2
  },

  {
    "id": 3,
    "name": "Lorem ipsum dolor",
    "price": "899.00",
    "img": image3
  },

  {
    "id": 4,
    "name": "Lorem ipsum dolor",
    "price": "899.00",
    "img": image4
  },
]

</script>

<style lang="scss" scoped>
.carousel {

  .v-card {
    .v-card-title {
      color: lightgray;
      font-size: medium;
    }
  }
}
</style>