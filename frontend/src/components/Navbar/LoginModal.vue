<template>
    <Modal
        :visible="visibleModal"
        cancel-text=" "
        ok-text=" "
        :closable="false"
        centered
        class="fixed top-0 max-h-[95%] h-full"
    >
        <div>
            <div class="flex justify-end">
                <CloseOutlined
                    class="cursor-pointer hover:text-fluffBlue-5"
                    @click="closeLogin"
                />
            </div>
            <div class="main" v-if="!openRegister">
                <PageHeader title="Login">
                    <div
                        class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8"
                    >
                        <div class="max-w-lg mx-auto">
                            <router-link to="/">
                                <div
                                    class="flex justify-center pb-16"
                                    @click="closeLogin"
                                >
                                    <Logo color="rgb(30,16,52)" />
                                </div>
                            </router-link>

                            <p
                                class="max-w-xl mx-auto mt-4 text-center text-gray-500"
                            >
                                To make sure you have the most up to date
                                product catalog and service quality, please
                                login to your account or
                                <span>sign up for a new account</span>.
                            </p>

                            <Form
                                :model="formState"
                                :name="'login'"
                                autocomplete="off"
                                :rules="[
                                    {
                                        required: true,
                                        message: 'Please input your email',
                                    },
                                ]"
                            >
                                <FormItem name="email">
                                    <p class="flex text-zinc-400">Email</p>
                                    <Input
                                        v-model:value="formState.email"
                                        type="email"
                                        placeholder="Email"
                                        default-value="john@email.com"
                                        size="large"
                                    />
                                </FormItem>
                                <FormItem
                                    name="password"
                                    :rules="[
                                        {
                                            required: true,
                                            message:
                                                'Please input your password',
                                        },
                                    ]"
                                >
                                    <p class="flex text-zinc-400">Password</p>
                                    <InputPassword
                                        v-model:value="formState.password"
                                        placeholder="Password"
                                        size="large"
                                    />
                                </FormItem>

                                <div class="flex">
                                    <router-link to="/register" class="pb-6">
                                        Don't have an account? Register for
                                        free!
                                    </router-link>
                                </div>
                                <FormItem>
                                    <Button
                                        type="primary"
                                        size="large"
                                        html-type="submit"
                                        block
                                        @submit="handleSubmit"
                                        @click="handleSubmit"
                                        :disabled="disabled"
                                    >
                                        Login
                                    </Button>
                                </FormItem>
                            </Form>
                        </div>
                    </div>
                </PageHeader>
            </div>
            <div v-else>
                <PageHeader title="Register" @back="toggleRegister">
                    <p class="max-w-xl mx-auto mt-4 text-center text-gray-500">
                        To make sure you have the most up to date product
                        catalog and service quality, please login to your
                        account or
                        <span>sign up for a new account</span>.
                    </p>
                </PageHeader>
            </div>
        </div>
    </Modal>
</template>

<script>
import { reactive } from "vue";
import { message } from "ant-design-vue";
import Logo from "@/components/Logo/Logo.vue";
import {
    Button,
    Form,
    FormItem,
    Input,
    InputPassword,
    Modal,
    PageHeader,
} from "ant-design-vue";

import { CloseOutlined } from "@ant-design/icons-vue";

import store from "@/store/";

export default {
    name: "LoginModal",
    components: {
        Logo,
        Button,
        Form,
        FormItem,
        Input,
        InputPassword,
        Modal,
        PageHeader,
        CloseOutlined,
    },
    props: {
        mode: {
            type: String,
            default: "login",
        },
    },
    setup() {
        const formState = reactive({
            email: "",
            password: "",
            remember: true,
        });

        return {
            formState,
        };
    },
    data() {
        return {
            store,
            openRegister: this.$props.mode === "login" ? false : true,
            visibleModal: false,
        };
    },
    computed: {
        disabled() {
            return !(this.formState.email && this.formState.password);
        },
    },
    methods: {
        showLogin() {
            this.visibleModal = true;
        },
        closeLogin() {
            this.visibleModal = false;

            /* Delay so, during the transition time, the process of return to Login screen isn't shown. */
            setTimeout(() => {
                this.openRegister = false;
            }, 300);
        },
        async handleSubmit() {
            /* This is a promise, so I can use the .then and .catch to fit my needs. */
            this.$store
                .dispatch("findUserData", {
                    email: this.formState.email,
                    password: this.formState.password,
                })
                .then(() => {
                    message.success("Login successful!");
                    this.closeLogin();
                })
                .catch((error) => {
                    message.error(error.message);
                });
        },
        toggleRegister() {
            this.openRegister = !this.openRegister;
        },
    },
};
</script>
