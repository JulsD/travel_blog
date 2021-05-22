// App.component.vue

<template>
  <div>
    <Header/>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
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
