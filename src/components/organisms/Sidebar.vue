// Sidebar.component.vue
<template>
  <aside id="sidebar">
      <div class="sidebar-container">
        <form class="search-form"></form>
        <div>
            <h2>Tags</h2>
            <span v-for="tag in tags" :key="tag">{{tag}}</span>
        </div>
        <div>Best for the last time</div>
      </div>
  </aside>
</template>

<script>
export default {
    data: () => {
        return {
            tags: ['norway', 'netherlands', 'ukraine', 'amsterdam']
        }
    }
}
</script>

<style>
.sidebar-container {
    background-color: var(--primary-color-2-tint);
    border-radius: calc(var(--gap-1)/2);
    padding: var(--gap-3);
}
</style>