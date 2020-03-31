// Avatar.vue

<template>
    <div class="avatar-wrapper" :style="`
        --size: ${size};
    `">
        <img class="portret-image"
             :src="user.image"
             :alt="user.name">
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object
        },
        size: {
            type: String,
            default: '40px'
        }
    }
}
</script>

<style scoped>
    .avatar-wrapper {
        --size: 40px;
        width: var(--size);
        padding-top: var(--size);
        border-radius: 50%;
        overflow: hidden;
        border: 1px solid var(--grey-color-2);
        box-sizing: content-box;
        position: relative;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        border-radius: 50%;
        padding: calc(var(--gap-1)/2);
        max-width: 100%;
        max-height: 100%;
        object-fit: cover;
    }
</style>