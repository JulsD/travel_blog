// Home
<template>
  <PageWrapper>
    <ArticleList :articles="releasedArticles"/>
  </PageWrapper>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ArticleList from '../organisms/ArticleList.vue'
import PageWrapper from '../components/PageWrapper.vue'

export default {
  components: {
    ArticleList,
    PageWrapper
  },
  mounted() {
      this.init()
  },
  computed: mapGetters('articles', ['releasedArticles']),
  methods: mapActions('articles', ['init'])
}
</script>

<style>

</style>