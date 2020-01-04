// Header
<template>
  <header id="header">
    <div class="main-wrapper header-wrapper">
        <Logo />
        <Nav />
    </div>
    <Citation />
  </header>
</template>

<script>
import Logo from '../molecules/Logo.vue';
import Nav from './Nav.vue';
import Citation from '../molecules/Citation.vue';

export default {
    data: () => {
        return {
        }
    },
    components: {
        Logo,
        Nav,
        Citation
    }
}
</script>

<style>
#header {
    background-color: var(--primary-color-1);
    color: #416165;
}

.header-wrapper {
    padding: var(--gap-2);
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}
</style>