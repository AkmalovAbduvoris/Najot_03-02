<script setup>
import './PhonesComp.css'
import { storeToRefs } from "pinia";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import { formatPrice } from "../../../utils/utils";
import { useProductStore } from "@/store/counter";
const productStore = useProductStore();
const { products } = storeToRefs(productStore);

const handleToggleLike = (productId) => {
    productStore.toggleLike(productId);
};

const handleIncreaseCount = (productId) => {
    productStore.increaseCount(productId);
};

const carouselConfig = {
    itemsToShow: 5,
    wrapAround: true,
    autoplay: 5000,
    snapAlign: "start",
};
</script>

<template>
    <section class="product">
        <div class="container">
            <a class="product__link" href="">
                <h2 class="product__header">Telefon va gadjetlar</h2>
                <p class="product__text">Barcha mahsulotlar</p>
            </a>
            <div class="carousel__wrapper">
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="product in products" :key="product.id">
                        <div class="product__item">
                            <button class="product__heart" @click="handleToggleLike(product.id)">
                                <img :src="product.like ? '/img/product__heart-full.svg' : '/img/product__heart.svg'"
                                    alt="heart">
                            </button>
                            <button class="product__compare"><img src="/img/product_gray.svg" alt="taqqoslash"></button>
                            <div class="product__item">
                                <div class="product__card">
                                    <router-link :to="'/product/' + product.id">
                                        <img class="product__img" :src="product.image1" :alt="product.name" width="160"
                                        height="160" />
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
                                    <p class="product__pay">{{ formatPrice((product.price + (product.price / 100 * 50))
                                        /
                                        12) }}
                                        so'm x 12 oy</p>
                                    </router-link>
                                    <div class="product__btns">
                                        <button class="product__buy">Hoziroq xarid qilish</button>
                                        <button class="product__cart" @click="handleIncreaseCount(product.id)"><img src="/img/product__cart.svg"
                                                alt="cart"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<style scoped>
:deep(.carousel__track) {
    padding: 20px 0 !important;
}

:deep(.carousel__prev) {
    width: 35px;
    height: 35px;
    left: -10px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    color: #006bff;
    border: 1px solid #006bff;
}

:deep(.carousel__next) {
    width: 35px;
    height: 35px;
    right: -10px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    color: #006bff;
    border: 1px solid #006bff;
}
</style>