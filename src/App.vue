// App.component.vue

<template>
<div>
    <Header/>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    data: () => {
        return {};
  },
    components: {
        Header
    }
}
</script>
