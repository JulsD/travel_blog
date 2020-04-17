//Notification.vue 
<template>
    <div class="notofication"
         :class="`notofication__${type}`"
         role="alert"
         aria-live="polite">
        <span aria-hidden="true" 
              :class="{'icon-wink': type === 'info', 'icon-hipster': type === 'warning' ,'icon-confused': type === 'danger'}">
        </span>
        <span class="visually-hidden">{{type}}</span>
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'info',
            validator: (value) => {
                return ['info', 'warning', 'danger'].indexOf(value) !== -1;
            }
        }
    }
}
</script>

<style scoped>
    .notofication {
        border-radius: var(--radius);
        border: 1px solid var(--grey-color-2);
        box-sizing: border-box;
        display: block;
        padding: var(--gap-1);
        box-shadow: 0 0 8px 0 var(--color);
        display: flex;
        align-items: center;
    }

    .notofication [class*=icon] {
        color: var(--color);
        margin-right: var(--gap-1);
        font-size: 1.5rem;
    }

    .notofication__info {
        --color: var(--primary-color-2-shade);
    }

    .notofication__warning {
        --color: var(--primary-color-1-shade);
    }

    .notofication__danger {
        --color: red;
    }
</style>