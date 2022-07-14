import { createStore } from "vuex";
import router from "@/router";

export default createStore({
    state: {
        isLoggedIn: false,
        isAdminLoggedIn: false,
        cart: {},
        user: {},
        admin: {},
        products: {},
        users: {},
        categoryData: {},
        bestDeals: {},
    },
    getters: {
        logged: (state) => state.isLoggedIn,
        adminLoggedIn: (state) => state.isAdminLoggedIn,
        categoryData: (state) => state.categoryData,
        cartCount: (state) =>
            Object.values(state.cart).reduce(
                (sum, item) => sum + item.amount,
                0
            ),
        cart: (state) => state.cart,
        user: (state) => state.user,
        users: (state) => state.users,
        products: (state) => state.products,
        subtotalCart: (state) => {
            let subTotal = 0;
            Object.values(state.cart).forEach((item) => {
                subTotal += item.amount * item.price;
            });
            return subTotal;
        },
        shipping: (state) => {
            let subTotal = 0;
            Object.values(state.cart).forEach((item) => {
                subTotal += item.amount * item.price;
            });
            return subTotal / 7.77;
        },
    },
    mutations: {
        setUser: (state, user) => (state.user = user),
        setAdmin: (state, admin) => (state.admin = admin),
        loggedIn: (state) => (state.isLoggedIn = true),
        adminLoggedIn: (state) => (state.isAdminLoggedIn = true),
        addProduct: (state, product) => (state.products[product.id] = product),
        addUser: (state, user) => (state.users[user.id] = user),
        addCategoryData: (state, data) => (state.categoryData[data.id] = data),
        addToCart: (state, product) => {
            state.cart[product.id] = {
                ...product,
                amount: state.cart[product.id]?.amount + 1 || 1,
            };

            /* Data persistency */
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart: (state, product) => {
            if (state.cart[product.id].amount == 1) {
                delete state.cart[product.id];
            } else {
                state.cart[product.id] = {
                    ...product,
                    amount: state.cart[product.id]?.amount - 1 || 0,
                };
            }

            /* Data persistency */
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        clearProductAmount(state, product) {
            delete state.cart[product.id];
            /* Data persistency */
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        clearCart: (state) => (
            (state.cart = {}), localStorage.removeItem("cart")
        ),

        editUser: (state, user) => {
            /* filter empty fields from user */
            const filteredUser = Object.keys(user).reduce((acc, key) => {
                if (user[key]) {
                    acc[key] = user[key];
                }
                return acc;
            }, {});

            state.user = {
                ...state.user,
                ...filteredUser,
            };

            fetch(`http://localhost:3000/users/${state.user.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(state.user),
            });

            /* Data persistency */
            localStorage.setItem("user", JSON.stringify(state.user));
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            state.user = {};
            state.cart = {};
            localStorage.removeItem("user");
            router.replace({ name: "home" });
        },
    },
    actions: {
        async editProduct(context, data) {
            /* filter empty fields from user */
            const filteredProduct = Object.keys(data.modified).reduce(
                (acc, key) => {
                    if (data.modified[key]) {
                        acc[key] = data.modified[key];
                    }
                    return acc;
                },
                {}
            );

            data.original = {
                ...data.original,
                ...filteredProduct,
            };

            fetch(`http://localhost:3000/products/${data.original.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data.original),
            });

            context.state.products[data.original.id] = data.original;
        },
        async registerUser({ commit }, user) {
            user.role = "Costumer";

            console.log(user);

            fetch(`http://localhost:3000/users/`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });
        },
        async fetchProducts({ commit }) {
            let products = await fetch(`http://localhost:3000/products`);

            let data = await products.json();

            await new Promise((resolve) => setTimeout(resolve, 1000));

            for (const item of data) {
                commit("addProduct", item);
            }
        },
        async fetchUsers({ commit }) {
            let users = await fetch(`http://localhost:3000/users`);

            let data = await users.json();

            await new Promise((resolve) => setTimeout(resolve, 1000));

            for (const item of data) {
                commit("addUser", item);
            }

            return data;
        },
        async fetchCategoryData({ commit }) {
            let categories = await fetch(`http://localhost:3000/categories`);
            let data = await categories.json();

            await new Promise((resolve) => setTimeout(resolve, 500));

            for (const item of data) {
                commit("addCategoryData", item);
            }

            return data;
        },
        async findUserData({ commit }, userData) {
            let user = await fetch(
                `http://localhost:3000/users?email=${userData.email}`
            );
            let data = await user.json();

            if (data.length === 0) {
                throw new Error("Invalid credentials");
            }

            if (data[0].password === userData.password) {
                commit("setUser", data[0]);
                commit("loggedIn");

                localStorage.setItem("user", JSON.stringify(data[0]));

                return true;
            }

            throw new Error("Invalid credentials");
        },
        async findAdminData({ commit }, userData) {
            let user = await fetch(
                `http://localhost:3000/users?email=${userData.email}`
            );
            let data = await user.json();

            if (data[0].password === userData.password) {
                commit("adminLoggedIn");
                commit("setAdmin", data[0]);

                localStorage.setItem("admin", JSON.stringify(data[0]));

                router.push("/admin/dashboard");

                return true;
            }

            throw new Error("Invalid credentials or user isn't an admin");
        },
        async finishOrder({ state, getters, commit }) {
            let order = await fetch(`http://localhost:3000/orders`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_id: state.user.id,
                    products: state.cart,
                    subtotal: getters.subtotalCart,
                    shipping: getters.shipping,
                    total: getters.subtotalCart + getters.shipping,
                }),
            });
            let data = await order.json();

            await new Promise((resolve) => setTimeout(resolve, 500));

            commit("clearCart");

            router.push("/");

            return data;
        },
    },
    modules: {},
});
