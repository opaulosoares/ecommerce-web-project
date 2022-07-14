<template>
    <div>
        <footer class="text-fluffBlue-12 bg-fluffRed-5">
            <div class="w-full px-16 py-16 mx-auto max-w-screen-2xl">
                <div
                    class="flex flex-col items-stretch justify-between md:flex-row"
                >
                    <div
                        class="flex flex-col items-start justify-start text-left"
                    >
                        <h4 class="text-fluffBlue-12">SUPPORT</h4>
                        <p>support@fluffshop.usp.br</p>
                        <p>
                            Av. Trab. São Carlense, 400 - Centro, São Carlos -
                            SP, 13566-590
                        </p>
                        <Logo class="w-36" color="rgb(30,16,52)" />
                    </div>

                    <div
                        class="flex flex-row items-start justify-between w-full text-left md:justify-around"
                    >
                        <div>
                            <p class="font-medium">Products</p>

                            <nav class="flex flex-col mt-4">
                                <router-link
                                    class="link"
                                    to="/products/foods"
                                    @click="scrollToTop(), (isMenuOpen = false)"
                                >
                                    <p>Foods</p>
                                </router-link>
                                <router-link
                                    class="link"
                                    to="/products/treats"
                                    @click="scrollToTop(), (isMenuOpen = false)"
                                >
                                    <p>Treats</p>
                                </router-link>
                                <router-link
                                    class="link"
                                    to="/products/supplies"
                                    @click="scrollToTop(), (isMenuOpen = false)"
                                >
                                    <p>Supplies</p>
                                </router-link>
                            </nav>
                        </div>

                        <div>
                            <p class="font-medium">Institutional</p>

                            <nav
                                class="flex flex-col mt-4 text-sm text-gray-500"
                            >
                                <router-link
                                    class="link"
                                    to="/about"
                                    @click="isMenuOpen = false"
                                >
                                    <p>About</p>
                                </router-link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue";

export default {
    name: "Footer",
    components: {
        Logo,
    },
    methods: {
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        },
    },
};
</script>

<style scoped>
.link.active {
    @apply font-bold;
}
</style>
