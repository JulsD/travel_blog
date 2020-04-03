// CommentForm
<template>
    <div class="comment_form_wrapper">
        <transition name="fade">
            <Button style-type="link"
                    type="button"
                    class="comment_form_toggler"
                    @click="toggleCommentForm" 
                    v-if="isLoggedIn && !expanded">Leave a Comment</Button>
        </transition>
        <transition name="expand">
            <form class="comment_form" 
                @submit.prevent="addComment"
                v-if="isLoggedIn && expanded">
                <fieldset>
                    <legend class="visually-hidden">Leave a comment</legend>
                    <label for="comment_author" class="visually-hidden">Your name</label>
                    <Editor id="comment_author"
                            @save="saveCommentAuthorName"
                            :value="authorName"/>
                    <label for="comment_body" class="visually-hidden">Comment text</label>
                    <textarea rows="5" id="comment_body" v-model="comment"/>
                </fieldset>
                <Button style-type="secondary" type="button" @click="toggleCommentForm">Cancel</Button>
                <Button type="submit">Add</Button>
            </form>
        </transition>
        
        <p class="comment_form--follback" v-if="!isLoggedIn">
            <!-- Sign Up
            or  -->
            <Button style-type="link" @click="login">Login with Google</Button>
            to leave a comment
        </p>
    </div>
</template>

<script scoped>
import Button from './atoms/Button';
import Editor from './Editor';
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({
        expanded: false,
        comment: '',
        authorName: ''
    }),
    props: {
        article_id: {
            type: String
        }
    },
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn'])
    },
    watch: {
        user() {
            return this.authorName = this.user && this.user.name || null;
        }
    },
    methods: {
        ...mapActions('auth', ['login']),
        ...mapActions('comments', ['createComment']),
        addComment() {
            let newComment = {
                body: this.comment,
                author: {
                    name: this.authorName,
                    user_id: this.user.id
                },
                article_id: this.article_id
            }
            this.createComment(newComment);
            this.toggleCommentForm()
        },
        toggleCommentForm(){
            this.expanded = !this.expanded;
            if (!this.expanded) this.comment = ''
        },
        saveCommentAuthorName(value){
            this.authorName = value;
        }
    },
    components: {
        Button,
        Editor
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

.comment_form .editor_wrapper,
.comment_form textarea {
    margin-bottom: var(--gap-2);
}

.comment_form textarea {
    width: 100%;
}

.comment_form .editor_wrapper:last-child,
.comment_form textarea:last-child {
    margin-bottom: 0;
}

.comment_form--follback {
    display: block;
    text-align: center;
    color: var(--grey-color-5);
    font-size: .9rem;
}
</style>