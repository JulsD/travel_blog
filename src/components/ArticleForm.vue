// ArticleForm
<template>
  <form class="article_form" @submit.prevent="onSubmit()">
      <fieldset>
            <legend>Article Form</legend>
            <label for="article_title">Article title</label>
            <input type="text" id="article_title" v-model="article.title" required />

            <label for="article_description">Article description</label>
            <textarea id="article_description" v-model="article.description" />

            <!-- <label for="article_body">Article text</label>
            <textarea id="article_body" v-model="article.body"/>

            <label for="article_url">Url</label>
            <input type="url" id="article_url" v-model="article.url"/> -->

             <div ref="editor"></div>
            <button @click="handleQuillConsole">Console result</button>
      </fieldset>
      <Button type="submit">Add article</Button>
    </form>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
import Button from './atoms/Button';
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({
        article: {
            title: '',
            description: '',
            body: '',
            url: ''
        }
    }),
    mounted: function () {
        this.$nextTick(function () {
            this.initEditor();
        })
    },
    computed: mapState('articles', ['articles']),
    components: {
        Button
    },
    methods: {
        ...mapActions('article', ['createArticle']),
        async onSubmit() {
            if(this.article.title && (this.article.description || this.article.body || this.article.url)) {
                await this.createArticle(this.article)
            }
        },
        initEditor() {
            const toolbarOptions = [
                [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                ['bold', 'italic', 'underline', 'strike'],

                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                ['blockquote', 'code-block'],
                [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                [{ 'direction': 'rtl' }],

                // [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
                // [{ 'font': [] }],
                [{ 'align': [] }],
                ['clean'],
                ['image', 'video']
            ];
            this.quill = new Quill(this.$refs.editor, {
                modules: {
                    toolbar: toolbarOptions,
                    history: {
                        delay: 2000,
                        maxStack: 500,
                        userOnly: true
                    }
                },
                placeholder: 'Empty your mind, be shapeless like water ... and start writing an awesome story',
                theme: 'snow'
            });

            const Delta = Quill.import('delta');
            this.accumulatedData = new Delta();
            this.quill.on('text-change', this.handleQuillChange);

            // this.editor.root.innerHTML = this.value;

            // this.editor.on('text-change', () => this.update());
        },
        handleQuillConsole() {
            console.log(this.quill.getContents());
            console.log(this.quill.getText());
        },
        handleQuillChange(delta) {
            this.accumulatedData = this.accumulatedData.compose(delta);
        }
    }
}
</script>

<style>
.article_form fieldset {
    display: flex;
    flex-direction: column;
    padding: var(--gap-3) 0;
    border: none;
    border-top: 2px dashed var(--primary-color-2-tint);
    border-bottom: 2px dashed var(--primary-color-2-tint);
}

.article_form fieldset + button {
    margin-top: var(--gap-3);
}

.article_form label {
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-color-brand-dark);
    margin-bottom: var(--gap-1);
}

.article_form input,
.article_form textarea {
    border-radius: var(--radius);
    border: 1px solid var(--primary-color-2-shade);
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: var(--gap-1);
    margin-bottom: var(--gap-4);
    outline: none;
}

.article_form input:last-child,
.article_form textarea:last-child {
    margin-bottom: 0;
}

.article_form input:focus,
.article_form textarea:focus {
    outline: none;
    box-shadow: 0 0 3px 2px var(--primary-color-2-dark);
}
</style>