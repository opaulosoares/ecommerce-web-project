<template>
    <div class="flex items-center justify-between w-full h-32 rounded">
        <p class="w-1/2">
            In the {{ title }} category of fluffshop, the best deals are always
            available.
        </p>
        <img
            src="@/assets/illustrations/pets.svg"
            alt=""
            class="w-1/3 object-fit"
        />
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "",
        },
    },
};
</script>

<style lang="scss" scoped></style>
