// Home
<template>
  <PageWrapper>
    <ArticleList />
  </PageWrapper>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import ArticleList from '../components/organisms/ArticleList.vue'
import PageWrapper from './PageWrapper.vue'

export default {
  components: {
    ArticleList,
    PageWrapper
  },
}
</script>

<style>

</style>