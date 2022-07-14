<template>
    <div
        class="flex flex-col items-center justify-between p-4 bg-white border rounded shadow hover:shadow-md"
    >
        <router-link :to="{ name: 'product', params: { id: productId } }">
            <div>
                <img
                    :src="image"
                    alt=""
                    class="object-cover w-screen rounded h-72"
                />
                <div class="my-4">
                    <Tag color="gray"> {{ category.toUpperCase() }}</Tag>
                    <Tag color="blue"> {{ subcategory.toUpperCase() }}</Tag>
                    <Tag color="pink"> {{ specie.toUpperCase() }}</Tag>
                </div>
                <div class="flex flex-col justify-between h-24">
                    <h1 class="name-display">{{ name.toUpperCase() }}</h1>
                    <p>US$ {{ price }}.00</p>
                </div>
            </div>
        </router-link>
        <div class="flex w-full my-2">
            <Button type="primary" size="large" @click="info" block>
                <ShoppingCartOutlined />
                Add to cart
            </Button>
        </div>
    </div>
</template>

<script>
import { Button, Tag, message } from "ant-design-vue";
import { ShoppingCartOutlined } from "@ant-design/icons-vue";

export default {
    name: "ProductCard",
    props: {
        name: {
            type: String,
            required: true,
        },
        price: {
            type: undefined,
            required: true,
        },
        image: {
            type: String,
        },
        description: {
            type: String,
        },
        productId: {
            type: Number,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        subcategory: {
            type: String,
            required: true,
        },
        specie: {
            type: String,
            required: true,
        },
    },
    methods: {
        info() {
            message.success({
                content: () => "Product added to cart",
            });

            this.$emit("addedToCart");
        },
    },
    components: {
        Button,
        Tag,
        ShoppingCartOutlined,
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
