<script setup>
import BannerComp from '@/components/Home/Banner/BannerComp.vue';
import BrandsComp from '@/components/Home/Brands/BrandsComp.vue';
import CarouselComp from '@/components/Home/Carousel/CarouselComp.vue';
import FeaturesComp from '@/components/Home/Features/FeaturesComp.vue';
import Slider from '@/components/Home/Slider/Slider.vue';
import InfoComp from '@/components/Home/Info/InfoComp.vue';
import PhonesComp from '@/components/Home/Phones/PhonesComp.vue';
import BestComp from '@/components/Home/Best/BestComp.vue';
import DiscountComp from '@/components/Home/Discount/DiscountComp.vue';
</script>

<template>
  <main>
    <CarouselComp />
    <Slider />
    <PhonesComp />
    <BestComp />
    <BannerComp />
    <DiscountComp />
    <BrandsComp />
    <InfoComp />
    <FeaturesComp />
  </main>
</template>
