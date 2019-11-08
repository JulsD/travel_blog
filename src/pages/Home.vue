// Home
<template>
  <PageWrapper>
    <PostList />
  </PageWrapper>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import PostList from '../components/organisms/PostList.vue'
import PageWrapper from './PageWrapper.vue'

export default {
  components: {
    PostList,
    PageWrapper
  },
}
</script>

<style>

</style>