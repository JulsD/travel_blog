// CommentForm
<template>
    <div class="comment_form_wrapper">
        <transition name="fade">
            <Button style-type="link"
                    type="button"
                    class="comment_form_toggler"
                    @click="toggleCommentForm" 
                    v-if="!expanded">Leave a Comment</Button>
        </transition>
        <transition name="expand">
            <form class="comment_form" 
                  @submit.prevent="addComment"
                  v-if="expanded">
                <fieldset>
                    <legend class="visually-hidden">Leave a comment</legend>
                    <label for="comment_author" class="visually-hidden">Your name</label>
                    <input id="comment_author"
                            disabled
                            :value="user.name"/>
                    <label for="comment_body" class="visually-hidden">Comment text</label>
                    <textarea rows="5" 
                              id="comment_body" 
                              v-model="comment"/>
                </fieldset>
                <Button style-type="secondary" type="button" @click="toggleCommentForm">Cancel</Button>
                <Button type="submit" :disabled="!isValid">Add</Button>
            </form>
        </transition>
    </div>
</template>

<script scoped>
import Button from './atoms/Button';
import { mapActions } from 'vuex';

export default {
    data: () => ({
        expanded: false,
        comment: ''
    }),
    props: {
        articleId: {
            type: [String, undefined],
            default: '',
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    },
    computed: {
        isValid() {
            return this.comment ? true : false;
        }
    },
    methods: {
        ...mapActions('comments', ['createComment']),
        addComment() {
            let newComment = {
                body: this.comment,
                author_name: this.user.name,
                article_id: this.articleId
            }

            this.createComment(newComment);
            this.toggleCommentForm();
        },
        toggleCommentForm(){
            this.expanded = !this.expanded;
            if (!this.expanded) this.comment = ''
        }
    },
    components: {
        Button
    }
}
</script>

<style scoped>
.comment_form_wrapper {
    margin: 0 0 var(--gap-2);
    display: flex;
    flex-direction: column;
    position: relative;
    min-height: var(--gap-4);
}

.comment_form {
    padding: 0 0 var(--gap-2);
    text-align: right;
    display: inline-block;
}

.comment_form_toggler {
    justify-self: flex-end;
    margin-left: auto;
    font-size: .9rem;
    position: absolute;
    top: 0;
    right: 0;
}

.comment_form fieldset {
    text-align: left;
    display: flex;
    flex-direction: column;
    border: none;
    padding: 0;
    margin: 0 0 var(--gap-3);
}

.comment_form input,
.comment_form textarea {
    margin-bottom: var(--gap-2);
}

.comment_form textarea {
    width: 100%;
}

.comment_form input:last-child,
.comment_form textarea:last-child {
    margin-bottom: 0;
}
</style>