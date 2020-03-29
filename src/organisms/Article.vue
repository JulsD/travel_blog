// Article.component.vue
<template>
<PageWrapper>
    <article class="article">
        <span class="article_date">{{this.date}}</span>
        <header class="article_header">
            <h1 class="article_title">{{article.title}}</h1>
        </header>
        <p class="article_description">{{article.description}}</p>
        <section v-for="(section, index) in article.body" :key="index">
            <h2 class="article_section_title">{{section.title}}</h2>
            <p>{{section.content}}</p>
        </section>
    </article>
    <CommentForm :article_id="article.id"/>
    <div class="comments_list">
        <Comment v-for="(comment, index) in comments" :key="index" :comment="comment" />
    </div>
</PageWrapper>
</template>

<script>
import moment from 'moment';
import { mapState, mapActions } from 'vuex'
import PageWrapper from '../components/PageWrapper.vue'
import CommentForm from '../components/CommentForm.vue'
import Comment from '../components/Comment.vue'

export default {
    mounted() {
        this.initArticle(this.$route.params.id);
        this.initComments(this.$route.params.id);
    },
    computed: {
        ...mapState('article', ['article']),
        ...mapState('comments', ['comments']),
        date() {
            return this.article && this.article.created_at ? moment(this.article.created_at.seconds*1000).format("Do MMM YY") : null;
        }
    },
    methods: {
        ...mapActions('article', ['initArticle']),
        ...mapActions('comments', ['initComments'])
    },
    components: {
        PageWrapper,
        CommentForm,
        Comment
  },
}
</script>

<style>
article {
    background-color: var(--primary-color-1-op25);
    border-radius: 10%;
    padding: var(--gap-3);
    margin-bottom: var(--gap-3);
    font-size: 1rem;
}

article p,
article h1,
article h2 {
    margin: 0 0 var(--gap-1);
}

.article_header,
.article_description,
article section {
    margin-bottom: var(--gap-2);
}

.article_header {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
}

.article_title {
    color: var(--text-color);
    font-size: 2rem;
    margin: 0;
}

.article_description {
    font-style: italic;
    color: var(--grey-color-3);
}

.article_section-title {
    color: var(--text-color-brand-dark);
    font-size: 1.1rem;
}
</style>