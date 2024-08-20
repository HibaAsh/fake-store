import axios from 'axios'

export default {
  async get_categories() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/categories')
      
      this.categories = response.data
      
    } catch (error) {
      console.log(error)
    }
  },

  async get_category_products(category) {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
      
      this.categoriesProducts = response.data
      
    } catch (error) {
      console.log(error)
    }
  },
  
  async get_product(id) {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
      
      this.product = response.data
      return response.data
      
    } catch (error) {
      console.log(error)
    }
  },
 
  async get_products() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=5')
      this.products = response.data

      return response.data
      
    } catch (error) {
      console.log(error)
    }
  },
  
  async get_categories() {
    try {
      const response = await axios.get('https://fakestoreapi.com/products?limit=5')
      this.products = response.data

      return response.data
      
    } catch (error) {
      console.log(error)
    }
  },
  
  async get_cart_items() {
    let items = []

    try {
      const response = await axios.get('https://fakestoreapi.com/carts')
      
      this.cartItems = response.data
      // if(response.data) {
        
      //   response.data.map(item => {
      //     let itemProducts = []

      //     item.products.map(async product => {
      //       await this.get_product(product.productId)            
      //       itemProducts.push(this.product)
      //     })
          
      //     items.push({
      //       id: item.id,
      //       products: itemProducts
      //     })
      //   })
      // }
      // this.cartItems = items
      
    } catch (error) {
      console.log(error)
    }
  },
}
