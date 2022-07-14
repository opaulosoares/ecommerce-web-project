<template>
    <Navbar />
    <div class="w-full mx-auto max-w-screen-2xl">
        <Spin :spinning="loading">
            <PageHeader
                :title="`Go back to main section`"
                @back="this.$router.back"
            >
                <div
                    class="flex flex-row flex-wrap justify-between w-full max-w-screen-xl p-16 mx-auto rounded-lg bg-fluffBlue-2"
                >
                    <img
                        :src="this.product.image"
                        alt=""
                        class="flex items-center justify-center object-cover w-full rounded-2xl md:w-1/4"
                        v-if="this.product"
                    />

                    <div
                        class="flex flex-col justify-between"
                        v-if="this.product"
                    >
                        <div class="py-16 xl:py-0">
                            <h1>
                                {{ this.product.name.split(",")[0] }}
                            </h1>
                            <p class="max-w-screen-md">
                                {{ this.product.description }}
                            </p>
                            <p class="text-xl font-bold">
                                US${{ this.product.price }}
                            </p>
                        </div>

                        <div class="flex w-1/2 gap-4">
                            <Stepper
                                @amount-change="modifyAmount"
                                :default-value="1"
                            />
                            <Button
                                type="primary"
                                size="large"
                                @click="sendOrderToCart"
                            >
                                <ShoppingCartOutlined />
                                Add to cart
                            </Button>
                        </div>
                    </div>
                </div>
            </PageHeader>
        </Spin>
    </div>
</template>

<script>
import { ShoppingCartOutlined } from "@ant-design/icons-vue";
import { Spin, PageHeader, Tag, Button } from "ant-design-vue";

import Navbar from "@/components/Navbar/Navbar.vue";
import Stepper from "@/components/Stepper/Stepper.vue";

export default {
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    components: {
        Spin,
        PageHeader,
        Tag,
        Button,
        Navbar,
        Stepper,
        ShoppingCartOutlined,
    },
    created() {
        this.$store
            .dispatch("fetchProducts")
            .then(() => (this.loading = false));
    },
    data() {
        return {
            loading: true,
            amount: 1,
        };
    },
    computed: {
        product() {
            return this.$store.getters.products[this.id];
        },
        title() {
            return this.product.category;
        },
    },
    methods: {
        modifyAmount(value) {
            this.amount = value;
        },
        sendOrderToCart() {
            for (let i = 0; i < this.amount; i++) {
                this.$store.commit("addToCart", this.product);
            }
        },
    },
};
</script>
