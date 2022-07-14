<template>
    <div class="flex flex-row items-center justify-center gap-2">
        <Button shape="circle" @click="increaseAmount"> + </Button>
        {{ this.amount }}
        <Button shape="circle" @click="decreaseAmount"> - </Button>
    </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
    props: {
        defaultValue: {
            type: Number,
        },
    },
    data() {
        return {
            amount: this.$props.defaultValue,
        };
    },
    methods: {
        increaseAmount() {
            this.amount++;
            this.$emit("amount-change", this.amount);
        },
        decreaseAmount() {
            this.amount--;
            this.$emit("amount-change", this.amount);
        },
    },
    components: {
        Button,
    },
};
</script>
