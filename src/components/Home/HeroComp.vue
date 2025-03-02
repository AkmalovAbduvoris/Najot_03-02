<script setup>
import { ref } from "vue";

const products = ref([]); 

async function getProducts() {
  try {
    const response = await fetch("https://67c3fd9d89e47db83dd2ef73.mockapi.io/products");
    if (!response.ok) throw new Error("Ma'lumot yuklashda xatolik!");

    const data = await response.json();
    products.value = data;
  } catch (error) {
    console.error("Xatolik:", error);
  }
}
getProducts();
</script>

<template>
  <section class="hero is-primary is-fullheight">
    <div class="hero-body">
      <div class="container">
        <ul>
          <li v-for="product in products" :key="product.id">
            <h1>{{ product.name }} - {{ product.price }} so'm</h1>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
