<template>
  <div class="cart">
    <div class="cart-details">
      <h2>Panier :</h2>
      <p>Nombre d'articles : {{ numberOfItems }}</p>
      <div v-for="(quantity, id) in cartItems" :key="id">
        <p v-if="getProductById(id)">
          {{ getProductById(id).name }} - Quantité : {{ quantity }}
        </p>
        <p v-else>
          Produit non trouvé pour ID : {{ id }}
        </p>
      </div>
      <p>Total : {{ totalPrice }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
  cart: Object,
  products: Array
});

const getProductById = (id) => {
  return props.products.find(product => product.id === id);
};

const numberOfItems = computed(() => {
  return Object.values(props.cart.get_list_cart()).reduce((total, qty) => total + qty, 0);
});

const totalPrice = computed(() => {
  return Object.entries(props.cart.get_list_cart()).reduce((total, [id, qty]) => {
    const product = getProductById(id);
    return total + (product ? product.price * qty : 0);
  }, 0);
});

const cartItems = computed(() => {
  return props.cart.get_list_cart();
});
</script>

<style scoped>
.cart {
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
}

.cart-details {
  margin-bottom: 16px;
}
</style>
