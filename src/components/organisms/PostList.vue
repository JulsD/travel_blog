// PostList

<template>
    <section>
        <h1>Posts</h1>
        <div>
            <PostShort v-for="a in articles" :key="a.id" :article="a"/>
        </div>
    </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PostShort from './PostShort.vue'
export default {
    mounted() {
        this.init()
    },
    computed: mapState('articles', ['articles']),
    components: {
        PostShort
    },
    methods: mapActions('articles', ['init'])
}
</script>

<style>

</style>