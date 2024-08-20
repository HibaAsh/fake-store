<template>
  <div class="main-container">
    <h4>Become a member and get 50% free</h4>
    <v-btn>
      Sign up for more
      <v-icon icon="mdi-arrow-right" class="ms-2" />
    </v-btn>
    <!-- <div class="btn">
      <v-img :src="darkBtn" />
      <p>Sign up for free</p>
    </div> -->
  </div>
</template>

<script setup>
import darkBtn from "@/assets/Icons/Bottun.png"

</script>

<style lang="scss" scoped>
.main-container {
  background-color: #ede635;
  height: 200px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;

  .v-btn {
    text-transform : none;
    background-color: #000;
    color: #fff;
    box-shadow: 5px 5px #fff;
  }
}

@media only screen and (max-width: 600px) {
  .main-container {
    flex-direction: column;
  }
}
</style>