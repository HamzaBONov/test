<template>
  <v-app>
    <v-main>
      <NavBar/>
      <ProductList/>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar.vue'
import ProductList from './views/ProductList'

export default {
  name: 'App',

  components: {
    NavBar,
    ProductList,
  },

  data: () => ({
    //
  }),
}
</script>
