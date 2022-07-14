<template>
    <div>
        <section
            class="flex items-center h-screen p-16 text-fluffBlue-1 bg-fluffBlue-12"
        >
            <div
                class="container flex flex-col items-center justify-center gap-8 px-5 mx-auto my-8"
            >
                <div
                    class="flex flex-col items-center justify-center max-w-md gap-8 text-center"
                >
                    <Logo />
                    <FrownOutlined class="text-9xl" />
                    <p class="text-2xl font-semibold md:text-3xl">
                        Sorry, we couldn't find this page.
                    </p>
                    <p class="mt-4 mb-8 dark:text-gray-400">
                        But don't worry, you can find plenty of other things on
                        our homepage.
                    </p>
                    <router-link to="/" @click="scrollToTop()">
                        <Button type="primary" size="large">
                            Go back to the homepage
                        </Button>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import { FrownOutlined } from "@ant-design/icons-vue";
import { Button } from "ant-design-vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Logo from "@/components/Logo/Logo.vue";

export default {
    components: {
        FrownOutlined,
        Button,
        Navbar,
        Logo,
    },
};
</script>
