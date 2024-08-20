<template>
  <div class="main-container">
    <div>
      <nav class="navbar navbar-expand-lg navbar-light">
        <a class="navbar-brand" href="#">
          <v-img :src="logo" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse ma-5" id="navbarSupportedContent">
          <v-row>
            <v-col cols="12" class="d-flex justify-flex-end pa-0">
              <div class="headers">
                <p
                  v-for="header in headers.en"
                  :key="header"
                  class="ma-0 cursor-pointer"
                >
                  <p
                    v-if="header === 'Products'"
                    @click="$router.push({ name: 'products-list' })"
                     class="cursor-pointer"
                  >
                    {{ header }}
                  </p>
                  <p v-else class="cursor-pointer">
                    {{ header }}
                  </p>
                </p>
              </div>
              <!-- <ul class="navbar-nav headers">
                <li class="nav-item active" v-for="header in headers.en" :key="header">
                  <a href=""></a>
                  <a class="nav-link" href="#">
                    {{ header }}
                  </a>
                </li>
              </ul> -->
            </v-col>
            <v-col cols="12" class="categories-container">
              <div class="categories">
                <p
                  v-for="category in categories"
                  :key="category.title"
                  class="ma-0 cursor-pointer"
                  @click="$router.push({ name: 'product-category', params: { category: category.link } })"
                >
                  {{ category.title }}
                </p>
              </div>

              <form class="form-inline my-2 my-lg-0">
                <v-text-field
                  density="compact"
                  placeholder="Search"
                  class="me-3"
                  variant="putline"
                >
                  <v-img :src="search" />
                </v-text-field>

                <div class="icons-container">
                  <v-img :src="login" />
                  <v-img :src="heart" />
                  <v-img :src="cart" @click="navigate_to_cart()" class="cursor-pointer" />
                </div>
              </form>
            </v-col>
          </v-row>
        </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/Icons/logo black.png"

import search from "../assets/Icons/Search Mouve.png"
import login from "../assets/Icons/Login.png"
import cart from "../assets/Icons/Cart.png"
import heart from "../assets/Icons/heart_11613265.png"
import { useRouter } from "vue-router"

const router = useRouter()

const headers = {
  "en": [
    'Home', 'About Us', 'Media Center', 'Contact Us', 'AR'
  ]
}

const categories = [
  { title: "Electronics", link: "electronics" },
  { title: "Jewelery", link: "jewelery" },
  { title: "Men Clothing", link: "men's clothing" },
  { title: "Women Clothing", link: "women's clothing" },
]

const navigate_to_cart = _ => {
  router.push({ name: 'cart-items-list' })
}

</script>

<style lang="scss" scoped>
.navbar-brand {
  width: 200px;
  margin: auto;
  border-right: 1px solid #000;

  .v-img {
    width: 100px;
    height: 100px;
    margin: auto;
  }
}

.headers {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 1rem;

  p {
    width: fit-content;
  }
}

.categories-container {
  display: flex;
  justify-content: space-between;

  .categories {
    display: flex;
    justify-content: space-evenly;
    width: 50%;

    p {
      width: fit-content;
    }
  }
  
  :deep(.v-text-field) {
    padding: 0 !important;

    .v-field__input {
      background-color: lightgrey;
      height: 30px;
      width: 300px;
      border-radius: 8px;
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      input {
        color: #000;
      }

      .v-responsive {
        flex: 0 auto;
        width: 20px;
      }
    }
  }

  :deep(.v-input--horizontal) {
    height: 40px;
  }
  .icons-container {
    display: flex;
    gap: .5rem;
    margin: auto;

    .v-img {
      width: 20px;
      height: 20px;
    }
  }
}

@media only screen and (max-width: 1000px) {
  .navbar-brand {
    width: 100px !important;
    margin: 0 !important;
    border: none;
  }

  .headers {
    border-bottom: 1px solid lightgray;
    padding-bottom: 1rem;
    flex-direction: column;
    gap: 0 !important;
  }

  .categories-container, .categories {
    flex-direction: column;
    padding: .5rem 0 !important;

    p {
      margin: .5rem 0 !important;
    }
  }
}

@media only screen and (max-width: 425px) {
  .icons-container {
    margin-top: 1rem !important;
  }
}

</style>