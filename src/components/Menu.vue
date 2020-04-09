// Menu
<template>
    <div class="menu" @blure="close">
        <div class="menu_header">
            <Button @click="toggle"
                    v-if="user"
                    class="account-btn">
                    <Avatar :user="user" size="65px"/>
            </Button>
        </div>
        <ul v-if="menuExpanded" class="menu_list">
            <li>
                <Button class="menu_list__item" @click="logout">Logout</Button>
            </li>
            <li v-if="createArticle">
                <router-link class="menu_list__item" to="/new-article/">Create New Article</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from './atoms/Button.vue'
import Avatar from './atoms/Avatar.vue';

export default {
    data: () => {
        return {
            menuExpanded: false,
            isMobile: false
        }
    },
    computed: {
        ...mapState('flags', ['createArticle']),
        ...mapState('auth', ['user'])
    },
    methods: {
        ...mapActions('auth', ['logout']),
        open() {
            setTimeout(() => {
                document.addEventListener('click', this.toggle, false);
            }, 250);
        },
        close() {
            document.removeEventListener('click', this.toggle, false);
        },
        toggle() {
            if(this.menuExpanded) {
                this.close();
            } else {
                this.open();
            }

            this.menuExpanded = !this.menuExpanded;
        }
    },
    components: {
        Avatar,
        Button
    }
}
</script>

<style>
.menu {
    position: relative;
}

.menu_header {
    display: flex;
    align-items: center;
}

.menu_list {
    width: max-content;
    padding: var(--gap-1) 0;
    border-radius: var(--radius);
    min-width: 100%;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: calc(100% + var(--gap-1));
    background-color: var(--white-color);
    right: 0;
    list-style: none;
    margin: 0;
    border: 1px solid var(--primary-color-2);
    box-shadow: 0 0 5px 0 var(--primary-color-2);
}

.menu_list li .menu_list__item {
    padding: var(--gap-1) var(--gap-2);
    display: block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: var(--primary-color-2);
    border: none;
}

.menu_list li:hover,
.menu_list li:hover {
    display: block;
    width: 100%;
    background-color: var(--grey-color-1);
}

.menu_list li:hover .menu_list__item:not(disabled) {
    color: var(--primary-color-2-shade);
    box-shadow: none;
    border: none;
}

.account-btn {
    padding: 0;
    border-radius: 50%;
}
</style>