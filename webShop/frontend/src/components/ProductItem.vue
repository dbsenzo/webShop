<template>
  <div class="product">
    <div class="product-details">
      <h2>{{ product.name }}</h2>
      <p>{{ product.desc }}</p>
      <p>Price: {{ product.price }}</p>
      <p>Stock: {{ product.stock }}</p> <!-- Affichage du stock -->
    </div>

    <div class="product-image">
      <img :src="product.imageUrl" :alt="product.name" />
    </div>

    <button @click="addToCart" :disabled="product.stock <= 0">Add to Cart</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  product: Object,
  cart: Object,
});

const emits = defineEmits(['add-to-cart']);

const addToCart = () => {
  if (props.product.stock > 0) {
    emits('add-to-cart', props.product.id);
    console.log(`Added ${props.product.name} to cart.`);
  } else {
    console.log(`Stock épuisé pour ${props.product.name}.`);
  }
};
</script>

<style scoped>
.product {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
}

.product-details {
  margin-bottom: 16px;
}

.product-image img {
  max-width: 100px;
  height: auto;
}
</style>
