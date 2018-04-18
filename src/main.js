// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import { store } from './store'
import VeeValidate from 'vee-validate'

Vue.use(Vuex);
Vue.use(VeeValidate);
Vue.config.productionTip = false

require('../node_modules/bootstrap/dist/css/bootstrap.css')
/* Adds support for URLSearchParams() in IE*/
require('url-search-params-polyfill');
/* eslint-disable no-new */
new Vue({
    el: '#app',
    components: { App },
    template: '<App/>',
    store: store,
})
