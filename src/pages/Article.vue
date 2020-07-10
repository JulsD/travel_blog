// ArticleView.component.vue
<template>
<PageWrapper>
    <ArticleView :article="article" :comments="comments" :user="user" :is-logged-in="isLoggedIn"/>
</PageWrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageWrapper from '../components/PageWrapper.vue'
import ArticleView from '../organisms/ArticleView.vue'

export default {
    components: {
        PageWrapper,
        ArticleView
    },
    mounted() {
        this.initArticle(this.$route.params.id);
        this.initComments(this.$route.params.id);
    },
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn']),
        ...mapState('article', ['article']),
        ...mapState('comments', ['comments'])
    },
    methods: {
        ...mapActions('article', ['initArticle']),
        ...mapActions('comments', ['initComments'])
    },
}
</script>