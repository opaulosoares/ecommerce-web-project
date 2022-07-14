<template>
    <div>
        <section class="pt-20 bg-fluffBlue-1 text-fluffBlue-12">
            <div
                class="container flex flex-col items-center px-4 py-16 mx-auto text-center md:py-32 md:px-10 lg:px-32 xl:max-w-4xl"
            >
                <h1 class="text-4xl font-bold leading-none sm:text-5xl">
                    Get a treat for your pet and
                    <span class="text-fluffBlue-5">your pockets</span>!
                </h1>
                <p class="px-8 mt-8 mb-12 text-lg">
                    Join us to get the best deals on
                    <router-link to="/products/foods">Foods</router-link>,
                    <router-link to="/products/treats">Treats</router-link> and
                    <router-link to="/products/supplies">Supplies</router-link>
                    for your pet!
                </p>
                <div
                    class="flex flex-col items-center justify-center gap-4 md:flex-row"
                >
                    <router-link to="/register">
                        <Button type="primary" size="large" block
                            >Join our club for free today!</Button
                        >
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { Button } from "ant-design-vue";
export default {
    name: "HeroSection",
    components: {
        Button,
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
