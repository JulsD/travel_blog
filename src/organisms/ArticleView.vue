// ArticleView.component.vue
<template>
<PageWrapper>
    <ArticleFull v-if="article" :article="article"/>
    <CommentForm :article_id="article.id" :user="user" :is-logged-in="isLoggedIn"/>
    <div class="comments_list">
        <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" />
    </div>
</PageWrapper>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import PageWrapper from '../components/PageWrapper.vue'
import ArticleFull from '../components/ArticleFull.vue'
import CommentForm from '../components/CommentForm.vue'
import Comment from '../components/Comment.vue'

export default {
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
    components: {
        PageWrapper,
        CommentForm,
        Comment,
        ArticleFull
  },
}
</script>