// Demo
<template>
  <main>
    {{count}}
  <button @click="increment()">Increment</button>     
  <section>
  <h1>Just starting the demo block</h1>
  <p>Going to add some text here</p>
  <div>Demo {{ $route.params.id }}</div>
  </section>
  </main>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  computed: {
    id () {
      return this.$route.params.id
    },
    ...mapState([
        'count'
    ])
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  },
  ...mapMutations([
      'increment'
    ])
}
</script>

<style>

</style>