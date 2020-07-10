// ArticleList

<template>
    <section>
        <h1>Articles</h1>
        <div>
            <ArticlePreview v-for="a in articles" :key="a.id" :article="a"/>
        </div>
    </section>
</template>

<script>
import ArticlePreview from '../components/ArticlePreview.vue'
export default {
    props: {
        articles: {
            type: Array,
            default: null
        }
    },
    components: {
        ArticlePreview
    }
}
</script>

<style>
    h1 {
        font-size: 1.4rem;
    }
</style>