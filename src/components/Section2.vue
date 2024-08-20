<template>
  <div>
    <v-img :src="image1" cover class="main-image" />
    
    <v-img :src="image2" class="white-btn cursor-pointer">
      <p>See more</p>
    </v-img>

  </div>
</template>

<script setup>
import image1 from "..assets/Images/Jewelry.jpg"
import image2 from "..assets/Icons/Bottun White.png"

</script>

<style lang="scss" scoped>
div {
  position: relative;

  .white-btn {
    position: absolute;
    bottom: 10%;
    left: 2rem;
    height: 50px;
    width: 150px;
    z-index: 100;

    p {
      position: absolute;
      top: .7rem;
      left: 1rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  .white-btn {
    width: 110px !important;
    bottom: 5% !important;
    left: 1rem !important;

    p {
      font-size: small;
      top: .9rem !important;
    }
  }
}
</style>