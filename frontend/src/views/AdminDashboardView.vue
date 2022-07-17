<template>
    <!-- Edit Product  -->
    <Modal
        v-model:visible="openEditProduct"
        ok-text=" "
        cancel-text=" "
        title="Product"
        width="50%"
        centered
    >
        <Form :model="formStateProduct" @finish="handleEditProductSubmit">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="email" class="w-full">
                    <p class="flex text-zinc-400">Name</p>
                    <Input
                        v-model:value="formStateProduct.name"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID].name
                        "
                    />
                </FormItem>
                <FormItem name="image" class="w-full">
                    <p class="flex text-zinc-400">Image (link)</p>
                    <Input
                        v-model:value="formStateProduct.image"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID].image
                        "
                    />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="description" class="w-full">
                    <p class="flex text-zinc-400">Description</p>
                    <Input
                        v-model:value="formStateProduct.description"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID]
                                .description
                        "
                    />
                </FormItem>
                <FormItem name="petSpecie" class="w-full">
                    <p class="flex text-zinc-400">Pet Specie</p>
                    <Input
                        v-model:value="formStateProduct.petSpecie"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID]
                                .petSpecie
                        "
                    />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="category" class="w-full">
                    <p class="flex text-zinc-400">Category</p>
                    <Input
                        v-model:value="formStateProduct.category"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID]
                                .category
                        "
                    />
                </FormItem>
                <FormItem name="petAge" class="w-full">
                    <p class="flex text-zinc-400">Pet Age</p>
                    <Input
                        v-model:value="formStateProduct.petAge"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID].petAge
                        "
                    />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="subcategory" class="w-full">
                    <p class="flex text-zinc-400">Subcategory</p>
                    <Input
                        v-model:value="formStateProduct.subcategory"
                        type="name"
                        :placeholder="
                            this.originalProductList[this.editProductID]
                                .subcategory
                        "
                    />
                </FormItem>
                <FormItem name="petAge" class="w-full">
                    <p class="flex text-zinc-400">Price</p>
                    <Input
                        v-model:value="formStateProduct.price"
                        type="number"
                        :placeholder="
                            this.originalProductList[this.editProductID].price
                        "
                    />
                </FormItem>
            </div>

            <FormItem name="petAge" class="w-full">
                <p class="flex text-zinc-400">On stock</p>
                <Input
                    v-model:value="formStateProduct.onStock"
                    type="number"
                    :placeholder="
                        this.originalProductList[this.editProductID].onStock
                    "
                />
            </FormItem>
            <FormItem>
                <Button type="primary" html-type="submit">
                    Confirm changes
                </Button>
            </FormItem>
        </Form>
    </Modal>

    <!-- Add product -->
    <Modal
        v-model:visible="openAddProduct"
        ok-text=" "
        cancel-text=" "
        title="Product"
        width="50%"
        centered
    >
        <Form :model="formStateProduct" @finish="handleAddProduct">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem
                    name="name"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product name',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Name</p>
                    <Input
                        v-model:value="formStateProduct.name"
                        type="name"
                        placeholder="Insert product name"
                    />
                </FormItem>
                <FormItem
                    name="image"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product image',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Image (link)</p>
                    <Input
                        v-model:value="formStateProduct.image"
                        type="name"
                        placeholder="Insert product image"
                    />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem
                    name="description"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product description',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Description</p>
                    <Input
                        v-model:value="formStateProduct.description"
                        type="name"
                        placeholder="Insert product description"
                    />
                </FormItem>
                <FormItem
                    name="petSpecie"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product pet specie',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Pet Specie</p>
                    <Input
                        v-model:value="formStateProduct.petSpecie"
                        type="name"
                        placeholder="Insert product pet specie"
                    />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem
                    name="category"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product category',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Category</p>
                    <Input
                        v-model:value="formStateProduct.category"
                        type="name"
                        placeholder="Insert product category"
                    />
                </FormItem>
                <FormItem
                    name="petAge"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the pet age',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Pet Age</p>
                    <Input
                        v-model:value="formStateProduct.petAge"
                        type="name"
                        placeholder="Insert product pet age"
                    />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem
                    name="subcategory"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product subcategory',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Subcategory</p>
                    <Input
                        v-model:value="formStateProduct.subcategory"
                        type="name"
                        placeholder="Insert product subcategory"
                    />
                </FormItem>
                <FormItem
                    name="price"
                    class="w-full"
                    :rules="[
                        {
                            required: true,
                            message: 'Please input the product price',
                        },
                    ]"
                >
                    <p class="flex text-zinc-400">Price</p>
                    <Input
                        v-model:value="formStateProduct.price"
                        type="number"
                        placeholder="Insert product price"
                    />
                </FormItem>
            </div>

            <FormItem
                name="onStock"
                class="w-full"
                :rules="[
                    {
                        required: true,
                        message: 'Please input the product stock quantity',
                    },
                ]"
            >
                <p class="flex text-zinc-400">On stock</p>
                <Input
                    v-model:value="formStateProduct.onStock"
                    type="number"
                    placeholder="Insert product on stock"
                />
            </FormItem>
            <FormItem>
                <Button type="primary" html-type="submit">
                    Confirm changes
                </Button>
            </FormItem>
        </Form>
    </Modal>

    <Modal
        v-model:visible="openEditUser"
        ok-text=" "
        cancel-text=" "
        title="Product"
        width="50%"
        centered
    >
        <Form :model="formStateUser">
            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="email" class="w-full">
                    <p class="flex text-zinc-400">Name</p>
                    <Input v-model:value="formStateUser.name" type="name" />
                </FormItem>
                <FormItem name="password" class="w-full">
                    <p class="flex text-zinc-400">Password</p>
                    <InputPassword v-model:value="formStateUser.password" />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="email" class="w-full">
                    <p class="flex text-zinc-400">Email</p>
                    <Input v-model:value="formStateUser.email" type="email" />
                </FormItem>
                <FormItem name="address" class="w-full">
                    <p class="flex text-zinc-400">Address</p>
                    <Input v-model:value="formStateUser.address" type="name" />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="city" class="w-full">
                    <p class="flex text-zinc-400">City</p>
                    <Input v-model:value="formStateUser.city" type="name" />
                </FormItem>
                <FormItem name="state" class="w-full">
                    <p class="flex text-zinc-400">State</p>
                    <Input v-model:value="formStateUser.state" type="name" />
                </FormItem>
            </div>

            <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
                <FormItem name="zip" class="w-full">
                    <p class="flex text-zinc-400">ZIP Code</p>
                    <Input v-model:value="formStateUser.zip" type="name" />
                </FormItem>
                <FormItem name="Phone" class="w-full">
                    <p class="flex text-zinc-400">Phone</p>
                    <Input v-model:value="formStateUser.phone" type="number" />
                </FormItem>
            </div>

            <FormItem>
                <Button
                    type="primary"
                    html-type="submit"
                    @click="handleSubmitUser"
                >
                    Confirm changes
                </Button>
            </FormItem>
        </Form>
    </Modal>

    <div class="h-screen">
        <div class="flex items-center justify-center w-full gap-4 py-16">
            <Logo color="rgb(30,16,52)" />
            <div>
                <Tag color="gray">Admin</Tag>
            </div>
        </div>

        <div class="w-full px-8 py-4">
            <Tabs v-model:active-key="activeKey">
                <TabPane key="1" tab="Products" class="flex flex-col gap-4">
                    <div class="flex gap-4">
                        <Input
                            v-model:value="searchProductTerm"
                            placeholder="Search product by name"
                            @change="updateProductCards"
                        />
                        <Input
                            v-model:value="searchProductID"
                            placeholder="Search product by id"
                            @change="updateProductCards"
                        />
                    </div>
                    <Spin
                        :spinning="loading"
                        tip="Fetching products and users"
                    />

                    <div
                        class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
                    >
                        <Card v-for="item in productList" :key="item.id">
                            <div
                                class="grid grid-cols-2 gap-4 p-8 rounded bg-slate-100"
                            >
                                <div>
                                    <img
                                        :src="item.image"
                                        class="object-contain w-full"
                                    />
                                </div>

                                <div class="flex flex-col">
                                    <h1 class="fix-text">{{ item.name }}</h1>

                                    <div class="flex gap-1">
                                        <h1>Quantity:</h1>
                                        {{ item.onStock }}
                                    </div>

                                    <div>
                                        <strong> ID: </strong>
                                        <Tag color="green">
                                            {{ item._id.slice(10, 25) }}</Tag
                                        >
                                    </div>
                                </div>
                                <div class="flex gap-4">
                                    <Button @click="handleEditProduct(item._id)"
                                        >Edit</Button
                                    >
                                    <Button
                                        type="danger"
                                        @click="handleDeleteProduct(item._id)"
                                        >Remove</Button
                                    >
                                </div>
                            </div>
                        </Card>
                    </div>
                </TabPane>
                <TabPane key="2" tab="Users" class="flex flex-col gap-4">
                    <div class="flex gap-4">
                        <Input
                            v-model:value="searchUserTerm"
                            placeholder="Search user by name"
                            @change="updateUserCards"
                        />
                        <Input
                            v-model:value="searchUserID"
                            placeholder="Search user by id"
                            @change="updateUserCards"
                        />
                    </div>
                    <Card v-for="item in userList" :key="item.id">
                        <div
                            class="flex flex-row justify-between w-full h-32 gap-8"
                        >
                            <div>
                                <h1>Name: {{ item.name }}</h1>
                                <p>Email: {{ item.email }}</p>
                                <h1>Phone: {{ item.phone }}</h1>
                            </div>
                            <div class="flex self-end gap-2">
                                <Button @click="handleEditUser">Edit</Button>
                                <Button
                                    type="danger"
                                    @click="delete userList[item.id]"
                                    >Remove</Button
                                >
                            </div>
                        </div>
                    </Card>
                </TabPane>
                <template #rightExtra>
                    <Button
                        type="primary"
                        v-if="activeKey === '1'"
                        @click="this.openAddProduct = true"
                        >Add Product</Button
                    >
                </template>
            </Tabs>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from "vue";

import {
    Tabs,
    TabPane,
    Card,
    Button,
    Input,
    InputPassword,
    Spin,
    Modal,
    Form,
    FormItem,
    Select,
    Tag,
    message,
} from "ant-design-vue";

import Logo from "@/components/Logo/Logo.vue";
import { mapGetters } from "vuex";
import store from "@/store";

export default {
    components: {
        Logo,
        Tabs,
        TabPane,
        Card,
        Button,
        Input,
        InputPassword,
        Spin,
        Modal,
        Form,
        FormItem,
        Select,
        Tag,
    },
    created() {
        let promises = [];

        promises.push(store.dispatch("fetchProducts"));
        promises.push(store.dispatch("fetchUsers"));

        Promise.all(promises).then(() => {
            this.loading = false;
        });
    },
    setup() {
        return {
            activeKey: ref("1"),
            searchProductTerm: ref(""),
            searchProductID: ref(""),
            searchUserTerm: ref(""),
            searchUserID: ref(""),
            productList: reactive(store.getters.products),
            originalProductList: ref(store.getters.products),
            userList: store.getters.users,
            modalOpen: ref(false),
            modalMode: ref(""),
            openEditProduct: ref(false),
            openEditUser: ref(false),
            openAddProduct: ref(false),
            editProductID: ref(""),
            editUserID: ref(""),
            formStateProduct: reactive({
                name: "",
                image: "",
                description: "",
                petSpecie: "",
                category: "",
                petAge: "",
                subcategory: "",
                price: "",
                onStock: "",
            }),
            formStateUser: reactive({
                name: "",
                password: "",
                email: "",
                address: "",
                phone: "",
                city: "",
                state: "",
                zip: "",
                role: "",
            }),
        };
    },
    data() {
        return {
            loading: true,
        };
    },
    methods: {
        async handleAddProduct() {
            let isEmpty = true;

            let form = Object.values(this.formStateProduct);

            for (let i = 0; i < form.length; i++) {
                if (form[i] !== "") {
                    isEmpty = false;
                }
            }

            if (isEmpty) {
                message.error("Form is empty, no changes were made");
                return;
            }

            if (this.formStateProduct.price !== "") {
                this.formStateProduct.price = parseInt(
                    this.formStateProduct.price
                );
            }

            if (this.formStateProduct.onStock !== "") {
                this.formStateProduct.onStock = parseInt(
                    this.formStateProduct.onStock
                );
            }

            await this.$store.dispatch("addProduct", this.formStateProduct);

            this.productList = this.$store.getters.products;

            message.success("Product added successfully");

            this.openAddProduct = false;
        },
        handleDeleteProduct(id) {
            Modal.confirm({
                title: "Are you sure delete this product?",
                content: "This action cannot be undone",
                okText: "Yes",
                cancelText: "No",
                onOk() {
                    store.dispatch("deleteProduct", id);
                },
            });
        },
        handleEditUser(id) {
            this.editUserID = id;
            this.openEditUser = true;
        },
        handleEditProduct(id) {
            this.editProductID = id;
            this.openEditProduct = true;
        },
        async handleEditProductSubmit() {
            let isEmpty = true;

            let form = Object.values(this.formStateProduct);

            for (let i = 0; i < form.length; i++) {
                if (form[i] !== "") {
                    isEmpty = false;
                }
            }

            if (isEmpty) {
                message.error("Form is empty, no changes were made");
                return;
            }

            if (this.formStateProduct.price !== "") {
                this.formStateProduct.price = parseInt(
                    this.formStateProduct.price
                );
            }

            if (this.formStateProduct.onStock !== "") {
                this.formStateProduct.onStock = parseInt(
                    this.formStateProduct.onStock
                );
            }

            await this.$store.dispatch("editProduct", {
                original: this.productList[this.editProductID],
                modified: this.formStateProduct,
            });

            this.productList = this.$store.getters.products;

            message.success("Product edited successfully");

            this.openEditProduct = false;
        },
        updateProductCards() {
            this.productList = Object.values(store.getters.products)
                .filter((product) => {
                    if (!this.searchProductTerm) {
                        return true;
                    }
                    return product.name
                        .toLowerCase()
                        .includes(this.searchProductTerm.toLowerCase());
                })
                .filter((product) => {
                    if (!this.searchProductID) {
                        return true;
                    }
                    return product._id.includes(this.searchProductID);
                });
        },
        updateUserCards() {
            this.userList = Object.values(store.getters.users)
                .filter((user) => {
                    if (!this.searchUserTerm) {
                        return true;
                    }
                    return user.name
                        .toLowerCase()
                        .includes(this.searchUserTerm.toLowerCase());
                })
                .filter((user) => {
                    if (!this.searchUserID) {
                        return true;
                    }
                    return user.id.toString() === this.searchUserID;
                });
        },
    },
    computed: {
        ...mapGetters(["products", "users"]),
    },
};
</script>

<style scoped>
.fix-text {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
