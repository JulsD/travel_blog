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
    <router-view></router-view>
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
                    title: 'Demo',
                    href: '/demo'
                }
            ]
        }
    }
}
</script>

<style>

</style>