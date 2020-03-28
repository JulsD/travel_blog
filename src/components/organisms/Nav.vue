// Nav
<template>
    <nav>
        <ul class="nav_list">
            <li v-for="link in links" :key="link.title" class="nav_list_item" v-if="link.title.includes('Demo') ? demoPage : true ">
                <router-link :to="link.href" class="nav_link">{{ link.title }}</router-link>
            </li>
            <li class="nav_list_item">
                <Button v-if="!isLoggedIn" @click="login">Login with Google</Button>
                <Menu v-if="isLoggedIn" />
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from '../atoms/Button.vue'
import Menu from './Menu.vue'

export default {
    data: () => {
        return {
            links: [
                {
                    title: 'Home',
                    href: '/'
                },
                {
                    title: 'Demo 1',
                    href: '/demo/1'
                },
                {
                    title: 'Demo 2',
                    href: '/demo/2'
                }
            ]
        }
    },
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn']),
        ...mapState('flags', ['demoPage']),
    },
    methods: {
        ...mapActions('auth', ['login', 'logout'])
    },
    components: {
        Button,
        Menu
    }
}
</script>

<style>
nav {
    color: var(--primary-color-2);
}

nav .nav_list {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
}

nav .nav_list_item {
    margin-left: var(--gap-1);
    font-size: 1rem;
}

nav .nav_list_item:first-child {
    margin-left: 0;
}

nav .nav_link {
    padding: var(--gap-1);
    text-decoration: none;
    transition: text-shadow .3s ease-out;
    text-shadow: 1px 1px transparent;
}

nav .nav_link,
nav .nav_link:visited {
    color: var(--text-color-brand);
}

nav .nav_link:hover {
    text-shadow: 1px 1px var(--text-color-dark);
}
</style>