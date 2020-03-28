// ArticleShort.component.vue
<template>
  <router-link :to="{ name: 'article', params: { id: article.id } }" class="article-preview">
    <header class="article-header">
        <h1 class="article-title">{{article.title}}</h1>
        <span class="article-date">{{article.created_at}}</span>
    </header>
    <p class="article-description">{{article.description}}</p>
    <span class="button article-more">Read more</span>
  </router-link>
</template>

<script>
export default {
    props: {
        'article': {
            type: Object,
            required: true
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
    margin-bottom: var(--gap-4);
    padding: var(--gap-3) var(--gap-4);
    border: 1px solid var(--primary-color-2);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--primary-color-2-tint);
    transition: box-shadow .3s ease-out;
}

.article-preview:last-child {
    margin-bottom: 0;
}

.article-preview:hover {
    box-shadow: 0 0 3px 2px var(--grey-color);
}

.article-header {
    margin-bottom: var(--gap-2);
}

.article-title {
    margin: var(--gap-1) 0;
    color: var(--text-color-dark);
    font-size: 1.2rem;
}

.article-date {
    color: var(--primary-color-2-shade);
    font-size: .9rem;
}

.article-description {
    margin-bottom: var(--gap-1);
    padding: var(--gap-1);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--primary-color-1-tint);
}

.article-more {
    display: inline-block;
    padding: var(--gap-1);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--secondary-color-1);
    transition: background-color .3s ease-out;
}

.article-more:hover {
    background-color: var(--secondary-color-2);
}
</style>