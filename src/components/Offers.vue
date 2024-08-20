<template>
  <v-container>
    <h3 class="my-5">Special Offers</h3>
    <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="autoplay" :transition="1000" :wrap-around="true">
      <Slide v-for="offer in offers" :key="offer.id">
        <v-card @click="$router.push({ path: `product/${offer.id}` })">
          <v-img :src="offer.img" />
          <v-card-title>
            {{ offer.name }}
          </v-card-title>
          <v-card-text>
            AED
            <p class="old-price d-inline">
              {{ offer.oldPrice }}
            </p>
            <p class="d-inline">
              {{ offer.newPrice }}
            </p>
          </v-card-text>
        </v-card>
      </Slide>
      <template #addons>
        <Navigation />
        <Pagination class="mt-5" />
      </template>
    </Carousel>
  </v-container>
</template>

<script setup>
import image1 from "@/assets/Images/1.jpg"
import image2 from "@/assets/Images/2.jpg"
import image3 from "@/assets/Images/3.jpg"
import image4 from "@/assets/Images/4.jpg"
import image5 from "@/assets/Images/D.png"
import image6 from "@/assets/Images/F.png"
import image7 from "@/assets/Images/G.png"
import image8 from "@/assets/Images/H.png"

import { ref } from "vue"


const autoplay = ref(3000)

const settings = {
  itemsToShow: 1,
  snapAlign: 'center'
}

const breakpoints = {
  577: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  
  992: {
    itemsToShow: 2.5,
    snapAlign: 'center',
  },
  
  1200: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
}

const offers = [
  {
    "id": 1,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image1,
  },

  {
    "id": 2,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image2
  },

  {
    "id": 3,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image3
  },

  {
    "id": 4,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image4
  },

  {
    "id": 5,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image5
  },

  {
    "id": 6,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image6
  },

  {
    "id": 7,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image7
  },

  {
    "id": 8,
    "name": "Lorem ipsum dolor",
    "oldPrice": "899.00",
    "newPrice": "800.00",
    "img": image8
  },
]

</script>

<style lang="scss" scoped>
.v-container {
  margin: auto auto 5rem auto;
}

.carousel {
  height: 500px;
}

.v-card {
  height: 500px;

  .v-card-title {
    color: lightgray;
    font-size: medium;
  }

  .v-card-text {
    font-size: small;
    font-weight: 600;
  }
}

.v-img {
  width: 300px;
  height: 400px;
}

.old-price {
  text-decoration: line-through;
  margin: auto 1rem;
}
</style>