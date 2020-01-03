// CommentForm
<template>
  <form class="comment_form" @submit.prevent="addComment" v-if="isLoggedIn">
      <fieldset>
            <legend>Leave a comment</legend>
            <label for="comment_author">Your name</label>
            <input type="text"
                   id="comment_author"
                   :value="this.user.name"
                   disabled />

            <label for="comment_body">Comment text</label>
            <textarea id="comment_body" v-model="comment.body"/>
      </fieldset>
      <Button type="submit">Create comment</Button>
    </form>
    <p v-else>Sign Up or Log In to leave a comment</p>
</template>

<script>
import Button from '../atoms/Button';
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({
        comment: {
            body: ''
        }
    }),
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn'])
    },
    methods: {
        ...mapActions('article', ['createComment']),
        addComment() {
            let newComment = {
                body: this.comment.body,
                author_name: this.user.name
            }
            this.createComment(newComment);
        }
    },
    components: {
        Button
    }
}
</script>

<style>
.comment_form fieldset {
    display: flex;
    flex-direction: column;
    padding: var(--gap-3) 0;
    border: none;
    border-top: 2px dashed var(--primary-color-2-tint);
    border-bottom: 2px dashed var(--primary-color-2-tint);
}

.comment_form fieldset + button {
    margin-top: var(--gap-3);
}

.comment_form label {
    font-size: 1rem;
    font-weight: bold;
    color: var(--text-color-dark);
    margin-bottom: var(--gap-1);
}

.comment_form input,
.comment_form textarea {
    border-radius: var(--radius);
    border: 1px solid var(--primary-color-2-shade);
    box-sizing: border-box;
    display: block;
    width: 100%;
    padding: var(--gap-1);
    margin-bottom: var(--gap-4);
    outline: none;
}

.comment_form input:last-child,
.comment_form textarea:last-child {
    margin-bottom: 0;
}

.comment_form input:focus,
.comment_form textarea:focus {
    outline: none;
    box-shadow: 0 0 3px 2px var(--primary-color-2-dark);
}
</style>