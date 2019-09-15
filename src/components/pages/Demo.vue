// Demo
<template>
  <main>
  <section>
  <h1>Just starting the demo block</h1>
  <p>Going to add some text here</p>
  <div>Demo {{ $route.params.id }}</div>
  </section>
  </main>
</template>

<script>
export default {
  computed: {
    id () {
      return this.$route.params.id
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
</script>

<style>

</style>