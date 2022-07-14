<template>
    <div class="flex flex-row items-center justify-center gap-2">
        <Button shape="circle" @click="$store.commit('addToCart', product)">
            +
        </Button>
        {{ $store.getters.cart[product.id].amount }}
        <Button
            shape="circle"
            @click="$store.commit('removeFromCart', product)"
        >
            -
        </Button>
    </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
    props: {
        product: {
            type: Object,
        },
        defaultValue: {
            type: Number,
        },
    },
    components: {
        Button,
    },
};
</script>
