// Menu
<template>
    <div class="menu"
         ref="menu" 
         :aria-extended="menuExpanded"
         @keydown.esc="close"
         @keydown.down.prevent="handleKeyDown"
         @keydown.up.prevent="handleKeyUp">
        <div class="menu_header">
            <Button @click="toggle"
                    v-if="user"
                    ref="toggler"
                    class="account-btn">
                    <Avatar :user="user" size="65px"/>
            </Button>
        </div>
        <ul class="menu_list">
            <li>
                <Button class="menu_list__item"
                        @click="logout"
                        :tabindex="menuExpanded ? 0 : -1">Logout</Button>
            </li>
            <li v-if="createArticle">
                <router-link class="menu_list__item"
                             to="/new-article/"
                             :tabindex="menuExpanded ? 0 : -1">Create New Article</router-link>
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
            currentItem: 0,
            listItems: [],
            isMobile: false,
            menuActive: false
        }
    },
    computed: {
        ...mapState('flags', ['createArticle']),
        ...mapState('auth', ['user'])
    },
    methods: {
        ...mapActions('auth', ['logout']),
        open() {
            this.listItems = this.$refs.menu.querySelectorAll('.menu_list__item');
            this.menuExpanded = true;

            setTimeout(() => {
                document.addEventListener('click', this.toggle, false);
            }, 250);
        },
        close() {
            this.listItems = [];
            this.menuActive = false;
            this.menuExpanded = false;
            document.removeEventListener('click', this.toggle, false);
            this.$refs.toggler.$el.focus();
        },
        toggle() {
            if(this.menuExpanded) {
                this.close();
            } else {
                this.open();
            }
        },
        handleKeyDown(){
            if(this.menuExpanded) {
                if(this.menuActive) {
                        let nextIndex = this.currentItem + 1;
                        let maxIndex = this.listItems.length - 1;
                        this.currentItem = nextIndex > maxIndex ? maxIndex : nextIndex;
                    } else {
                        this.menuActive = true;
                        this.currentItem = 0;
                }

                this.listItems[this.currentItem].focus();
            }
        },
        handleKeyUp(){
            if(this.menuExpanded && this.menuActive) {
                let nextIndex = this.currentItem - 1;
                this.currentItem = nextIndex > this.listItems.length || nextIndex < 0 ? 0 : nextIndex;
                this.listItems[this.currentItem].focus();
            }
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
    visibility: hidden;
    height: 0;
    overflow: hidden;
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
.menu_list li:focus-within {
    display: block;
    width: 100%;
    background-color: var(--grey-color-1);
}

.menu_list li:hover .menu_list__item:not(disabled) {
    color: var(--primary-color-2-shade);
    box-shadow: none;
    border: none;
}

.menu[aria-extended="true"] .menu_list {
    visibility: visible;
    height: auto;
    overflow: visible;
}

.account-btn {
    padding: 0;
    border-radius: 50%;
}
</style>