// Menu
<template>
    <div class="menu">
        <div class="menu_header">
            <div class="portret" v-if="user"><img :src="user.image" :alt="user.name"></div>
            <Button @click="menuExpanded = !menuExpanded">
                <span v-if="!menuExpanded">Open Menu</span>
                <span v-if="menuExpanded">Close Menu</span>
            </Button>
        </div>
        <ul v-if="menuExpanded" class="menu_list">
            <li>
                <Button style-type='link' @click="logout">Logout</Button>
            </li>
            <li v-if="createArticle">
                <router-link class="link" to="/new-article/">Create New Article</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Button from '../atoms/Button.vue'

export default {
    data: () => {
        return {
            menuExpanded: false,
            authExpanded: false,
            isMobile: false
        }
    },
    computed: {
        ...mapState('auth', ['user']),
        ...mapState('flags', ['createArticle']),
    },
    methods: {
        ...mapActions('auth', ['logout'])
    },
    components: {
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
.menu_header .portret {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: var(--gap-2);
}

.menu_header .portret img {
    display: block;
    max-width: 100%;
    max-height: 100%;
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

.menu_list li .link,
.menu_list li .btn.btn_link {
    padding: var(--gap-1) var(--gap-2);
    display: block;
    width: 100%;
    text-align: right;
    text-decoration: none;
    color: var(--primary-color-2);
}

.menu_list li:hover,
.menu_list li:hover {
    display: block;
    width: 100%;
    background-color: var(--grey-color-1);
}

.menu_list li:hover .link,
.menu_list li:hover .btn.btn_link:not(disabled) {
    color: var(--primary-color-2-shade);
}
</style>