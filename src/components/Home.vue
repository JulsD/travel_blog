// Home
<template>
  <main>
  {{count}}
  <button @click="increment()">Increment</button>        
  <section>
  <h1>Just starting the main {{homeTitle}} block</h1>
  <p>Going to add some text here</p>
  </section>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

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