import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate'
import store from './store/index'
import Exhibitor from './components/ExhibitorRegistration'

Vue.use(Vuex);
Vue.use(VeeValidate);
Vue.config.productionTip = false

require('../node_modules/bootstrap/dist/css/bootstrap.css')
require('./assets/css/styles.css');

/* eslint-disable no-new */

Vue.use(VueResource);

var filter = require('./filters/filters')

Object.keys(filter).forEach(function (k) {
    Vue.filter(k, filter[ k ])
});

import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyDZEmf1LD0rNQ5lBeF-TiOXQnIQpUwRap8',
        libraries: 'places,drawing,visualization'
    }
});

Vue.http.options.root = 'http://www.ophmasters.com/new-exhibitor/exhibitor-endpoint.php';
Vue.http.get('data')
    .then(response => response.json())
    .then((data) => {
        new Vue({
            el: '#app',
            store: store(data),
            render: h => h(Exhibitor)
        });
    });
