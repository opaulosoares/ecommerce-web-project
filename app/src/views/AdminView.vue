<template>
    <div>
        <div class="h-screen main bg-fluffBlue-1">
            <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto">
                    <router-link to="/">
                        <div
                            class="flex items-center justify-center gap-4 pb-16"
                            @click="closeLogin"
                        >
                            <Logo color="rgb(30,16,52)" />
                            <div>
                                <Tag color="gray">Admin</Tag>
                            </div>
                        </div>
                    </router-link>

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
                                    message: 'Please input your password',
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
        </div>
    </div>
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
    Tag,
} from "ant-design-vue";

import { CloseOutlined } from "@ant-design/icons-vue";

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
        Tag,
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
    computed: {
        disabled() {
            return !(this.formState.email && this.formState.password);
        },
    },
    methods: {
        async handleSubmit() {
            /* This is a promise, so I can use the .then and .catch to fit my needs. */
            this.$store
                .dispatch("findAdminData", {
                    email: this.formState.email,
                    password: this.formState.password,
                })
                .then(() => {
                    message.success("Login successful!");
                })
                .catch((error) => {
                    message.error(error.message);
                });
        },
    },
};
</script>
