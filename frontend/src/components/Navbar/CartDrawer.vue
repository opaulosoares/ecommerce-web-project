<template>
    <div>
        <Drawer
            :visible="visibleDrawer"
            title="Cart"
            placement="right"
            class="fix"
            @close="closeDrawer"
        >
            <Empty
                description="There are no products in your cart!"
                v-if="isCartEmpty"
            />
            <div class="flex flex-col gap-4">
                <Card
                    v-for="item in this.$store.getters.cart"
                    :key="item.id"
                    class="transition ease-in"
                >
                    <div class="flex items-start w-full h-full gap-4">
                        <div class="image">
                            <Avatar :size="96" :src="item.image" />
                        </div>

                        <div
                            class="flex flex-col items-start justify-between h-24"
                        >
                            <strong class="name-display">
                                {{ item.name.split(",")[0] }}
                            </strong>

                            <div
                                class="flex items-center justify-between w-full"
                            >
                                <Stepper :product="item" />
                                <Button @click="clearProductAmount(item)">
                                    <template #icon>
                                        <ClearOutlined />
                                    </template>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Card>

                <div v-if="!isCartEmpty">
                    <div class="flex justify-between w-full">
                        <h1>Subtotal</h1>
                        <div>
                            US$ {{ $store.getters.subtotalCart.toFixed(2) }}
                        </div>
                    </div>
                    <div class="flex justify-between w-full">
                        <h1>Shipping</h1>
                        <div>US$ {{ $store.getters.shipping.toFixed(2) }}</div>
                    </div>
                    <div class="flex justify-between w-full">
                        <h1>Total</h1>
                        <div>
                            US$
                            {{
                                (
                                    $store.getters.subtotalCart +
                                    $store.getters.shipping
                                ).toFixed(2)
                            }}
                        </div>
                    </div>
                </div>
            </div>
            <template #extra>
                <div class="mr-3">
                    <Button @click="checkout" :disabled="isCartEmpty">
                        Go to checkout</Button
                    >
                </div>
            </template>
        </Drawer>
    </div>
</template>

<script>
import { ref } from "vue";
import Stepper from "@/components/Stepper/CartStepper.vue";

import { ClearOutlined } from "@ant-design/icons-vue";

import {
    Drawer,
    Empty,
    Card,
    Button,
    InputNumber,
    Avatar,
} from "ant-design-vue";

export default {
    name: "CartDrawer",
    components: {
        Drawer,
        Empty,
        Card,
        Button,
        InputNumber,
        Stepper,
        Avatar,
        ClearOutlined,
    },
    setup() {
        const visibleDrawer = ref(false);

        return {
            visibleDrawer,
        };
    },
    computed: {
        subtotalCart() {
            return this.$store.getters.subtotalCart;
        },
        isCartEmpty() {
            return this.$store.getters.cartCount === 0;
        },
    },
    methods: {
        showDrawer() {
            this.visibleDrawer = true;
        },
        closeDrawer() {
            this.visibleDrawer = false;
        },
        clearProductAmount(product) {
            this.$store.commit("clearProductAmount", product);
        },
        checkout() {
            console.log(this.$store.getters.cart);
            this.$router.push("/checkout");
        },
    },
};
</script>

<style scoped>
.name-display {
    display: -webkit-box;
    max-width: 400px;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
