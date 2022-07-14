<template>
    <header class="sticky top-0 z-50 w-full">
        <div
            class="flex items-center w-full shadow-md bg-fluffBlue-12 md:max-h-24"
        >
            <div
                class="container justify-between w-full px-6 py-2 mx-auto md:flex md:items-center md:px-16"
            >
                <div class="flex items-center justify-between w-full">
                    <router-link to="/">
                        <div
                            class="flex flex-row items-center justify-between w-full gap-4"
                        >
                            <Logo class="w-36" />

                            <Tag
                                color="purple"
                                v-if="$store.getters.user.role === 'Costumer'"
                            >
                                {{ $store.getters.user.role }}
                            </Tag>
                        </div>
                    </router-link>

                    <!-- Mobile menu button -->
                    <div class="flex md:hidden">
                        <Button
                            type="primary"
                            shape="circle"
                            @click="toggleMenu"
                        >
                            <template #icon>
                                <MenuOutlined v-if="!isMenuOpen" />
                                <CloseOutlined v-else />
                            </template>
                        </Button>
                    </div>
                </div>

                <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                <nav
                    :class="isMenuOpen ? 'block' : 'hidden'"
                    class="items-center px-2 pb-4 md:flex md:p-0"
                >
                    <div
                        class="flex flex-col my-4 md:flex-row md:mx-6"
                        id="nav-links"
                    >
                        <router-link
                            class="link"
                            :to="{
                                name: 'products',
                                params: { category: 'foods' },
                            }"
                            @click="isMenuOpen = false"
                        >
                            <p>Foods</p>
                        </router-link>
                        <router-link
                            class="link"
                            :to="{
                                name: 'products',
                                params: { category: 'treats' },
                            }"
                            @click="isMenuOpen = false"
                        >
                            <p>Treats</p>
                        </router-link>
                        <router-link
                            class="link"
                            :to="{
                                name: 'products',
                                params: { category: 'supplies' },
                            }"
                            @click="isMenuOpen = false"
                        >
                            <p>Supplies</p>
                        </router-link>
                    </div>

                    <div
                        class="flex flex-row items-center justify-between w-full gap-4 md:flex-row"
                    >
                        <div class="flex flex-row">
                            <Badge
                                class="my-1 text-sm font-medium transition-colors duration-200 transform cursor-pointer md:mx-4 md:my-0"
                                :count="this.$store.getters.cartCount"
                                show-zero
                            >
                                <ShoppingCartOutlined
                                    class="text-2xl cart"
                                    @click="showDrawer"
                                />
                            </Badge>
                        </div>

                        <div
                            class="flex justify-center md:block"
                            v-if="this.$store.state.isLoggedIn"
                        >
                            <div
                                class="flex gap-6 my-1 text-sm font-medium text-white transition-colors duration-200 transform cursor-pointer md:mx-4 md:my-0"
                            >
                                <!--  -->
                                <router-link
                                    to="/account"
                                    class="flex items-center justify-center gap-2"
                                    v-if="
                                        $store.getters.user.role === 'Costumer'
                                    "
                                >
                                    {{ userFirstName }}
                                </router-link>
                                <Button type="primary" @click="handleLogout">
                                    <template #icon>
                                        <LogoutOutlined />
                                    </template>
                                </Button>
                            </div>
                        </div>
                        <div class="flex justify-center md:block" v-else>
                            <div
                                class="flex items-center justify-center gap-6 my-1 text-sm font-medium text-white transition-colors duration-200 transform md:mx-4 md:my-0"
                            >
                                <Button type="primary" @click="showLogin">
                                    Login
                                </Button>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </header>

    <CartDrawer ref="cartDrawer" />
    <LoginModal ref="loginModal" />
</template>

<script>
import { ref } from "vue";
import { Button, Badge, Avatar, Popover, Tag, message } from "ant-design-vue";
import CartDrawer from "./CartDrawer.vue";
import LoginModal from "./LoginModal.vue";

import {
    ShoppingCartOutlined,
    MenuOutlined,
    CloseOutlined,
    UserOutlined,
    LogoutOutlined,
} from "@ant-design/icons-vue";

import Logo from "@/components/Logo/Logo.vue";

export default {
    name: "Navbar",
    components: {
        Logo,
        Badge,
        Button,
        Avatar,
        CartDrawer,
        LoginModal,
        Popover,
        Tag,
        LogoutOutlined,
        UserOutlined,
        MenuOutlined,
        CloseOutlined,
        ShoppingCartOutlined,
    },
    props: {
        openLogin: {
            type: Boolean,
            default: false,
        },
        openRegister: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        userFirstName() {
            return this.$store.getters.user.name.split(" ")[0];
        },
    },
    setup() {
        const visibleDrawer = ref(false);

        return {
            visibleDrawer,
        };
    },
    data() {
        return {
            isMenuOpen: false,
            visibleLogin: false,
        };
    },
    methods: {
        handleLogout() {
            this.$store.commit("logoutUser");
            message.success("Logged out successfully");
        },
        showDrawer() {
            this.$refs.cartDrawer.showDrawer();
        },
        showLogin() {
            this.$refs.loginModal.showLogin();
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style lang="scss" scoped>
.cart {
    color: white !important;

    &:hover {
        color: rgb(24, 144, 255) !important;
    }
}
.link {
    @apply text-white;
}

.link p {
    @apply my-1 text-sm font-medium transition-colors duration-200 transform hover:text-blue-500 md:mx-4 md:my-0;
}

.link.active {
    @apply font-bold text-fluffBlue-4;
}
</style>
