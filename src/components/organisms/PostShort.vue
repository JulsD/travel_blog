// PostShort.component.vue
<template>
  <a href="/" class="post-short-link post-short-wrapper">
    <article class="post-short">
        <header class="post-short-header">
            <h1 class="post-short-title">{{title}}</h1>
            <span class="post-short-date">{{date}}</span>
        </header>
        <p class="post-short-description">{{description}}</p>
        <a href="/" class="button post-short-more post-short-link">Read more</a>
    </article>
  </a>
</template>

<script>
export default {
    data: () => {
        return {
            title: 'Top 10 tips in Newerland',
            date: new Date(),
            description: 'Short description with key points of the article Short description with key points of the article Short description with key points of the article Short description with key points of the article'
        }
    }
}
</script>

<style>
.post-short-link,
.post-short-link:active,
.post-short-link:visited {
 text-decoration: none;
 color: inherit;
}

.post-short-wrapper {
    display: block;
    margin-bottom: var(--gap-4);
}

.post-short-wrapper:last-child {
    margin-bottom: 0;
}

.post-short {
    padding: var(--gap-3) var(--gap-4);
    border-radius: calc(var(--gap-1)/2);
    border: 1px dashed var(--primary-color-1-shade); 
    transition: border-color .3s ease-out;
}

.post-short-link:hover .post-short {
   border-color: var(--primary-color-2-shade);
}

.post-short-header {
    margin-bottom: var(--gap-2);
}

.post-short-title {
    margin: var(--gap-1) 0;
    color: var(--text-color-dark);
    font-size: 1.2rem;
}

.post-short-date {
    color: var(--primary-color-2-shade);
    font-size: .9rem;
}

.post-short-description {
    margin-bottom: var(--gap-1);
    padding: var(--gap-1);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--primary-color-1-tint);
}

.post-short-more {
    display: inline-block;
    padding: var(--gap-1);
    border-radius: calc(var(--gap-1)/2);
    background-color: var(--secondary-color-1);
    transition: background-color .3s ease-out;
}

.post-short-more:hover {
    background-color: var(--secondary-color-2);
}
</style>