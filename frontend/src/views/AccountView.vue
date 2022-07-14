<template>
    <div>
        <Navbar />
        <div class="mx-auto max-w-screen-2xl" id="main-container">
            <PageHeader>
                <div class="flex flex-col">
                    <h1 class="text-2xl">
                        Hello
                        <strong>
                            {{ $store.getters.user.name }}
                        </strong>
                        , welcome back!
                    </h1>
                    In this page you can see all your information and edit if
                    needed!
                </div>

                <div class="w-full h-full">
                    <div class="mt-4">
                        <Form>
                            <div class="flex items-center gap-4 pt-8 pb-2">
                                <p class="text-lg font-medium">Personal</p>
                                <p class="text-gray-400">
                                    Always keep your phone updated so we can
                                    contact you if any delay happens to your
                                    order.
                                </p>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem name="name" class="w-full">
                                    <p class="flex text-zinc-400">Name</p>
                                    <Input
                                        v-model:value="formState.name"
                                        type="text"
                                        :placeholder="$store.getters.user.name"
                                    />
                                </FormItem>

                                <FormItem name="phone" class="w-full">
                                    <p class="flex text-zinc-400">Phone</p>
                                    <Input
                                        v-model:value="formState.phone"
                                        type="phone"
                                        :placeholder="$store.getters.user.phone"
                                    />
                                </FormItem>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem name="email" class="w-full">
                                    <p class="flex text-zinc-400">Email</p>
                                    <Input
                                        v-model:value="formState.email"
                                        type="email"
                                        :placeholder="$store.getters.user.email"
                                    />
                                </FormItem>
                                <FormItem name="password" class="w-full">
                                    <p class="flex text-zinc-400">Password</p>
                                    <InputPassword
                                        v-model:value="formState.password"
                                        placeholder="Password"
                                    />
                                </FormItem>
                            </div>

                            <div class="flex items-center gap-4 pt-4 pb-2">
                                <p class="text-lg font-medium">Address</p>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem name="city" class="w-full">
                                    <p class="flex text-zinc-400">City</p>
                                    <Input
                                        v-model:value="formState.city"
                                        type="phone"
                                        :placeholder="$store.getters.user.city"
                                    />
                                </FormItem>
                                <FormItem name="state" class="w-full">
                                    <p class="flex text-zinc-400">State</p>
                                    <!-- Select with all states in USA -->
                                    <Select
                                        v-model:value="formState.state"
                                        :options="states"
                                        :placeholder="$store.getters.user.state"
                                    />
                                </FormItem>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem name="address" class="w-full">
                                    <p class="flex text-zinc-400">Address</p>
                                    <Input
                                        v-model:value="formState.address"
                                        type="phone"
                                        :placeholder="
                                            $store.getters.user.address
                                        "
                                    />
                                </FormItem>
                                <FormItem name="zip" class="w-full">
                                    <p class="flex text-zinc-400">ZIP Code</p>
                                    <Input
                                        v-model:value="formState.zip"
                                        type="phone"
                                        :placeholder="$store.getters.user.zip"
                                    />
                                </FormItem>
                            </div>

                            <div class="flex items-center gap-4 pt-4 pb-2">
                                <p class="text-lg font-medium">Payment</p>
                                <p class="text-gray-400">
                                    Currently we only work with credit card
                                    payment, for now, fill in your credit card
                                    data.
                                </p>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem name="card" class="w-full">
                                    <p class="flex text-zinc-400">Number</p>
                                    <Input
                                        v-model:value="formState.cardNumber"
                                        type="phone"
                                        :placeholder="
                                            $store.getters.user.cardNumber
                                        "
                                    />
                                </FormItem>
                                <FormItem name="exp" class="w-full">
                                    <p class="flex text-zinc-400">Expiration</p>
                                    <Input
                                        v-model:value="formState.cardExp"
                                        type="month"
                                        :placeholder="
                                            $store.getters.user.cardExp
                                        "
                                    />
                                </FormItem>
                                <FormItem name="cvv" class="w-full">
                                    <p class="flex text-zinc-400">CVV</p>
                                    <Input
                                        v-model:value="formState.cardCVV"
                                        type="number"
                                        :placeholder="
                                            $store.getters.user.cardCVV
                                        "
                                    />
                                </FormItem>
                            </div>
                        </Form>
                    </div>
                </div>

                <div class="flex gap-4">
                    <Button type="primary" @click="handleEdit">
                        Edit your account
                    </Button>
                </div>
            </PageHeader>
        </div>
        <Footer />
    </div>
</template>

<script>
import { reactive } from "vue";

import {
    PageHeader,
    Form,
    FormItem,
    Input,
    Button,
    InputPassword,
    Select,
    message,
} from "ant-design-vue";

import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";

export default {
    components: {
        Navbar,
        PageHeader,
        Form,
        FormItem,
        Input,
        Button,
        InputPassword,
        Select,
        Footer,
    },
    setup() {
        const formState = reactive({
            name: "",
            password: "",
            email: "",
            address: "",
            phone: "",
            zip: "",
            cardNumber: "",
            cardExp: "",
            cardCVV: "",
        });

        return {
            formState,
            states: [
                {
                    value: "AL",
                    label: "Alabama",
                },
                {
                    value: "AK",
                    label: "Alaska",
                },
                {
                    value: "AZ",
                    label: "Arizona",
                },
                {
                    value: "AR",
                    label: "Arkansas",
                },
                {
                    value: "CA",
                    label: "California",
                },
                {
                    value: "CO",
                    label: "Colorado",
                },
                {
                    value: "CT",
                    label: "Connecticut",
                },
                {
                    value: "DE",
                    label: "Delaware",
                },
                {
                    value: "DC",
                    label: "District of Columbia",
                },
                {
                    value: "FL",
                    label: "Florida",
                },
                {
                    value: "GA",
                    label: "Georgia",
                },
                {
                    value: "HI",
                    label: "Hawaii",
                },
                {
                    value: "ID",
                    label: "Idaho",
                },
                {
                    value: "IL",
                    label: "Illinois",
                },
                {
                    value: "IN",
                    label: "Indiana",
                },
                {
                    value: "IA",
                    label: "Iowa",
                },
                {
                    value: "KS",
                    label: "Kansas",
                },
                {
                    value: "KY",
                    label: "Kentucky",
                },
                {
                    value: "LA",
                    label: "Louisiana",
                },
                {
                    value: "ME",
                    label: "Maine",
                },
                {
                    value: "MD",
                    label: "Maryland",
                },
                {
                    value: "MA",
                    label: "Massachusetts",
                },
                {
                    value: "MI",
                    label: "Michigan",
                },
                {
                    value: "MN",
                    label: "Minnesota",
                },
                {
                    value: "MS",
                    label: "Mississippi",
                },
                {
                    value: "MO",
                    label: "Missouri",
                },
                {
                    value: "MT",
                    label: "Montana",
                },
                {
                    value: "NE",
                    label: "Nebraska",
                },
                {
                    value: "NV",
                    label: "Nevada",
                },
                {
                    value: "NH",
                    label: "New Hampshire",
                },
                {
                    value: "NJ",
                    label: "New Jersey",
                },
                {
                    value: "NM",
                    label: "New Mexico",
                },
                {
                    value: "NY",
                    label: "New York",
                },
                {
                    value: "NC",
                    label: "North Carolina",
                },
                {
                    value: "ND",
                    label: "North Dakota",
                },
                {
                    value: "OH",
                    label: "Ohio",
                },
                {
                    value: "OK",
                    label: "Oklahoma",
                },
                {
                    value: "OR",
                    label: "Oregon",
                },
                {
                    value: "PA",
                    label: "Pennsylvania",
                },
                {
                    value: "RI",
                    label: "Rhode Island",
                },
                {
                    value: "SC",
                    label: "South Carolina",
                },
                {
                    value: "SD",
                    label: "South Dakota",
                },
                {
                    value: "TN",
                    label: "Tennessee",
                },
                {
                    value: "TX",
                    label: "Texas",
                },
                {
                    value: "UT",
                    label: "Utah",
                },
                {
                    value: "VT",
                    label: "Vermont",
                },
                {
                    value: "VA",
                    label: "Virginia",
                },
                {
                    value: "WA",
                    label: "Washington",
                },
            ],
        };
    },
    methods: {
        handleEdit() {
            this.$store.commit("editUser", this.formState);
        },
        logoutUser() {
            this.$store.commit("logoutUser");
            message.success("Logged out successfully.");
        },
    },
};
</script>

<style lang="scss" scoped></style>
