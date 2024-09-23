<template>
  <v-dialog v-model="visible" max-width="800px">
    <v-card>
      <v-card-title>
        <span class="headline">{{ product.title }}</span>
      </v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" md="6">
            <v-img :src="product.image" contain></v-img>
          </v-col>
          <v-col cols="12" md="6">
            <p><strong>Price:</strong> ${{ product.price }}</p>
            <p><strong>Description:</strong> {{ product.description }}</p>
            <v-btn color="green" @click="addToCart(product)">Add to Cart</v-btn> 
            <v-btn @click="closeModal">Close</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose } from 'vue';

// eslint-disable-next-line no-unused-vars
const props = defineProps(['product', 'addToCart']);
const emit = defineEmits(['close']);
const visible = ref(false);

const openModal = () => {
  visible.value = true;
};

const closeModal = () => {
  visible.value = false;
  emit('close');
};

defineExpose({ openModal });
</script>

<style scoped>
/* Add any additional styles here if needed */
</style>
