import {createRouter, createWebHashHistory} from 'vue-router';

import Home from '../components/Home.vue';

const routes = [
    {path: '/', name: 'Home', component: Home},
    {path: '/about', name: 'About', component: () =>import('../components/About.vue')},
    {path: '/projects', name: 'Projects', component: () =>import('../components/Projects.vue')}
    
];

const router = createRouter( {
    history: createWebHashHistory(),
    routes
});

export default router;