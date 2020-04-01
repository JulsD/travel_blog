// Button.vue

<template>
    <button class="btn"
            :class="{'btn_link': styleType === 'link', 'btn_secondary': styleType === 'secondary'}"
            @click="$emit('click')">
        <slot>Button</slot>
    </button>
</template>

<script>
export default {
    props: {
        styleType: {
            type: String,
            default: ''
        }
    }
}
</script>

<style>
    .btn {
        --btn-color: var(--primary-color-2-shade);
        --btn-border-color: transparent;
        --btn-bg-color: transparent;
        display: inline-block;
        cursor: pointer;
        background-color: var(--btn-bg-color);
        padding: var(--gap-1);
        transition-duration: .3s;
        transition-property: background-color, border-color, box-shadow;
        transition-timing-function: linear;
        border: 1px solid var(--btn-border-color);
        border-radius: calc(var(--radius)/2);
    }

    .btn.btn_link {
        border: none;
    }

    .btn.btn_secondary {
        --btn-color: var(--grey-color-4);
    }

    .btn:not(:disabled) {
        --btn-border-color: var(--grey-color-2);
        color: var(--btn-color);
    }

    .btn:not(:disabled):hover {
        box-shadow: var(--shadow-s);
        background-color: var(--white-color-op40);
    }

    .btn:disabled {
        --btn-bg-color: var(--grey-color-2);
        --btn-color: var(--grey-color-3);
        cursor: not-allowed;
        border: 1px solid var(--grey-color-3);
        background-color: var(--primary-color-2-op10);
    }
</style>