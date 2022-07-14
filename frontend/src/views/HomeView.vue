<template>
    <div>
        <Navbar />
        <div v-if="!$store.getters.user.role">
            <HeroSection @openLogin="print" />
        </div>
        <div v-if="$store.getters.user.role === 'Costumer'">
            <Deals />
        </div>
        <Footer />
    </div>
</template>

<script>
/* Router linked view */

/* Local imports */
import HeroSection from "@/components/HeroSection/HeroSection.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Deals from "@/components/Deals/Deals.vue";

export default {
    components: {
        Navbar,
        HeroSection,
        Footer,
        Deals,
    },
    methods: {
        print() {
            console.log("print");
        },
    },
};
</script>

<style lang="scss" scoped></style>
