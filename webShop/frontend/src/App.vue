<template>
  <div class="flex column">
    <header>
      <div class="wrapper">
        <h1>Store en ligne</h1>
      </div>
    </header>

    <main>
      <div v-for="product in products" :key="product.id">
        <ProductItem :product="product" :cart="cart" @add-to-cart="addToCart" />
      </div>
    </main>

    <aside>
      <CartItem :cart="cart" :products="products" />
    </aside>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import ProductItem from './components/ProductItem.vue';
import CartItem from './components/CartItem.vue';
import { getProducts } from './services/api';
import { Cart } from './manager.js';

const cart = reactive(new Cart());
const products = ref([]);

onMounted(async () => {
  try {
    const response = await getProducts();
    products.value = response.data.map(product => ({
      id: product._id, 
      name: product.name,
      desc: product.desc,
      price: product.price,
      imageUrl: product.imageUrl,
      stock: product.stock || 10
    }));
    console.log(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
});

const addToCart = (productId) => {
  const product = products.value.find(p => p.id === productId);
  if (product && product.stock > 0) {
    cart.addInCart(productId);
    product.stock--;
    console.log('Adding to cart product ID:', productId);
  } else {
    console.log('Stock épuisé pour le produit:', productId);
  }
};
</script>

<style scoped>
header {
  line-height: 1.5;
  display: flex;
}

.wrapper {
  text-align: center;
  margin: 0 auto;
  padding: 20px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}

main {
  display: flex;
  flex-wrap: wrap;
}

aside {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}
</style>
