// ArticleForm
<template>
    <form class="article_form" @submit.prevent="onSubmit()">
        <legend class="visually-hidden">Article Form</legend>

        <fieldset>
            <legend>Preview Info</legend>
            <div class="form-pare">
                <label for="article_title" class="required">Title</label>
                <input type="text"
                       id="article_title"
                       v-model="title"
                       required />
            </div>

            <div class="form-pare">
                <label for="article_description">Description</label>
                <textarea id="article_description" v-model="description" />
            </div>
        </fieldset>

        <!-- <fieldset v-for="(item, index) in body" :key="index">
            <legend>Section {{index + 1}}</legend>
            <Button v-if="body.length !== 1"
                    type="button"
                    styleType="link"
                    class="section_remove_btn" @click="removeSection(index)">
                <span class="visually-hidden">Remove section {{index + 1}}</span>
                <span class="icon-bin"></span>
            </Button>
            <template v-if="item.type === 'section'">
                <div class="form-pare">
                    <label :for="`section_title_${index}`">Section title</label>
                    <input type="text"
                        class="section_title"
                        :id="`section_title_${index}`"
                        v-model="item.title"/>
                </div>

                <div class="form-pare">
                    <label for="section_text" :class="{'required' : body.length == 1}">Section text</label>
                    <textarea id="section_text"
                            v-model="item.content"
                            rows="5"
                            :required="body.length == 1"/>
                </div>
            </template>
            <template v-else-if="item.type === 'image'">
                <div class="form-pare">
                    <label :for="`article_image_${index}`">Image url</label>
                    <input type="url" :id="`article_image_${index}`" v-model="item.url"/>
                </div>
                <div class="form-pare">
                    <label :for="`article_image_alt_${index}`">Image alt text</label>
                    <input type="text" :id="`article_image_alt_${index}`" v-model="item.alt"/>
                </div>
                <div class="form-pare">
                    <label :for="`article_image_deskr_${index}`">Image description</label>
                    <input type="text" :id="`article_image_deskr_${index}`" v-model="item.description"/>
                </div>
            </template>
        </fieldset>

        <div class="article_form_actions">
            <Button type="button" @click="addSection">Add section</Button>
            <Button type="button" @click="addImage">Add image</Button>
        </div> -->

        <div ref="editor"></div>
        <button @click="handleQuillConsole">Console result</button>
        
        <footer>
            <span class="article_footer_border"></span>
            <span class="article_footer_content">{{user.name}}</span>
        </footer>

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
        title: '',
        description: '',
        body: [{
            type: 'section',
            title: '',
            content: ''
        }]
    }),
    mounted: function () {
        this.$nextTick(function () {
            this.initEditor();
        })
    },
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('articles', ['articles'])
    },
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
        
        },
        // addSection() {
        //     this.body.push({
        //         type: 'section',
        //         title: '',
        //         content: ''
        //     })
        // },
        // addImage() {
        //     this.body.push({
        //         type: 'image',
        //         url: '',
        //         alt: '',
        //         description: ''
        //     })
        // },
        // removeSection(index) {
        //     this.body.splice(index, 1);
        // }
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

.section_title {
    font-size: 1.1rem;
    font-weight: 700;
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

.section_remove_btn {
    position: absolute;
    right: var(--gap-1);
    top: var(--gap-2);
    color: var(--grey-color-4);
    border-radius: 50%;
}

.section_remove_btn:hover,
.section_remove_btn:focus {
    color: var(--grey-color-5);
}
</style>