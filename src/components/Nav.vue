// Nav
<template>
    <nav>
        <ul class="nav_list">
            <li v-for="link in links" :key="link.title" class="nav_list_item">
                <router-link :to="link.href" class="nav_link">{{ link.title }}</router-link>
            </li>
            <li class="nav_list_item" v-if="!isLoggedIn">
                <Button @click="login">Login with Google</Button>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from './atoms/Button.vue'
import Menu from './Menu.vue'

export default {
    data: () => {
        return {
            links: [
                {
                    title: 'Home',
                    href: '/'
                }
            ]
        }
    },
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn'])
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
nav .nav_list {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
}

nav .nav_list_item {
    margin-left: var(--gap-2);
    font-size: 1rem;
}

nav .nav_list_item:first-child {
    margin-left: 0;
}

nav .nav_link {
    padding: var(--gap-1);
    text-decoration: none;
    border-radius: calc(var(--radius)/2);
    transition: box-shadow .3s ease-out, color .3s ease-out;
    color: var(--primary-color-2);
}

nav .nav_link,
nav .nav_link:visited {
    color: var(--primary-color-2-dark);
}

nav .nav_link:hover {
    box-shadow: var(--shadow-s);
    color: var(--primary-color-2-shade);
}
</style>