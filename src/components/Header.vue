// Header
<template>
  <header>
    <div class="logo">{{logoTitle}}</div>
    <nav>
        <ul>
            <li v-for="link in links" :key="link.title">
                <a :href="link.href">{{ link.title }}</a>
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
                    title: 'nav1',
                    href: '/'
                }
            ]
        }
    }
}
</script>

<style>

</style>