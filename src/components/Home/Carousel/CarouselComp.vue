<script setup>
import { ref, onMounted } from "vue";
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Pagination, Navigation } from "vue3-carousel";
import { getAllProducts } from "../../../sercive/apiService";

const products = ref([]);

onMounted(async () => {
    products.value = await getAllProducts();
});

const carouselConfig = {
    itemsToShow: 6.5,
    wrapAround: true,
    autoplay: 5000,
    snapAlign: "start",
};
</script>

<template>
    <section class="carousell">
        <div class="container">
        <h2 class="carousel__header">Saxiy ramazon</h2>
        <div class="carousel__wrapper">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="product in products" :key="product.id">
                    <router-link :to="'/product/' + product.id">
                        <div class="carousel__card">
                        <img :src="product.image1" :alt="product.name" width="122" height="125" />
                        <h3 class="carousel__title">{{ product.description }}</h3>
                        <p class="carousel__discount">{{ product.price }} so'm</p>
                        <p class="carousel__price">{{ product.price }} so'm</p>
                        <button class="carousel__btn">14.03.2025</button>
                    </div>
                    </router-link>
                </Slide>
                <template #addons>
                    <Navigation class="carusel__navigte" />
                </template>
            </Carousel>
        </div>
    </div>
    </section>
</template>

<style scoped>
.carousell {
    margin-bottom: 40px;
    padding: 12px 0;
}
.carousel__header {
    font-size: 18px;
    font-weight: 700;
    color: #0f172a;
    margin: 10px;
}
.carousel__wrapper {
    padding: 10px 0 10px 10px;
    border-radius: 10px;
    background-color: #006bff !important;
}

.carousel__card {
    text-align: center;
    width: 195px;
    background-color: white;
    padding: 10px;
    margin: 10px;
    border-radius: 5px;

}

.carousel__title {
    margin: 5px 0;
    font-size: 12px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #000;
    text-decoration: none;
    max-height: 36px;
    display: -webkit-box;
    overflow: hidden;
    text-overflow: ellipsis;
    min-height: 36px;
}
.carousel__price {
    text-align: start;
    color: #006bff;
}
.carousel__discount {
    margin: 5px 0;
    text-align: start;
    text-decoration: line-through;
}
.carousel__btn {
    margin-top: 8px;
    display: block;
    width: 100%;
    background-color: #006bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
}
:deep(.carousel__prev) {
    width: 35px;
    height: 35px;
    left: -30px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    color: #006bff;
    border: 1px solid #006bff;
}
:deep(.carousel__next) {
    width: 35px;
    height: 35px;
    right: -30px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    color: #006bff;
    border: 1px solid #006bff;
}
</style>
