// Post.component.vue
<template>
<PageWrapper>
    <article class="post">
        {{$route.params.name}}
        <!-- <header class="post-header">
            <h1 class="post-title">{{article.title}}</h1>
            <span class="post-date">{{article.created_at}}</span>
        </header>
        <p class="post-description">{{article.description}}</p>
        <section v-for="(section, index) in article.body" :key="index">
            <h2>section.title</h2>
            <h2>section.body</h2>
        </section> -->
    </article>
</PageWrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageWrapper from './PageWrapper.vue'

export default {
    mounted() {
        // this.init()
    },
    computed: mapState('articles', ['articles']),
    methods: mapActions('articles', ['init']),
    components: {
        PageWrapper
  },
}
</script>

<style>
</style>