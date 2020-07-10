// Home
<template>
  <PageWrapper>
    <ArticleList />
  </PageWrapper>
</template>

<script>
import ArticleList from '../organisms/ArticleList.vue'
import PageWrapper from '../components/PageWrapper.vue'

export default {
  components: {
    ArticleList,
    PageWrapper
  },
}
</script>

<style>

</style>