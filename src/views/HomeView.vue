<template>
  <Header />
  <Section1 />
  <Section2 />
  <Offers />
  <Section3 />
  <Arrivals />
  <Section4 />
  <Footer />

  <router-view />
</template>

<script setup>

import Header from '@/components/Header.vue'
import Arrivals from '@/components/Arrivals.vue'
import Offers from '@/components/Offers.vue'
import Footer from '@/components/Footer.vue'

import Section1 from '@/components/Section1.vue'
import Section2 from '@/components/Section2.vue'
import Section3 from '@/components/Section3.vue'
import Section4 from '@/components/Section4.vue'


</script>
