// ArticleForm
<template>
    <form class="article_form" @submit.prevent="onSubmit()">
        <legend class="visually-hidden">Article Form</legend>

        <fieldset>
            <legend>Preview Info</legend>
            <div class="form-pare">
                <label for="article_title" class="required">Title</label>
                <input type="text"
                       :class="{'not-valid': showValidity && !title, 'cyrillic': this.fontType === 'cyrillic'}"
                       id="article_title"
                       v-model="title"
                       required />
            </div>

            <div class="form-pare">
                <label for="article_description">Description</label>
                <textarea id="article_description" v-model="description" :class="{'cyrillic': this.fontType === 'cyrillic'}" />
            </div>
        </fieldset>

        <fieldset>
            <legend class="required">Content of the article</legend>
            <QuillEditor
                v-model="content"
                :class="{'not-valid': showValidity && !content, 'cyrillic': this.fontType === 'cyrillic'}"></QuillEditor>
        </fieldset>

        <footer>
            <span class="article_footer_border"></span>
            <span class="article_footer_content">{{user.name}}</span>
        </footer>
        
        <div class="article_form_actions">
            <Notification type="warning">
                Editing and draft features are in development.
            </Notification>
            <Button type="submit">Add article</Button>
        </div>
    </form>
</template>

<script>
import Button from './atoms/Button';
import QuillEditor from './QuillEditor';
import Notification from './atoms/Notification';
import { mapState, mapActions } from 'vuex';
import { isCyrillic } from '../services/font.service';

export default {
    data: () => ({
        title: '',
        description: '',
        content: null,
        showValidity: false
    }),
    props: {
        article: {
            type: Object,
            default: null
        }
    },
    created() {
        if(this.article) {
            this.initFromArticleProp();
        } else {
            this.initFromStorage();
        }
    },
    watch:{
        title(newTitle) {
            const newArticleDruft = JSON.stringify({...{}, ...this.getArticleDruftFromStorage(), ...{title: newTitle}});
            localStorage.setItem('articleDruft', newArticleDruft);
        },
        description(newDescription) {
            const newArticleDruft = JSON.stringify({...{}, ...this.getArticleDruftFromStorage(), ...{description: newDescription}});
            localStorage.setItem('articleDruft', newArticleDruft);
        },
        content(newContent) {
            const newArticleDruft = JSON.stringify({...{}, ...this.getArticleDruftFromStorage(), ...{content: newContent}});
            localStorage.setItem('articleDruft', newArticleDruft);
        }
    },
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('articles', ['articles']),
        fontType() {
            if(isCyrillic(this.title)) {
                return 'cyrillic';
            } else {
                return 'latin';
            }
        }
    },
    components: {
        Button,
        QuillEditor,
        Notification
    },
    methods: {
        ...mapActions('article', ['createArticle']),
        async onSubmit() {
            const vm = this;

            if(this.title && this.content) {
                const article = {
                    title: vm.title,
                    description: vm.description,
                    content: JSON.stringify(vm.content)
                };

                try {
                    let result = await this.createArticle(article);
                } catch(err) {
                    alert('Something went wrong. Try one more time latter.');
                    return;
                }
                this.clearStorage();
                this.$router.push({ name: 'article', params: { id: result.id }});
            } else {
                this.showValidity = true;
            }
        },
        getArticleDruftFromStorage() {
            const articleDruftStr = localStorage.getItem('articleDruft');
            const articleDruft = articleDruftStr ? JSON.parse(articleDruftStr) : null;

            return articleDruft;
        },
        initFromStorage() {
            const articleDruft = this.getArticleDruftFromStorage();
                
            if(articleDruft?.title) {
                this.title = articleDruft.title
            };

            if(articleDruft?.description) {
                this.description = articleDruft.description
            };

            if(articleDruft?.content) {
                this.content = articleDruft.content
            };
        },
        clearStorage() {
            localStorage.removeItem('articleDruft');
        },
        initFromArticleProp() {
            this.title = this.article.title;
            this.description = this.article.description;
            this.content = this.article.content;
            this.fontType = this.article.fontType;
        }
    }
}
</script>

<style scoped>
.article_form fieldset {
    position: relative;
    display: flex;
    flex-direction: column;
    margin: var(--gap-3) 0;
    border: none;
    padding: var(--gap-2) var(--gap-2) var(--gap-3);
    border-radius: var(--radius);
    background-color: var(--primary-color-2-op10);
}

.article_form legend {
    font-size: 1.1rem;
    color: var(--primary-color-2-shade);
}

.article_form .form-pare input,
.article_form .form-pare textarea {
    width: 100%;
}

.article_form fieldset + button {
    margin-top: var(--gap-3);
}

#article_title {
    color: var(--text-color);
    font-size: 2rem;
    font-weight: 700;
}

#article_description {
    font-style: italic;
    color: var(--grey-color-4);
}

.article_form footer {
    margin: calc(var(--gap-2)*2) 0;
    text-align: right;
    font-size: .9rem;
    font-style: italic;
    display: flex;
    align-items: center;
}

.article_form footer .article_footer_border {
    display: block;
    content: '';
    flex: 1 1 100%;
    border-top: 1px solid var(--grey-color-3);
}

.article_form footer .article_footer_content {
    padding-left: var(--gap-1);
    flex: 0 0 auto;
}

.article_form_actions {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.article_form_actions button:not(:first-child),
.article_form_actions .notification:not(:first-child) {
    margin-left: var(--gap-2)
}
</style>