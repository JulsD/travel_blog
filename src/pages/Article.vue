// Article.component.vue
<template>
<PageWrapper>
    <article class="article">
        {{article.title}}
        {{article}}
        <header class="article-header">
            <h1 class="article-title">{{article.title}}</h1>
            <span class="article-date">{{article.created_at}}</span>
        </header>
        <p class="article-description">{{article.description}}</p>
        <section v-for="(section, index) in article.body" :key="index">
            <h2>section.title</h2>
            <h2>section.body</h2>
        </section>
    </article>
</PageWrapper>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import PageWrapper from './PageWrapper.vue'

export default {
    mounted() {
        this.initArticle(this.$route.params.name);
    },
    computed: {
        ...mapState('article', ['articles']),
        ...mapGetters('article', ['article'])
    },
    methods: mapActions('article', ['initArticle']),
    components: {
        PageWrapper
  },
}
</script>

<style>
</style>