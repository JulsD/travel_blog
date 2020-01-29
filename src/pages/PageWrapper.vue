// PageWrapper
<template>
<div class="grid-container main-wrapper">
  <main>
    <slot></slot>
  </main>
  <Sidebar v-if="sidebar"/>
</div>
</template>

<script>
import { mapState } from 'vuex'
import Sidebar from '../components/organisms/Sidebar.vue'

export default {
  computed: mapState('flags', ['sidebar']),
  components: {
    Sidebar
  },
}
</script>

<style>

</style>