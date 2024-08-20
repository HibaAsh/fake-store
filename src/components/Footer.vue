<template>
  <v-row class="main-container">
    <v-col cols="6" sm="4" md="3" class="section mx-auto">
      <v-img :src="image" class="image" />
      <div class="icons-container">
        <v-icon icon="mdi-facebook" />
        <v-icon icon="mdi-youtube" />
        <v-icon icon="mdi-instagram" />
        <v-icon icon="mdi-twitter" />
      </div>
    </v-col>

    <v-divider class="d-md-none bg-secondary my-5" />

    <v-col cols="6" sm="4" md="3" class="section">
      <a href="/">Home</a>
      <a href="/">About Us</a>
      <a href="/">Media Center</a>
      <a href="/">Contact Us</a>
    </v-col>

    <v-divider class="d-sm-none bg-secondary my-5" />

    <v-col cols="6" sm="4" md="3" class="section">
      <p
        v-for="category in categories"
        :key="category.title"
        class="ma-0 cursor-pointer"
        @click="$router.push({ path: `product/category/${category.link}` })"
      >
        {{ category.title }}
      </p>
    </v-col>
    
    <v-divider class="d-sm-none bg-secondary my-5" />

    <v-col cols="6" sm="4" md="4" lg="3" class="section">
      <a href="/"><b>Contact Us</b></a>
      <p>+971 00 000 0000</p>
      <p>+971 0 000 0000</p>
      <a href="/">
        <v-icon icon="mdi-email" />
        info@sample.com
      </a>
    </v-col>
    
    <v-divider class="my-5" />

    <div class="rights">
      &copy; Developer Test 2024. All Rights Reserved.
    </div>
  </v-row>
</template>

<script setup>
import image from "@/assets/Icons/DEVELOPER TEST - Logo.png"

const categories = [
  { title: "Electronics", link: "electronics" },
  { title: "Jewelery", link: "jewelery" },
  { title: "Men Clothing", link: "men's clothing" },
  { title: "Women Clothing", link: "women's clothing" },
]

</script>

<style lang="scss" scoped>
.main-container {
  background-color: #000;
  padding: 2rem;
  
  .section {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    margin: auto;

    .icons-container {
      display: flex;
      justify-content: center;
      gap: 1rem;

      .v-icon {
        width: 25px;
        height: 25px;
        color: #fff;
      }
    }
    
  }

  p {
    color: #fff;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #fff;
    display: flex;
    gap: .5rem;
  }
  
  .image {
    width: 200px !important;
    height: 200px !important;
    margin: auto;
  }
  
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    color: #fff;
    width: 100%;
  }

  .v-divider {
    background-color: #fff;
  }
}
</style>