<template>
    <div>
        <Navbar />
        <div class="mx-auto max-w-screen-2xl" id="main-container">
            <PageHeader title="Register">
                <div class="w-full h-full">
                    <div>
                        <Form :model="formState">
                            <div class="flex flex-col items-start">
                                <p class="text-lg font-medium">Personal</p>
                                <p class="text-gray-400">
                                    Always keep your phone updated so we can
                                    contact you if any delay happens to your
                                    order.
                                </p>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem
                                    name="name"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message: 'Please input your name',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Name</p>
                                    <Input
                                        v-model:value="formState.name"
                                        type="text"
                                        placeholder="Insert your full name"
                                    />
                                </FormItem>

                                <FormItem
                                    name="phone"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your phone number',
                                        },
                                        {
                                            pattern: /^[0-9]{10}$/,
                                            message:
                                                'Please input a valid phone number (10 digits)',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Phone</p>
                                    <Input
                                        v-model:value="formState.phone"
                                        type="phone"
                                        placeholder="Insert your phone number"
                                    />
                                </FormItem>
                            </div>

                            <div class="block md:flex md:gap-4">
                                <FormItem
                                    name="email"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message: 'Please input your email',
                                        },
                                        {
                                            type: 'email',
                                            message:
                                                'Please input a valid email',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Email</p>
                                    <Input
                                        v-model:value="formState.email"
                                        type="email"
                                        placeholder="Insert your email"
                                    />
                                </FormItem>
                                <FormItem
                                    name="password"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password!',
                                        },
                                        {
                                            min: 6,
                                            message:
                                                'Password must be at least 6 characters',
                                        },
                                        {
                                            max: 20,
                                            message:
                                                'Password must be less than 20 characters',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Password</p>
                                    <InputPassword
                                        v-model:value="formState.password"
                                        placeholder="Insert your password"
                                    />
                                </FormItem>
                            </div>

                            <div class="flex items-center gap-4 pt-4 pb-2">
                                <p class="text-lg font-medium">Address</p>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem
                                    name="city"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message: 'Please input your city!',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">City</p>
                                    <Input
                                        v-model:value="formState.city"
                                        type="phone"
                                        placeholder="Insert your city"
                                    />
                                </FormItem>
                                <FormItem
                                    name="state"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message: 'Please input your state!',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">State</p>
                                    <Select
                                        v-model:value="formState.state"
                                        :options="states"
                                        placeholder="Select your state"
                                    />
                                </FormItem>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem
                                    name="address"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your address!',
                                        },
                                        {
                                            min: 6,
                                            message:
                                                'Address must be at least 6 characters',
                                        },
                                        {
                                            max: 20,
                                            message:
                                                'Address must be less than 20 characters',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Address</p>
                                    <Input
                                        v-model:value="formState.address"
                                        type="phone"
                                        placeholder="Insert your address"
                                    />
                                </FormItem>
                                <FormItem
                                    name="zip"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your zip code!',
                                        },
                                        {
                                            min: 5,
                                            message:
                                                'Zip code must be at least 5 characters',
                                        },
                                        {
                                            max: 5,
                                            message:
                                                'Zip code must be less than 5 characters',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">ZIP Code</p>
                                    <Input
                                        v-model:value="formState.zip"
                                        type="phone"
                                        placeholder="Insert your ZIP Code"
                                    />
                                </FormItem>
                            </div>

                            <div class="flex flex-col items-start">
                                <p class="text-lg font-medium">Payment</p>
                                <p class="text-gray-400">
                                    Currently we only work with credit card
                                    payment, for now, fill in your credit card
                                    data.
                                </p>
                            </div>
                            <div class="block md:flex md:gap-4">
                                <FormItem
                                    name="cardNumber"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your card number!',
                                        },
                                        {
                                            min: 16,
                                            message:
                                                'Card number must be at least 16 characters',
                                        },
                                        {
                                            max: 16,
                                            message:
                                                'Card number must be less than 16 characters',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Number</p>
                                    <InputPassword
                                        v-model:value="formState.cardNumber"
                                        placeholder="Insert your card number"
                                    />
                                </FormItem>
                                <FormItem
                                    name="cardExp"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your expiration date!',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Expiration</p>
                                    <Input
                                        v-model:value="formState.cardExp"
                                        type="month"
                                        placeholder="Insert your card expiration"
                                    />
                                </FormItem>
                                <FormItem
                                    name="cardCVV"
                                    class="w-full"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password!',
                                        },
                                        {
                                            min: 3,
                                            message:
                                                'CVV must be at least 3 characters',
                                        },
                                        {
                                            max: 3,
                                            message:
                                                'CVV must be less than 3 characters',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">CVV</p>
                                    <InputPassword
                                        v-model:value="formState.cardCVV"
                                        placeholder="Insert your password"
                                    />
                                </FormItem>
                            </div>
                            <FormItem>
                                <Button
                                    type="primary"
                                    html-type="submit"
                                    @click="sendRegister"
                                >
                                    Register
                                </Button>
                            </FormItem>
                        </Form>
                    </div>
                </div>

                <div class="flex gap-4"></div>
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
        sendRegister() {
            this.$store.dispatch("registerUser", this.formState).then(() => {
                message.success("Register success");
            });
        },
    },
};
</script>

<style lang="scss" scoped></style>
