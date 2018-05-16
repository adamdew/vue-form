import { mapFields, getField, updateField } from 'vuex-map-fields';

const state = {
    badges: []
}

const getters = {
    getField,
}

const mutations = {
    updateField,
}

export default {
    state,
    mutations,
    getters
}