<script setup>
import { ref, onMounted } from "vue";
import { getAllProducts } from "../../../sercive/apiService";
import { formatPrice } from "../../../utils/utils";

const products = ref([]);

onMounted(async () => {
    products.value = await getAllProducts();
});
</script>

<template>
    <section class="product">
        <div class="container">
            <a class="product__link" href="">
                <h2 class="product__header">Chegirma</h2>
                <p class="product__text">Barcha mahsulotlar</p>
            </a>
            
            <div class="product__list">
                <router-link v-for="product in products.slice(0,10)" :key="product.id" 
                             :to="'/product/' + product.id" class="product__item">
                    <div class="product__card" style="margin: 0;">
                        <button class="product__heart">
                            <img src="/img/product__heart.svg" alt="heart">
                        </button>
                        <button class="product__compare">
                            <img src="/img/product_gray.svg" alt="taqqoslash">
                        </button>
                        <img class="product__img" :src="product.image1" :alt="product.name" width="160" height="160" />
                        <h3 class="product__title">{{ product.description }}</h3>
                        <div class="product__rating">
                            <div>
                                <i class="product__icon fa-solid fa-star"></i>
                                <i class="product__icon fa-solid fa-star"></i>
                                <i class="product__icon fa-solid fa-star"></i>
                                <i class="product__icon fa-solid fa-star"></i>
                                <i class="product__icon fa-solid fa-star"></i>
                            </div>
                            <p class="product__comment">0 ta sharh</p>
                        </div>
                        <p class="product__price">{{ product.price }} so'm</p>
                        <p class="product__pay">{{ formatPrice((product.price + (product.price / 100 * 50)) / 12) }}
                            so'm x 12 oy</p>
                        <div class="product__btns">
                            <button class="product__buy">Hoziroq xarid qilish</button>
                            <button class="product__cart">
                                <img src="/img/product__cart.svg" alt="cart">
                            </button>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<style scoped>
.product__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.product__item {
    width: calc(20% - 20px);
    text-decoration: none;
}

</style>
