<template>
  <div>
    <v-tabs v-model="selectedTab" align-tabs="center" color="deep-purple-accent-4">
      <v-tab :value="null">All</v-tab>
      <v-tab :value="'men\'s clothing'">Men's Clothing</v-tab>
      <v-tab :value="'women\'s clothing'">Women's Clothing</v-tab>
      <v-tab :value="'jewelery'">Jewelery</v-tab>
      <v-tab :value="'electronics'">Electronics</v-tab>
    </v-tabs>

    <v-container>
      <v-row>
        <v-col
          v-for="product in filteredProducts"
          :key="product.id"
          cols="12"
          sm="4"
          md="2"
          class="ma-4"
        >
          <ProductThumbnail
            :product="product"
            @viewDetails="showProductDetails(product)" 
            @addToCart="addToCart"
          />
        </v-col>
      </v-row>
    </v-container>

    <ProductDetailsModal
      v-if="selectedProduct"
      :product="selectedProduct"
      :add-to-cart="addToCart" 
      @close="selectedProduct = null"
      ref="productDetailsModal"
    />
  </div>
</template>

<script>
import axios from 'axios';
import ProductThumbnail from '../components/product/ProductThumbnail.vue';
import ProductDetailsModal from '../components/product/ProductDetailsModal.vue';

export default {
  data() {
    return {
      products: [],
      selectedTab: null,
      selectedProduct: null,
    };
  },
  async created() {
    const response = await axios.get('https://fakestoreapi.com/products');
    this.products = response.data;
  },
  computed: {
    filteredProducts() {
      if (!this.selectedTab) return this.products;
      return this.products.filter(product => product.category.toLowerCase() === this.selectedTab.toLowerCase());
    }
  },
  methods: {
    showProductDetails(product) {
      this.selectedProduct = product;
      this.$nextTick(() => {
        this.$refs.productDetailsModal.openModal();
      });
    },
    addToCart(product) {
      this.$store.dispatch('addToCart', { id: product.id, image: product.image, title: product.title, price: product.price, quantity: 1 });
    }
  },
  components: {
    ProductThumbnail,
    ProductDetailsModal,
  }
};
</script>

<style>
</style>
