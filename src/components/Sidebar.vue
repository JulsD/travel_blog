// Sidebar.component.vue
<template>
  <aside id="sidebar">
      <div class="sidebar-container">
          <form class="search-form">
              <input type="search">
          </form>
        <section>
            <h2>Tags</h2>
            <div class="section-content">
                <router-link v-for="tag in tags"
                            :key="tag.id"
                            :to="{ name: 'new-article', params: { name: tag.name } }"
                            class="tag">{{tag.name}}</router-link>
            </div>
            <div>Best for the last time</div>
        </section>
        <section>
            <h2>Best for the last time</h2>
            <div class="section-content"></div>
        </section>
      </div>
  </aside>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    mounted() {
        this.init()
    },
    computed: mapState('tags', ['tags']),
    methods: mapActions('tags', ['init'])
}
</script>

<style>
.sidebar-container .section-content {
    background-color: var(--primary-color-2-tint);
    border-radius: calc(var(--gap-1)/2);
    padding: var(--gap-3);
}

.tag {
    text-decoration: none;
    display: inline-block;
    padding: calc(var(--gap-1)/2);
    margin: 0 calc(var(--gap-1)/2) calc(var(--gap-1)/2) 0;
    border-radius: var(--radius);
    background-color: var(--white-color-op40);
    color: var(--text-color-dark);
    transition-duration: .3s;
    transition-property: background-color, color;
    transition-timing-function: linear;
}

.tag:hover {
    text-decoration: none;
    background-color: var(--primary-color-2-dark);
    color: var(--text-color-light);
}
</style>