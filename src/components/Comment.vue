// Comment
<template>
  <section class="comment">
      <header>
        <h3>{{comment.author_name}}</h3>
        <span>{{created_date}}</span>
      </header>
      <p>{{comment.body}}</p>
  </section>
</template>

<script>
import moment from 'moment';
import Button from './atoms/Button';
import { mapState, mapActions } from 'vuex';

export default {
    props: {
        comment: {
            type: Object
        }
    },
    computed: {
        created_date() {
            if (this.comment.created_at) {
                return moment(this.comment.created_at.seconds*1000).format('D MMM YYYY, h:mm a');
            }

            return;
        }
    },
    components: {
        Button
    },
    methods: {
        incrementLikes() {},
        incrementDislikes() {}
    }
}
</script>

<style scoped>
.comment {
    padding: var(--gap-2);
    background-color: var(--grey-color-1);
    border-radius: var(--radius);
    margin-bottom: var(--gap-2);
}

.comment:last-child {
    margin-bottom: 0;
}

.comment header {
    display: flex;
    justify-content: space-between;
}

.comment h3,
.comment p {
    font-size: 0.9rem;
    margin: 0 0 var(--gap-1);
}

.comment h3 {
    color: var(--text-color-brand-dark);
}

.comment p {
    font-style: italic;
}

.comment span {
    font-size: 0.9rem;
    color: var(--grey-color-4);
}
</style>