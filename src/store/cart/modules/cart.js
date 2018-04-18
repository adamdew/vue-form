const state = {
    promoCode: {
        code: null,
        description: null,
        value: null,
        valid: false
    },
    cartItemList: []
}

const mutations = {
    'UPDATE_PROMO_CODE' (state, promoCode) {
        state.promoCode = promoCode;
    },
    'UPDATE_CART' (state, product) {
        const record = state.cartItemList.find(element => element.id == product.id);

        if (record) {
            if (false) {
                record.quantity += quantity;
            } else {
                record.quantity = product.quantity;
            }
        } else {
            state.cartItemList.push(product);
        }
    },
    'SET_CART' (state, productList) {
        if (productList) {
            state.cartItemList = productList;
        }
    },
    'REMOVE_CART_ITEM' (state, {item}) {
        const record = state.cartItemList.find(element => element.id == item.id);
        state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
    }
}

const actions = {
    clearCart: ({commit}) => {
        commit('SET_CART', []);
    }
}

const getters = {
    cartItemList: (state) => {
        return state.cartItemList;
    },
    cartValue: (state) => {
        let res = 0;
        state.cartItemList.map((item, idx) => {
            res += item.price * item.quantity;
        });

        if (state.promoCode.valid) {
            res += state.promoCode.value
        }

        return res;
    },
    getPromoCode: (state) => {
        return state.promoCode;
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}