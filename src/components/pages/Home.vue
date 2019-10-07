// Home
<template>
<div class="grid-container main-wrapper">
  <main>   
  <section>
    <PostShort v-for="n in 5" :key="n"/>
  </section>
  </main>
  <Sidebar />
</div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import PostShort from '../organisms/PostShort.vue'
import Sidebar from '../organisms/Sidebar.vue'

export default {
  computed: {
    ...mapState([
        'count'
    ])
  },
  data () {
    return {
      loading: false,
      homeTitle: null,
      error: null
    }
  },
  components: {
    PostShort,
    Sidebar
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = this.post = null
      this.loading = true
    //   getPost(this.$route.params.id, (err, post) => {
    //     this.loading = false
    //     if (err) {
    //       this.error = err.toString()
    //     } else {
    //       this.post = post
    //     }
    //   })
    },
    ...mapMutations([
      'increment'
    ])
  }
}
</script>

<style>

</style>