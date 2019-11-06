// Nav
<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.title">
                <router-link :to="link.href">{{ link.title }}</router-link>
            </li>
            <li>
                <div class="auth auth-container">
                    <div class="portret" v-if="user"><img :src="user.image" :alt="user.name"></div>
                    <button v-if="!isLoggedIn" @click="login()">Login with Google</button>
                    <button v-if="isLoggedIn" @click="logout()">Logout</button>
                </div>
            </li>
        </ul>
    </nav>
</template>

<script>
import { mapActions, mapState } from 'vuex'

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
        ...mapState('auth', ['user', 'isLoggedIn'])
    },
    methods: {
        ...mapActions('auth', ['login', 'logout'])
    }
}
</script>

<style>
nav {
    color: var(--primary-color-2);
}

nav ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
}

nav li {
    margin-left: var(--gap-1);
}

nav li:first-child {
    margin-left: 0;
}

nav a {
    padding: var(--gap-1);
    text-decoration: none;
    transition: color .3s ease-out;
    font-size: 1.1rem;
    font-weight: 500;
}

nav a,
nav a:visited {
    color: var(--grey-color);
}

nav a:hover {
    color: var(--text-color);
}

.auth-container {
    display: flex;
    align-items: center;
}
.auth-container .portret {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
}

.auth-container .portret img {
    display: block;
    max-width: 100%;
    max-height: 100%;
}
</style>