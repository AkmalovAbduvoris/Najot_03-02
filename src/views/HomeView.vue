<script setup>
import BannerComp from '@/components/Home/Banner/BannerComp.vue';
import BrandsComp from '@/components/Home/Brands/BrandsComp.vue';
import CarouselComp from '@/components/Home/Carousel/CarouselComp.vue';
import FeaturesComp from '@/components/Home/Features/FeaturesComp.vue';
import HeroComp from '@/components/Home/HeroComp.vue';
import Slider from '@/components/Home/Slider/Slider.vue';
import InfoComp from '@/components/Home/Info/InfoComp.vue';

</script>

<template>
  <main>
    <CarouselComp />
    <Slider />
    <BannerComp />
    <BrandsComp />
    <InfoComp />
    <FeaturesComp />
    <!-- <HeroComp /> -->
  </main>
</template>
