// PageWrapper
<template>
<div class="grid-container main-wrapper">
  <main>
    <slot></slot>
  </main>
  <Sidebar />
</div>
</template>

<script>
import Sidebar from '../components/organisms/Sidebar.vue'

export default {
  components: {
    Sidebar
  },
}
</script>

<style>

</style>