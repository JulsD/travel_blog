// ArticleFull.component.vue
<template>
  <article class="article">
        <header class="article_header">
            <h1 class="article_title">{{article.title}}</h1>
            <span class="article_date">{{date}}</span>
        </header>
        <p class="article_description">{{article.description}}</p>
        <section v-for="(section, index) in article.body" :key="index">
            <h2 class="article_section_title">{{section.title}}</h2>
            <p>{{section.content}}</p>
        </section>
    </article>
</template>

<script>
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
                return moment(this.article.created_at.toDate()).format('D MMM YYYY, h:mm a');
            }
            return;
        }
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

.article_section-title {
    font-size: 1.1rem;
}
</style>