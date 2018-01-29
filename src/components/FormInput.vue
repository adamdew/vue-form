<template>
    <div class="form-group">
        <label :for="compId">{{ label }}</label>
        <input :type="type" v-model='state.personalInfo[stateName]' @keyup="updateStateNew(stateName)"
               class="form-control" :id="compId"
               :placeholder="placeholder">
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters({
            state: 'getState'
        }),
        methods: {
            updateState() {
                this.$store.commit('updatePersonalInfo', this.state);
            },
            updateStateNew(exp) {
                this.$store.commit('updatePersonalInfo', this.state, exp);
            }
        },
        props: [
            'compId',
            'label',
            'type',
            'stateName',
            'placeholder'
        ],
    }
</script>
<style>
    .form-buttons {
        margin-top: 10px;
    }
</style>