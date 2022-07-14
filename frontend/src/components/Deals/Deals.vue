<template>
    <div class="min-h-screen mx-auto max-w-screen-2xl" id="main-container">
        <PageHeader title="Best Deals">
            <p>The best deals from fluffshop.</p>

            <Spin
                :spinning="loading"
                tip="Selecting the best deals for you"
                size="large"
            >
                <div class="w-full pb-16 rounded" id="display">
                    <div>
                        <div class="container mx-auto">
                            <div class="lg:flex lg:-mx-2">
                                <div class="mt lg:mt-0 lg:px-2">
                                    <div
                                        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                    >
                                        <!-- Product list rendering -->
                                        <ProductCard
                                            v-for="product in sortedProducts"
                                            :key="product.id"
                                            :name="product.name"
                                            :price="product.price"
                                            :image="product.image"
                                            :productId="product.id"
                                            :category="product.category"
                                            :subcategory="product.subcategory"
                                            :specie="product.petSpecie"
                                            @addedToCart="
                                                $store.commit(
                                                    'addToCart',
                                                    product
                                                )
                                            "
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Spin>
        </PageHeader>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

/* Ant Design imports */
import { PageHeader, Select, Spin } from "ant-design-vue";

/* Local imports */
import SectionBanner from "@/components/SectionBanner/SectionBanner.vue";
import ProductCard from "@/components/ProductShowcase/ProductCard.vue";

export default {
    components: {
        SectionBanner,
        PageHeader,
        Select,
        ProductCard,
        Select,
        Spin,
    },
    created() {
        let promises = [];

        promises.push(this.$store.dispatch("fetchProducts"));
        promises.push(this.$store.dispatch("fetchCategoryData"));

        Promise.all(promises).then(() => (this.loading = false));
    },
    data() {
        return {
            loading: true,
            selectedCategoryFilters: [],
            selectedSpeciesFilters: [],
        };
    },
    beforeRouteUpdate(to, from) {
        this.selectedSpeciesFilters = [];
        this.selectedCategoryFilters = [];
    },
    computed: {
        sortedProducts() {
            return Object.values(this.products)
                .sort((a, b) => {
                    return a.price - b.price;
                })
                .slice(0, 8);
        },
        /* Para não precisar fazer this.$store.getters.[...] */
        ...mapGetters(["products", "categoryData"]),
    },
};
</script>
