// QuillEditor.vue
<template>
    <div class="editor-wrapper">
        <div ref="editor">
            <slot></slot>        
        </div>
    </div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

export default {
    model: {
        prop: 'value',
        event: 'input'
    },
    emits: [ 'input' ],
    data: () => ({
        ediot: null,
        toolbarOptions: [
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            [{ 'color': ['#414545', '#31a097', '#b0e7e3', '#224e49']}],
            ['bold', 'italic', 'underline', 'strike'],

            [{ 'list': 'ordered'}, { 'list': 'bullet' }],
            ['link', 'blockquote', 'code-block'],
            [{ 'indent': '-1'}, { 'indent': '+1' }, { 'direction': 'rtl' }, { 'align': [] }],
            ['clean'],
            ['image', 'video']
        ],
        historyOptions: {
            delay: 2000,
            maxStack: 500,
            userOnly: true
        },
        editorData: null
    }),
    props: {
        placeholder: {
            type: String,
            default: 'Empty your mind, breath ... and start writing'
        },
        value: {
            type: Object,
            default: null
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.initEditor();
        });
    },
    methods: {
        initEditor() {
            this.quill = new Quill(this.$refs.editor, {
                modules: {
                    toolbar: this.toolbarOptions,
                    history: this.historyOptions
                },
                placeholder: this.placeholder,
                theme: 'snow'
            });

            const Delta = Quill.import('delta');
            this.editorData = new Delta();

            this.initEditorContent();
            
            this.quill.on('text-change', this.handleQuillChange);
        },
        handleQuillChange(delta) {
            this.editorData = this.editorData.compose(delta);
            let result = this.quill.getLength() > 1 ? this.quill.getContents() : null;
            this.$emit('input', result);
        },
        initEditorContent() {
            if(this.value) {
                this.quill.setContents(this.value);
            }
        }
    }
}
</script>

<style scoped>
.editor-wrapper {
    border-radius: var(--radius);
    transition: all .5s ease-in;
}

.editor-wrapper:focus-within {
    border-radius: var(--radius);
    box-shadow: var(--shadow-s);
}

.editor-wrapper .ql-container {
    font-size: var(--base-font-size);
    font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
}

.editor-wrapper.cyrillic .ql-container {
    font-family: Montserrat, Arial, Helvetica, sans-serif;
}

.editor-wrapper >>> .ql-toolbar.ql-snow,
.editor-wrapper .ql-container.ql-snow {
    border-color: var(--grey-color-2);
    background-color: var(--white-color);
}

.editor-wrapper >>> .ql-editor {
    min-height: 150px;
}

.editor-wrapper >>> .ql-toolbar.ql-snow {
    border-radius: var(--radius) var(--radius) 0 0;
}

.editor-wrapper .ql-container.ql-snow {
    border-radius: 0 0 var(--radius) var(--radius);
}

.editor-wrapper >>> .ql-snow.ql-toolbar button:hover,
.editor-wrapper >>> .ql-snow .ql-toolbar button:hover,
.editor-wrapper >>> .ql-snow.ql-toolbar button:focus,
.editor-wrapper >>> .ql-snow .ql-toolbar button:focus,
.editor-wrapper >>> .ql-snow.ql-toolbar button.ql-active,
.editor-wrapper >>> .ql-snow .ql-toolbar button.ql-active,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label:hover,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label:hover,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label.ql-active,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label.ql-active,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item:hover,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item:hover,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item.ql-selected,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
    color: var(--primary-color-2-shade);
}

.editor-wrapper >>> .ql-snow.ql-toolbar button:hover .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar button:hover .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar button:focus .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar button:focus .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar button.ql-active .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar button.ql-active .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke,
.editor-wrapper >>> .ql-snow.ql-toolbar button:hover .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar button:hover .ql-stroke-miter,
.editor-wrapper >>> .ql-snow.ql-toolbar button:focus .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar button:focus .ql-stroke-miter,
.editor-wrapper >>> .ql-snow.ql-toolbar button.ql-active .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar button.ql-active .ql-stroke-miter,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke-miter,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke-miter,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke-miter,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke-miter {
    stroke: var(--primary-color-2-shade);
}

.editor-wrapper >>> .ql-snow.ql-toolbar button:hover .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar button:hover .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar button:focus .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar button:focus .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar button.ql-active .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar button.ql-active .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label:hover .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label:hover .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item:hover .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item:hover .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar button:hover .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar button:hover .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar button:focus .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar button:focus .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar button.ql-active .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar button.ql-active .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label:hover .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-label.ql-active .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item:hover .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow.ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill,
.editor-wrapper >>> .ql-snow .ql-toolbar .ql-picker-item.ql-selected .ql-stroke.ql-fill {
    fill: var(--primary-color-2-shade);
}

.editor-wrapper >>> .ql-snow .ql-editor pre.ql-syntax {
    background-color: var(--grey-color-5);
}
</style>