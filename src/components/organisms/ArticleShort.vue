// ArticleShort.component.vue
<template>
  <a href="/" class="article-short-link article-short-wrapper">
    <article class="article-short">
        <header class="article-short-header">
            <h1 class="article-short-title">{{article.title}}</h1>
            <span class="article-short-date">{{article.created_at}}</span>
        </header>
        <p class="article-short-description">{{article.description}}</p>
        <router-link :to="{ name: 'article', params: { id: article.id } }" class="button article-short-more article-short-link">Read more</router-link>
    </article>
  </a>
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
.article-short-link,
.article-short-link:active,
.article-short-link:visited {
 text-decoration: none;
 color: inherit;
}

.article-short-wrapper {
    display: block;
    margin-bottom: var(--gap-4);
}

.article-short-wrapper:last-child {
    margin-bottom: 0;
}

.article-short {
    padding: var(--gap-3) var(--gap-4);
    border: 1px dashed transparent;
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--primary-color-2-tint);
    transition: border-color .3s ease-out;
}

.article-short-link:hover .article-short {
    border-color: var(--primary-color-2-shade);
}

.article-short-header {
    margin-bottom: var(--gap-2);
}

.article-short-title {
    margin: var(--gap-1) 0;
    color: var(--text-color-dark);
    font-size: 1.2rem;
}

.article-short-date {
    color: var(--primary-color-2-shade);
    font-size: .9rem;
}

.article-short-description {
    margin-bottom: var(--gap-1);
    padding: var(--gap-1);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--primary-color-1-tint);
}

.article-short-more {
    display: inline-block;
    padding: var(--gap-1);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--secondary-color-1);
    transition: background-color .3s ease-out;
}

.article-short-more:hover {
    background-color: var(--secondary-color-2);
}
</style>