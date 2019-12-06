import Vue from 'vue'
import Router from 'vue-router';

import HelloWorld from './components/HelloWorld.vue';
import SingleMovie from './components/SingleMovie.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: HelloWorld},
        {path: '/movies/:id', component: SingleMovie, name: 'single'},
      ]
}) 