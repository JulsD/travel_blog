import Vue from 'vue';
import VueRouter from 'vue-router';

import _ from 'lodash';

import App from './App.vue';

Vue.use(VueRouter);

new Vue({
    el: "#app",
    components: { App },
    render (h) {
      return h('App')
    }
});

