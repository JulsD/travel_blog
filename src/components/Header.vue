// Header
<template>
  <header id="header">
    <div class="main-wrapper header-wrapper">
        <Logo />
        <Nav />
        <Menu />
    </div>
    <Citation />
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Logo from './Logo.vue';
import Nav from './Nav.vue';
import Menu from './Menu.vue';
import Citation from './Citation.vue';

export default {
    data: () => {
        return {
        }
    },
    components: {
        Logo,
        Nav,
        Citation,
        Menu
    },
    computed: {
        ...mapState('auth', ['user'])
    }
}
</script>

<style>
#header {
    color: #416165;
}

.header-wrapper {
    padding: var(--gap-2);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.header-wrapper nav {
    margin-left: auto;
    margin-right: var(--gap-2);
}
</style>