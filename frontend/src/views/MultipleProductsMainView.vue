<template>
    <Navbar />
    <div class="mx-auto max-w-screen-2xl" id="main-container">
        <PageHeader :title="category.toUpperCase()">
            <p>
                The best deals from the
                {{ category }}
                section of FluffStore.
            </p>

            <SectionBanner :title="category" />

            <div class="w-full pb-16 rounded" id="display">
                <div>
                    <Spin
                        :spinning="loading"
                        tip="Selecting the best deals for you"
                        size="large"
                    >
                        <div class="py-8" id="filters">
                            <h1>Filters</h1>
                            <div class="flex gap-4">
                                <Select
                                    class="w-full shadow hover:shadow-md"
                                    mode="tags"
                                    v-model:value="this.selectedCategoryFilters"
                                    :options="this.categoryFilters"
                                    placeholder="Select one or more subcategories"
                                />
                                <Select
                                    class="w-full shadow hover:shadow-md"
                                    mode="tags"
                                    v-model:value="this.selectedSpeciesFilters"
                                    :options="this.speciesFilters"
                                    placeholder="Select which type of pet you have"
                                />
                            </div>
                        </div>

                        <div id="deals-title">
                            <h1>Weekly deals</h1>
                        </div>

                        <div class="container mx-auto">
                            <div class="lg:flex lg:-mx-2">
                                <div class="mt lg:mt-0 lg:px-2">
                                    <div
                                        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                                    >
                                        <!-- Product list rendering -->
                                        <ProductCard
                                            v-for="product in filteredProducts"
                                            :key="product.id"
                                            :name="product.name"
                                            :price="product.price"
                                            :image="product.image"
                                            :productId="product.id"
                                            :category="category"
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
                    </Spin>
                </div>
            </div>
        </PageHeader>
    </div>
    <FluffFooter />
</template>

<script>
import { mapGetters } from "vuex";

/* Ant Design imports */
import { PageHeader, Select, Spin } from "ant-design-vue";

/* Local imports */
import SectionBanner from "@/components/SectionBanner/SectionBanner.vue";
import Navbar from "@/components/Navbar/Navbar.vue";
import ProductCard from "@/components/ProductShowcase/ProductCard.vue";
import FluffFooter from "@/components/Footer/Footer.vue";

export default {
    props: {
        category: {
            type: String,
            required: true,
            default: "Not specified",
        },
    },
    components: {
        SectionBanner,
        PageHeader,
        Navbar,
        Select,
        ProductCard,
        Select,
        Spin,
        FluffFooter,
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
        filteredProducts() {
            return Object.values(this.products)
                .filter((product) => product.category === this.category)
                .filter((product) => {
                    if (this.selectedCategoryFilters.length === 0) return true;

                    return this.selectedCategoryFilters.includes(
                        product.subcategory
                    );
                })
                .filter((product) => {
                    if (this.selectedSpeciesFilters.length === 0) return true;

                    return this.selectedSpeciesFilters.includes(
                        product.petSpecie
                    );
                });
        },
        categoryFilters() {
            return this.categoryData[this.category]?.subcategories.map(
                (value) => ({ value })
            );
        },
        speciesFilters() {
            return this.categoryData[this.category]?.species.map((value) => ({
                value,
            }));
        },
        /* Para não precisar fazer this.$store.getters.[...] */
        ...mapGetters(["products", "categoryData"]),
    },
};
</script>
