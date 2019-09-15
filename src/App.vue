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
import Header from './components/organisms/Header.vue'

export default {
    data: () => {
        return {};
  },
    components: {
        Header
    }
}
</script>
