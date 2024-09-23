<template>
  <v-card class="mx-auto" max-width="344">
    <v-img height="300px" :src="product.image" contain></v-img>

    <v-card-title>{{ product.title }}</v-card-title>

    <v-card-subtitle>${{ product.price }}</v-card-subtitle>

    <v-card-actions>
      <v-btn color="orange lighten-2" text @click="emitEvent('viewDetails')">
        Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn color="orange lighten-2" text @click="emitEvent('addToCart')">
        Add to cart
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup>
import { defineProps, toRefs, defineEmits } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['viewDetails', 'addToCart']);

const { product } = toRefs(props);

const emitEvent = (event) => {
  emit(event, product.value);
};
</script>

<style scoped>
/* Add any specific styles here */
</style>
