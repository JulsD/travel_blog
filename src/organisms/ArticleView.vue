// ArticleView.component.vue
<template>
    <div>
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
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import ArticleFull from '../components/ArticleFull.vue'
import CommentForm from '../components/CommentForm.vue'
import Comment from '../components/Comment.vue'
import Button from '../components/atoms/Button.vue'

export default {
    props: {
        article: {
            type: Object,
            default: null
        },
        comments: {
            type: Array,
            default: null
        },
        user: {
            type: Object,
            default: null
        },
        isLoggedIn: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        ...mapActions('auth', ['login'])
    },
    components: {
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