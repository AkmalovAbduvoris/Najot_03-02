<script setup>
import { storeToRefs } from "pinia";
import { formatPrice } from "../../../utils/utils";
import { useProductStore } from "@/store/counter";
const productStore = useProductStore();
const { products } = storeToRefs(productStore);
const handleToggleLike = (productId) => {
    productStore.toggleLike(productId);
};
</script>

<template>
    <section class="product">
        <div class="container">
            <a class="product__link" href="">
                <h2 class="product__header">Chegirma</h2>
                <p class="product__text">Barcha mahsulotlar</p>
            </a>
            
            <div class="product__list">
                <div v-for="product in products.slice(0,10)" :key="product.id" class="product__item">
                    <button class="product__heart" @click="handleToggleLike(product.id)">
                        <img :src="product.like ? '/img/product__heart-full.svg' : '/img/product__heart.svg'"
                        alt="heart">
                    </button>
                    <button class="product__compare">
                        <img src="/img/product_gray.svg" alt="taqqoslash">
                    </button>
                <router-link 
                             :to="'/product/' + product.id" class="product__item">
                    <div class="product__card" style="margin: 0;">
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
    position: relative;
    width: calc(20% - 20px);
    text-decoration: none;
    transition: all 0.2s ease;
}

</style>
