<template>
    <Card v-for="item in this.$store.getters.cart" :key="item.id">
        <div class="flex items-start w-full h-full gap-16">
            <div class="image">
                <Avatar :size="128" :src="item.image" />
            </div>

            <div class="flex flex-col items-start justify-between w-full h-32">
                <div class="flex items-center gap-2">
                    <strong class="name-display">
                        {{ item.name.split(",")[0] }}
                    </strong>
                </div>

                <div class="flex flex-row items-center w-1/2 h-full">
                    <h1>Unit Price: US${{ item.price.toFixed(2) }}</h1>
                </div>

                <div class="flex items-center justify-between w-full gap-2">
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
</template>

<script>
import {
    PageHeader,
    Table,
    TableColumn,
    TableColumnGroup,
    Card,
    Button,
    Avatar,
    Empty,
} from "ant-design-vue";

import { ClearOutlined } from "@ant-design/icons-vue";

import Stepper from "@/components/Stepper/CartStepper.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
    components: {
        Navbar,
        Footer,
        Table,
        TableColumn,
        TableColumnGroup,
        PageHeader,
        Card,
        Stepper,
        Button,
        Avatar,
        Empty,
        ClearOutlined,
    },
};
</script>
