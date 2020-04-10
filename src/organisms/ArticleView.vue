// ArticleView.component.vue
<template>
<PageWrapper>
    <ArticleFull v-if="article" :article="article"/>
    <CommentForm :article-id="article.id" :user="user" v-if="user && article && isLoggedIn"/>
    <p class="comment_form--follback" v-if="!isLoggedIn">
            <!-- Sign Up
            or  -->
        <Button style-type="link" @click="login">Login with Google</Button>
        to leave a comment
    </p>
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
import Button from '../components/atoms/Button.vue'

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
        ...mapActions('auth', ['login']),
        ...mapActions('article', ['initArticle']),
        ...mapActions('comments', ['initComments'])
    },
    components: {
        PageWrapper,
        CommentForm,
        Comment,
        ArticleFull,
        Button
  },
}
</script>

<style scoped>
    .comment_form--follback {
        display: block;
        text-align: center;
        color: var(--grey-color-5);
        font-size: .9rem;
    }
</style>