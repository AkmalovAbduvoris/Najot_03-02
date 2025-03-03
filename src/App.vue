<script setup>
import FooterComp from './components/Footer/FooterComp.vue';
import HeaderComp from './components/Header/HeaderComp.vue';

</script>

<template>
    <HeaderComp />
    <main>
        <RouterView />
    </main>
    <FooterComp />
</template>
