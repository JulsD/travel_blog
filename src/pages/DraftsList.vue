// DraftList
<template>
  <PageWrapper>
    <ArticleList :articles="drafts"/>
  </PageWrapper>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex'
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
  computed: {
    ...mapGetters('articles', ['draftArticles']),
    ...mapState('auth', ['user']),
    drafts(){
        return this.draftArticles.filter(a => a.author.id == this.user.id);
      }
    },
  methods: mapActions('articles', ['init'])
}
</script>

<style>

</style>