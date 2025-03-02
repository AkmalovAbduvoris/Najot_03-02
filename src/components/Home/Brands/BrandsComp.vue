<script setup>
import "vue3-carousel/carousel.css";
import { Carousel, Slide } from "vue3-carousel";

const images = [
    "img/acer.webp",
    "img/apple.webp",
    "img/artel.webp",
    "img/asus.webp",
    "img/bosch.webp",
    "img/hoco.webp",
    "img/hoffman.webp",
    "img/kukmara.webp",
    "img/intex.webp",
    "img/lenovo.webp",
    "img/nokia.webp",
    "img/philps.webp",
    "img/samsung.webp",
    "img/sony.webp",
    "img/xiomi.webp",
];
const carouselConfig = {
    itemsToShow: 6.5,
    wrapAround: true,
    autoplay: 4000,
};
</script>

<template>
    <section class="brand">
        <div class="container">
            <div class="brand__wrapper">
                <Carousel v-bind="carouselConfig">
                    <Slide v-for="img in images" :key="img">
                        <div class="brand__item">
                            <img class="brand__img" :src="img" width="85" :alt="img" />
                        </div>
                    </Slide>
                </Carousel>
            </div>
        </div>
    </section>
</template>

<style scoped>
.brand {
    padding: 50px 0;
}
.brand__item {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    padding: 10px 20px;
    width: 185px;
    border-radius: 10px;
    height: 110px;
}

.brand__item img {
    object-fit: contain;
}
</style>
