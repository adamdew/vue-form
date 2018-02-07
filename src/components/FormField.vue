<template>
    <div class="form-group">
        <label :for="compId">{{ label }}</label>
        <input :type="type"
               v-model='state.personalInfo[stateName]'

               @keyup="updateState(stateName)"
               class="form-control"
               :id="compId"
               :placeholder="placeholder"
               v-validate="required"
               :name="compId"
               autofocus>
        <transition name="component-fade" mode="out-in">
            <div v-show="errors.has(compId)" class="help-block alert alert-danger">
                <small> {{ errors.first(compId) }}</small>
            </div>

        </transition>
        {{ errors }}
    </div>
</template>

<script>

    import { mapGetters } from 'vuex';
    import { Validator } from 'vee-validate';

    Validator.extend('newRule', {
        getMessage(field, params, data) {
            return (data && data.message) || "It's just not me";
        },
        validate(value) {
            if(value == 'Adam'){
                return true;
            }
            else{
                return false;
            }
        }
    });

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            getErrors: function () {
                return this.errors.items;
            },
        },
//        mounted: function(){
//            var searchFor = this.state.errors.filter(function(item){
//                return item === this.stateName;
//            });
//            if (this.state.errors.length > 0) {
//                this.reportErrors(this.stateName);
//            }
//        },
        watch: {
            getErrors: function () {

                if (this.errors.items.length > 0) {
                    this.reportErrors(this.stateName);
                }
                else {
                    this.unreportErrors(this.stateName);
                }
            }
        },
        methods: {
            updateState(name) {
                this.$store.commit('fieldCompleted', name);
            },
            reportErrors(name) {
                this.$store.commit('setErrors', name);
            },
            unreportErrors(name) {
                this.$store.commit('unSetErrors', name);
            },

        },
        props: [
            'compId',
            'label',
            'type',
            'stateName',
            'placeholder',
            'required'
        ],
    }
</script>
<style>
    .form-buttons {
        margin-top: 10px;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .3s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>