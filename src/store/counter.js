import { defineStore } from 'pinia';
import { ref, onMounted, computed } from 'vue';
import { getAllProducts, updateLikeStatus } from '../sercive/apiService';

export const useProductStore = defineStore('product', () => {
    const products = ref([]);

    const fetchProducts = async () => {
        products.value = await getAllProducts();
    };

    const toggleLike = async (productId) => {
        const product = products.value.find(item => item.id === productId);
        if (!product) return;

        const newLikeStatus = !product.like;
        const updatedProduct = await updateLikeStatus(productId, newLikeStatus);

        if (updatedProduct) {
            product.like = updatedProduct.like;
        }
    };

    const likedCount = computed(() => {
        return products.value.filter(product => product.like).length;
    });

    const likedProducts = computed(() => {
        return products.value.filter(product => product.like);
    });
    const increaseCount = (productId) => {
        const product = products.value.find(item => item.id === productId);
        if (product) {
            product.count = (product.count || 0) + 1;
        }
    };

    const countedProductsLength = computed(() => {
        return products.value.filter(product => product.count > 0).length;
    });

    const countedProducts = computed(() => {
        return products.value.filter(product => product.count > 0);
    });

    onMounted(() => {
        fetchProducts();
    });

    return { products, fetchProducts, toggleLike, likedCount, likedProducts, increaseCount, countedProductsLength, countedProducts };
});
