import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './cart/actions'
import * as getters from './cart/getters'
import CompanyInfo from './cart/modules/company-info'
import Payment from './cart/modules/payment'
import Cart from './cart/modules/cart'

Vue.use(Vuex)

function builder(data) {

    return new Vuex.Store({
        state: data,
        actions,
        getters,
        modules: {
            CompanyInfo,
            Payment,
            Cart
        },
        debug: true
    });
}

export default builder;