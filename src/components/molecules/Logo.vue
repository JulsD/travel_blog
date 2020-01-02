// Logo
<template>
  <a href="/home" class="logo">
    <LogoImage></LogoImage>
    <span>{{logoTitle}}</span>
  </a>
</template>

<script>
import LogoImage from '../atoms/LogoImage.vue';

export default {
    data: () => {
        return {
            logoTitle: 'Travel Blog'
        }
    },
    components: {
        LogoImage
    }
}
</script>

<style>
.logo {
    display: flex;
    align-items: flex-end;
    color: var(--text-color);
    font-size: 1.5rem;
    font-weight: bold;
    text-decoration: none;
    text-shadow: 1px 1px var(--text-color-dark);
}

.logo .ice-cream-wrapper {
    font-size: 12px;
    margin-right: var(--gap-1);
}

.logo .ice-cream-wrapper {
    margin-right: 1em;
}
</style>