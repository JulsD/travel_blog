// Button.vue

<template>
    <button class="btn" @click="$emit('click')">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
}
</script>

<style scoped>
    .btn {
        display: inline-block;
        padding: var(--gap-1);
        border-radius: calc(var(--gap-1)/2);
        cursor: pointer;
        transition-duration: .3s;
        transition-property: background-color, border-color, box-shadow;
        transition-timing-function: linear;
        border: 1px solid transparent;
        background-color: transparent;
        font-size: inherit;
    }

    .btn:not(:disabled) {
        border-color: var(--primary-color-2);
        color: var(--primary-color-2-shade);
    }

    .btn:not(:disabled):hover {
        text-shadow: none;
        background-color: var(--white-color-op40);
        border-color: var(--primary-color-2-shade);
        box-shadow: 1px 1px 2px var(--text-color-dark);
    }

    .btn:disabled {
        border: 1px solid var(--grey-color);
        color: var(--grey-color);
        background-color: var(--primary-color-2-op10);
        cursor: not-allowed;
    }
</style>