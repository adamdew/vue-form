const state = {
    promoCode: {
        code: null,
        description: null,
        value: null,
        valid: false
    },
    cartItemList: [],
    badgeCount: null,
    freeBadgeCount: null,
    freeBadgeMaxCount: null
};

const mutations = {
    'UPDATE_PROMO_CODE'(state, promoCode) {
        state.promoCode = promoCode;
    },
    'UPDATE_CART'(state, product) {
        const record = state.cartItemList.find(element => element.id == product.id);
        if (record) {
            if (product.quantity == 0) {
                state.cartItemList.splice(state.cartItemList.indexOf(record), 1);
            } else {
                record.quantity = product.quantity;
            }
            record.ran = Date.now();
        } else {
            state.cartItemList.push(product);
        }
    },
    'SET_CART'(state, productList) {
        if (productList) {
            state.cartItemList = productList;
        }
    },
    'DELETE_FROM_CART'(state, product) {
        const record = state.cartItemList.find(element => element.id == product.id);
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
    },
    getBadgeCount: (state) => {
        let count = 0;
        state.cartItemList.map((item, idx) => {
            if (item.category === 'Badge') {
                count++
            }
        });
        return count;
    },
    getFreeBadgeCount: (state) => {
        let count = 0;
        state.cartItemList.map((item, idx) => {
            if (item.category === 'Badge' && item.price === 0) {
               count++
            }
        });
        return count;
    },
    getFreeBadgeMaxCount: (state) => {
        let count = 0;
        state.cartItemList.map((item, idx) => {
            if (item.category === 'booth' && item.quantity > 0) {
               count += item.quantity * 2;
            }
        });
        return count;
    },
    getBadges: (state) => {
        return state.cartItemList.filter(item => item.category === 'Badge');
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}