// EditorField.vue
<template>
    <div class="editor-field_wrapper">
        <input ref="input"
            type="text"
            v-bind="$attrs"
            :value="value"
            :disabled="!active"
            @enter="save"
            @input="handleInput" />
        <Button v-if="!active" 
                type="button"
                @click="edit"
                styleType="link"
                class="editor-field_toggler editor-field_toggler_open">
            <span class="icon-pencil"></span> 
            <span class="visually-hidden">Edit</span> 
        </Button>
        <Button v-if="active"
                type="button"
                styleType="link"
                @click="save"
                class="editor-field_toggler">
            <span class="icon-checkmark"></span> 
            <span class="visually-hidden">Save</span>
        </Button>
        <Button v-if="active"
                type="button"
                styleType="link"
                @click="cancel"
                class="editor-field_toggler">
            <span class="icon-cross"></span> 
            <span class="visually-hidden">Cancel</span>
        </Button>
    </div>
</template>

<script>
import Button from './atoms/Button';
export default {
    emits: [ 'input', 'save' ],
    data() {
        return {
            active: false,
            editorValue: ''
        }
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    props: {
        value: {
            type: String,
            default: ''
        }
    },
    methods: {
        toggleActive() {
            this.active = !this.active;
        },
        handleInput(event) {
            this.$emit('input', event.target.value)
            this.editorValue = event.target.value;
        },
         save() {
            this.toggleActive();
            this.$emit('save', this.editorValue);
        },
        edit() {
            this.toggleActive();
            this.$refs.input.focus();
        },
        cancel() {
            this.toggleActive();
            this.editorValue = this.value;
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
.editor-field_wrapper {
    display: flex;
    align-items: baseline;
}

.editor-field_wrapper .editor-field_toggler {
    flex: 0 0 auto;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--gap-4);
    width: var(--gap-4);
    margin-left: var(--gap-1);
}
</style>