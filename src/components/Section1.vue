<template>
  <div>
    <Carousel :autoplay="autoplay" :transition="1000" :wrap-around="true">
      <Slide v-for="slide in 10" :key="slide">
        <v-img :src="image">
          <div class="content">
            <h4>Sale</h4>
            <p>
              Access a limited selection with up to 70% off
            </p>
            <v-btn>
              Shop now
              <v-icon icon="mdi-arrow-right" class="ms-2 mt-1" />
            </v-btn>
          </div>
        </v-img>
      </Slide>
  
      <template #addons>
        <Pagination class="my-5" />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from "vue"

import image from "..assets/Images/Header.jpg"

const autoplay = ref(3000)

</script>

<style lang="scss" scoped>
.v-img {
  position: relative;

  .content {
    position: absolute;
    // top: 80px;
    // left: 2rem;
    background-color: rgba(128, 128, 128, 0.2);
    height: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    p {
      width: 75%;
      margin: 1rem auto;
    }
    
    .v-btn {
      text-transform : none;
      background-color: #fff;
      color: #000;
      box-shadow: 5px 5px #000;
      margin-top: 1rem;
    }
  }
}

@media only screen and (max-width: 767px) {
  .content {
    top: 0px !important;
    left: 0 !important;
    padding: .5rem !important;
    height: 100%;
    width: 100%;

    h4 {
      margin: 5px auto !important;
      padding: 0 !important;
    }

    p {
      margin: 5px auto !important;
    }

    .v-btn {
      margin-top: 5px !important;
    }
  }
}
</style>