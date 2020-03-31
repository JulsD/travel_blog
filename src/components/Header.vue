// Header
<template>
  <header id="header">
    <div class="main-wrapper header-wrapper">
        <Logo />
        <Nav />
        <Avatar v-if="user" :user="user" size="65px"/>
    </div>
    <Citation />
  </header>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Logo from './Logo.vue';
import Nav from './Nav.vue';
import Citation from './Citation.vue';
import Avatar from './atoms/Avatar.vue';

export default {
    data: () => {
        return {
        }
    },
    components: {
        Logo,
        Nav,
        Citation,
        Avatar
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

.header-wrapper .avatar-wrapper {
    margin-left: var(--gap-1);
}
</style>