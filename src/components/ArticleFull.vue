// ArticleFull.component.vue
<template>
  <article class="article">
        <header class="article_header">
            <h1 class="article_title">{{article.title}}</h1>
            <span class="article_date">{{date}}</span>
        </header>
        <p class="article_description">{{article.description}}</p>
        <section v-if="article.content">
            <QuillInterpreter :data="content"/>
        </section>
        <footer>
            <span class="article-footer-border"></span>
            <span class="article-footer-content">{{article.author && article.author.name || 'Unsigned'}}</span>
        </footer>
    </article>
</template>

<script>
import QuillInterpreter from './QuillInterpreter';
import moment from 'moment';
export default {
    props: {
        article: {
            type: Object,
            required: true
        }
    },
    computed: {
        date() {
            if (this.article && this.article.created_at) {
                return moment(this.article.created_at.seconds*1000).format('D MMM YYYY, h:mm a');
            }
            return;
        },
        content() {
            return JSON.parse(this.article.content);
        }
    },
    components: {
        QuillInterpreter
    }
}
</script>

<style>
article {
    text-align: justify;
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
    flex-direction: column;
}

.article_title {
    color: var(--text-color);
    font-size: 2rem;
    margin: 0;
}

.article_date {
    color: var(--grey-color-3);
    font-size: .9rem;
}

.article_description {
    font-style: italic;
    color: var(--grey-color-4);
}

article section p {
    text-indent: 2rem;
}

.article_section_title {
    font-size: 1.1rem;
}

article footer {
    margin: calc(var(--gap-2)*2) 0;
    text-align: right;
    font-size: .9rem;
    font-style: italic;
    display: flex;
    align-items: center;
}

article footer .article-footer-border {
    display: block;
    content: '';
    flex: 1 1 100%;
    border-top: 1px solid var(--grey-color-3);
}

article footer .article-footer-content {
    padding-left: var(--gap-1);
    flex: 0 0 auto;
}
</style>