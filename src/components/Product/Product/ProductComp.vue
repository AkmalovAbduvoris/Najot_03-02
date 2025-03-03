<script setup>
import './ProductComp.css';
import { useRoute } from "vue-router";
import { getAllProducts, updateLikeStatus } from "@/sercive/apiService";
import { ref, onMounted } from "vue";
import { formatPrice } from '@/utils/utils';

const product = ref(null);
const products = ref([]);
const route = useRoute();
const productId = String(route.params.id);

onMounted(async () => {
    products.value = await getAllProducts();
    product.value = products.value.find((item) => String(item.id) === productId);
});

const toggleLike = async () => {
    if (!product.value) return;

    const newLikeStatus = !product.value.like;

    const updatedProduct = await updateLikeStatus(product.value.id, newLikeStatus);

    if (updatedProduct) {
        product.value.like = updatedProduct.like;
    }
};
</script>

<template>
    <section class="product">
        <div class="container" v-if="product">
            <p class="product__text">Bosh sahifa > {{ product.description }}</p>
            <div class="product__wrapper">
                <div class="product__imgs">
                    <div class="product__img-inner">
                        <img :src="product.image1" :alt="product.name" width="34" height="34" />
                    </div>
                    <div class="product__img-inner">
                        <img :src="product.image2" :alt="product.name" width="34" height="34" />
                    </div>
                    <div class="product__img-inner">
                        <img :src="product.image3" :alt="product.name" width="34" height="34" />
                    </div>
                    <div class="product__img-inner">
                        <img :src="product.image4" :alt="product.name" width="34" height="34" />
                    </div>
                </div>
                <div class="product__img-main">
                    <img class="product__img-main-img" :src="product.image1" :alt="product.name" width="343"
                        height="320" />
                    <p class="product__flash">{{ product.flash }}</p>
                    <button class="product__heart-single" @click="toggleLike">
                        <img :src="product.like ? '/img/product__heart-full.svg' : '/img/product__heart.svg'"
                            alt="heart">
                    </button>
                    <button class="product__compare-single">
                        <img src="/img/product_gray.svg" alt="taqqoslash">
                    </button>
                </div>
                <div class="product__content">
                    <h2 class="single__product-title">{{ product.description }}</h2>
                    <div class="single__product-rating">
                        <div>
                            <i class="product__icon fa-solid fa-star"></i>
                            <i class="product__icon fa-solid fa-star"></i>
                            <i class="product__icon fa-solid fa-star"></i>
                            <i class="product__icon fa-solid fa-star"></i>
                            <i class="product__icon fa-solid fa-star"></i>
                        </div>
                        <p class="product__comment">0 ta sharh</p>
                        <p class="single__product-share"><i class="fa-solid fa-share"></i> Ulashish</p>
                    </div>
                    <p class="single__product-price">{{ formatPrice(product.price) }} so'm</p>
                    <ul class="single__product-list">
                        <li class="single__product-item">
                            <p>Brend:</p>
                            <span></span>
                            <p class="single__product-text">{{ product.brand }}</p>
                        </li>
                        <li class="single__product-item">
                            <p>Model:</p>
                            <span></span>
                            <p class="single__product-text">{{ product.name }}</p>
                        </li>
                        <li class="single__product-item">
                            <p>Holati:</p>
                            <span></span>
                            <p class="single__product-text">Sotuvda bor</p>
                        </li>
                    </ul>
                    <div class="single__product-btns">
                        <button class="single__product-bucket"><i class="fa-solid fa-bucket"></i>Savatchaga qo'shish</button>
                    <button class="single__product-buy">Xoziroq xarid qilish</button>
                    </div>
                    <h3 class="single__product-header">Ovoz bering:</h3>
                    <p class="single__product-rec"><i class="fa-solid fa-thumbs-up"></i> Tavsiya qilaman</p>
                </div>
                <div class="poduct__payment">
                    <h2 class="poduct__payment-title">Bo'lib to'lash</h2>
                    <div class="poduct__payment-btns">
                        <button class="poduct__payment-btn">3 oy</button>
                        <button class="poduct__payment-btn">6 oy</button>
                        <button class="poduct__payment-btn">12 oy</button>
                    </div>
                    <div class="poduct__payment-content">
                        <p class="poduct__payment-p">Smartbank hamkorining muddatli to'lovi</p>
                        <ul class="poduct__payment-list">
                            <li class="poduct__payment-item">
                                <img src="/img/SmartBank.svg" alt="img">
                                <p class="poduct__payment-price"> {{ formatPrice((product.price + (product.price / 100 * 50)) / 12) }} so'm</p>
                            </li>
                            <li class="poduct__payment-item">
                                <p>Umumiy qiymat</p>
                                <p class="poduct__payment-bold"> {{ formatPrice(product.price) }} so'm</p>
                            </li>
                        </ul>
                        <button class="poduct__payment-pay">Bo'lib to'lashga olish</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
