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
</style>