// Nav
<template>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.title">
                <router-link :to="link.href">{{ link.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
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
    color: var(--text-color-dark);
}
</style>