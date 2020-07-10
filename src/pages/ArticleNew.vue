// ArticleNew.component.vue
<template>
<PageWrapper>
        {{$route.params.name}}
        <ArticleForm />
</PageWrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageWrapper from '../components/PageWrapper.vue'
import ArticleForm from '../components/ArticleForm.vue'

export default {
    mounted() {
        // this.init()
    },
    computed: mapState('articles', ['articles']),
    methods: mapActions('articles', ['init']),
    components: {
        PageWrapper,
        ArticleForm
  },
}
</script>

<style>
</style>