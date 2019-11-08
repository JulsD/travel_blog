// Home
<template>
<div class="grid-container main-wrapper">
  <main>
    <PostList />
  </main>
  <Sidebar />
</div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import PostList from '../components/organisms/PostList.vue'
import Sidebar from '../components/organisms/Sidebar.vue'

export default {
  components: {
    PostList,
    Sidebar
  },
}
</script>

<style>

</style>