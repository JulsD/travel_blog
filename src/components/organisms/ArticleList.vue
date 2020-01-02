// ArticleList

<template>
    <section>
        <h1>Articles</h1>
        <div>
            <ArticleShort v-for="a in articles" :key="a.id" :article="a"/>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import ArticleShort from './ArticleShort.vue'
export default {
    mounted() {
        this.init()
    },
    computed: mapState('articles', ['articles']),
    components: {
        ArticleShort
    },
    methods: mapActions('articles', ['init'])
}
</script>

<style>

</style>