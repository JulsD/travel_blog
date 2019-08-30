// Demo
<template>
  <main>
  <section>
  <h1>Just starting the demo block</h1>
  <p>Going to add some text here</p>
  </section>
  </main>
</template>

<script>
export default {
  computed: {
    username () {
      return this.$route.params.username
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