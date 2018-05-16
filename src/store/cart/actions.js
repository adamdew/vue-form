export const addToCart = ({ commit }, product) => {
    commit('UPDATE_CART', product)
}

export const updatePromoCode = ({ commit }, promoCode) => {
    commit('UPDATE_PROMO_CODE', promoCode)
}

export const deleteFromCart = ({ commit }, product) => {
    commit('DELETE_FROM_CART', product)
}