<template>
    <div>
        <router-view />
    </div>
</template>

<script>
export default {
    created() {
        let cart = localStorage.getItem("cart");
        let user = localStorage.getItem("user");
        let admin = localStorage.getItem("admin");

        if (cart) this.$store.state.cart = JSON.parse(cart);

        if (user) {
            this.$store.state.isLoggedIn = true;
            this.$store.state.user = JSON.parse(user);
        }

        if (admin) {
            this.$store.state.admin = JSON.parse(admin);
            this.$store.state.isAdminLoggedIn = true;
        }
    },
};
</script>
