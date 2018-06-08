import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes.js';


Vue.use(Router)

export default new Router({
    mode: 'history',
    base: '/registration-beta-v2',
    routes,
    linkActiveClass: "active", // active class for non-exact links.
    linkExactActiveClass: "active" // active class for *exact* links.
})
