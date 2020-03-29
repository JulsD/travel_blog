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
import { mapState, mapActions } from 'vuex'
import ArticlePreview from './ArticlePreview.vue'
export default {
    mounted() {
        this.init()
    },
    computed: mapState('articles', ['articles']),
    components: {
        ArticlePreview
    },
    methods: mapActions('articles', ['init'])
}
</script>

<style>
    h1 {
        font-size: 1.4rem;
    }
</style>