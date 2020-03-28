// Comment
<template>
  <section class="comment">
      <header>
        <h3>{{comment.author_name}}</h3>
        <div>
            <span>Created {{created_date}}</span>
            <span v-if="updated_date">Updated {{updated_date}}</span>
        </div>
      </header>
      <p>{{comment.body}}</p>
  </section>
</template>

<script>
import moment from 'moment';
import Button from '../atoms/Button';
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
                return moment(this.comment.created_at.seconds*1000).format('Do MMMM YYYY, h:mm a');
            }

            return;
        },
        updated_date() {
            if (this.comment.created_at && this.comment.updated_at && this.comment.created_at.seconds !== this.comment.updated_at.seconds) {
                return moment(this.comment.updated_at.seconds*1000).format('Do MMMM YYYY, h:mm a');
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

<style>
.comment {
    padding: var(--gap-2) 0;
    border-bottom: 1px solid var(--primary-color-1);
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
    color: var(--text-color-dark);
}

.comment p {
    font-style: italic;
}

.comment span {
    font-size: 0.7rem;
    color: var(--grey-color-3);
}
</style>