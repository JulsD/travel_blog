// QuillEditor.vue
<template>
    <div ref="interpreter" class="ql-snow"></div>
</template>

<script>
import Quill from 'quill';
import 'quill/dist/quill.core.css';

export default {
    data: () => ({
        interpreter: null
    }),
    props: {
        data: {
            type: Object,
            default: null
        }
    },
    watch: {
        data: function(newDelta) {
            this.interpreter.setContents(newDelta);
        }
    },
    mounted: function () {
        this.$nextTick(function () {
            this.initInterpreter();
        })
    },
    methods: {
        initInterpreter() {
            this.interpreter = new Quill(this.$refs.interpreter, {
                readOnly: true
            });

            this.interpreter.setContents(this.data);
        }
    }
}
</script>

<style scoped>
    .ql-container.ql-snow {
        font-size: var(--base-font-size);
        font-family: 'Maven Pro', Arial, Helvetica, sans-serif;
        border: none;
        padding: 0;
    }

    .ql-snow >>> .ql-editor {
        padding: 0;
    }

    .ql-snow >>> .ql-editor pre.ql-syntax {
        background-color: var(--grey-color-5);
    }
</style>