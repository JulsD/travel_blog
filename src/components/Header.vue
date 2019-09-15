// Header
<template>
  <header>
    <div class="logo">{{logoTitle}}</div>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.title">
                <router-link :to="link.href">{{ link.title }}</router-link>
            </li>
        </ul>
    </nav>
  </header>
</template>

<script>
export default {
    data: () => {
        return {
            logoTitle: 'Travel Blog',
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
header {
    background-color: var(--primary-color-1-tint);
    border-bottom: 20px solid #E7ECFF;
    color: #416165;
}

nav {
    background-color: #e6efff;
    color: #bbd1e9;
}
</style>