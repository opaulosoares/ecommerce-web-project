<template>
    <Navbar></Navbar>

    <div class="flex flex-col gap-8 p-8">
        <div class="text-xl font-bold">
            This is an assignment for the "Introduction to Web Development"
            class of University of São Paulo (ICMC-USP).
        </div>
        <div>
            <div class="font-bold">Made by:</div>
            <ul>
                <li>Paulo Henrique de Souza Soares</li>
                <li>Natan Henrique Sanches</li>
                <li>Álvaro José Lopes</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
export default {
    components: {
        Navbar,
    },
};
</script>

<style lang="scss" scoped></style>
