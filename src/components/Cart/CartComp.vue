<script setup>
import './CartComp.css';
import { storeToRefs } from "pinia";
import { useProductStore } from "@/store/counter";
import { formatPrice } from "@/utils/utils";

const productStore = useProductStore();
const { countedProducts } = storeToRefs(productStore);

const handleToggleLike = (productId) => {
    productStore.toggleLike(productId);
};  
</script>

<template>
    <section class="cart">
        <div class="container">
            <p class="cart__text">Bosh sahifa > Savatcha</p>
            <div v-if="countedProducts.length > 0">
                <h2 style="margin: 20px 0;">Savatcha</h2>
                <div class="cart__list">
                    <div v-for="product in countedProducts" :key="product.id" class="cart__item">
                        <img class="cart__img" :src="product.image1" :alt="product.name" width="124" height="124" />
                        <div>
                            <h3 class="cart__title">{{ product.description }}</h3>
                            <button class="cart__btn">{{ product.name }}</button>
                        </div>
                        <div>
                            <p class="cart__price">{{ product.price }} so'm</p>
                            <p class="cart__pay">{{ formatPrice((product.price + (product.price / 100 * 50)) /
                                12) }}
                                so'm x 12 oy</p>
                        </div>
                        <button class="" @click="handleToggleLike(product.id)">
                            <img :src="product.like ? '/img/product__heart-full.svg' : '/img/product__heart.svg'"
                                alt="heart">
                        </button>
                        <button class="">
                            <img src="/img/product_gray.svg" alt="taqqoslash">
                        </button>
                    </div>
                </div>
            </div>
            <div class="empty__div" v-else>
                <img class="empty__img" src="/img/liked__img.svg" alt="img">
                <p class="empty__title">Hali hech qanday mahsulot sotib olinmagan</p>
                <p class="empty__text">Mahsulotlardan birini xarid qiling va bu sahifada ko'ring</p>
            </div>
        </div>
    </section>
</template>
