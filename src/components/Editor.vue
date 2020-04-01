// Editor.vue
<template>
    <div class="editor_wrapper">
        <input type="text"
            v-bind="$attrs"
            :disabled="!active" />
            <Button v-if="!active" 
                    type="button"
                    @click="toggleActive"
                    styleType="link"
                    class="editor_toggler editor_toggler_open">
                <span class="icon-pencil"></span> 
                <span class="visually-hidden">Edit</span> 
            </Button>
            <Button v-if="active"
                    type="button"
                    styleType="link"
                    @click="toggleActive"
                    class="editor_toggler">
                <span class="icon-checkmark"></span> 
                <span class="visually-hidden">Save</span>
            </Button>
            <Button v-if="active"
                    type="button"
                    styleType="link"
                    @click="toggleActive"
                    class="editor_toggler">
                <span class="icon-cross"></span> 
                <span class="visually-hidden">Cancel</span>
            </Button>
        </div>
    </div>
</template>

<script>
import Button from './atoms/Button';
export default {
    data() {
        return {
            active: false
        }
    },
    methods: {
        toggleActive() {
            this.active = !this.active;
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
.editor_wrapper {
    display: flex;
    align-items: baseline;
}

.editor_wrapper .editor_toggler {
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