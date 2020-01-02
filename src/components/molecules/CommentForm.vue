// CommentForm
<template>
  <form class="comment_form" @submit.prevent="onSubmit()" v-if="isLoggedIn">
      <fieldset>
            <legend>Leave a comment</legend>
            <label for="comment_author">Your name</label>
            <input type="text" id="comment_author" v-model="this.author" required />

            <label for="comment_body">Comment to {{articleTitle}}</label>
            <textarea id="comment_body" v-model="comment.body"/>
      </fieldset>
      <Button type="submit" :onClick="onSubmit">Add comment</Button>
    </form>
    <p v-else>Sign Up or Log In to leave a comment</p>
</template>

<script>
import Button from '../atoms/Button';
import { mapState, mapActions } from 'vuex';

export default {
    data: () => ({
        comment: {
            author: '',
            body: ''
        }
    }),
    props: {
        articleTitle: {
            type: String
        },
        onSubmit: {
            type: Function
        }
    },
    computed: {
        ...mapState('auth', ['user', 'isLoggedIn']),
        author() {
            return this.user.name || this.comment.author
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