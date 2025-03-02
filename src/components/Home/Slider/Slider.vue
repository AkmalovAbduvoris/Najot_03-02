<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";

const images = [
    "img/slider1.webp",
    "img/slider2.webp",
    "img/slider3.webp",
    "img/slider4.webp",
    "img/slider5.webp",
    "img/slider6.webp",
    "img/slider7.webp",
    "img/slider8.webp",
];
const carouselConfig = {
    itemsToShow: 4,
    wrapAround: true,
    autoplay: 4000,
    snapAlign: "start",
};
</script>

<template>
    <section class="slider">
        <div class="container">
        <div class="slider__wrapper">
            <Carousel v-bind="carouselConfig">
                <Slide v-for="img in images" :key="img">
                        <img class="slider__img" :src="img" :alt="img" width="328" height="172" />
                </Slide>
                <template #addons>
                    <Navigation/>
                </template>
            </Carousel>
        </div>
    </div>
    </section>
</template>

<style scoped>
.slider {
    margin-bottom: 40px;
}
.slider__img {
    border-radius: 10px;
}
:deep(.carousel__prev) {
    width: 35px;
    height: 35px;
    left: -20px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    color: #006bff;
    border: 1px solid #006bff;
}
:deep(.carousel__next) {
    width: 35px;
    height: 35px;
    right: -20px;
    position: absolute;
    border-radius: 50%;
    background-color: white;
    color: #006bff;
    border: 1px solid #006bff;
}
</style>