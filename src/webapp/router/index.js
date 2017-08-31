import Vue from 'vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Counter from '../components/Counter.vue';
import Topics from '../components/Topics.vue';
import Test from '../components/test/Test.vue';
import VueRouter from 'vue-router';
// import Meta from 'vue-meta';
Vue.use(VueRouter);
// Vue.use(Meta);
export function createRouter() {
    const router = new VueRouter({
        mode: 'history',
        base: __dirname,
        routes: [
            { path: '/', component: Home },
            { path: '/topics/:id', component: Topics },
            { path: '/counter', component: Counter },
            { path: '/about', component: () => import('../components/About.vue')},
            { path: '/test', component: () => import('../components/test/Test.vue')}
        ]
    });
    return router;
}
