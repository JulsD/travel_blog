// ArticleShort.component.vue
<template>
  <router-link :to="{ name: 'article', params: { id: article.id } }" class="article-preview">
    <header class="article-header">
        <h1 class="article-title">{{article.title}}</h1>
        <span class="article-date">{{date}}</span>
    </header>
    <p class="article-description">{{article.description}}</p>
    <span class="article-more">More >>></span>
  </router-link>
</template>

<script>
import moment from 'moment';
export default {
    props: {
        'article': {
            type: Object,
            required: true
        }
    },
    computed: {
        date() {
            return moment(this.article.created_at.toDate()).format('D MMM YYYY, h:mm a');
        }
    }
}
</script>

<style>
.article-preview,
.article-preview:active,
.article-preview:visited {
    text-decoration: none;
    color: inherit;
}

.article-preview {
    display: block;
    margin-bottom: var(--gap-3);
    padding: var(--gap-3) var(--gap-4);
    border: 1px solid var(--grey-color-2);
    border-radius: var(--radius);
    transition: box-shadow .3s ease-out;
}

.article-preview:last-child {
    margin-bottom: 0;
}

.article-preview:hover {
    box-shadow: var(--shadow);
}

.article-header {
    margin-bottom: var(--gap-2);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
}

.article-title {
    margin: var(--gap-1) 0;
    color: var(--text-color-brand);
    font-size: 1.2rem;
}

.article-date {
    color: var(--grey-color-4);
    font-size: .9rem;
    flex: 0 0 auto;
    margin-left: auto;
}

.article-description {
    margin-bottom: var(--gap-1);
}

.article-more {
    display: block;
    text-align: right;
    font-size: .9rem;
    color: var(--primary-color-2);
}
</style>