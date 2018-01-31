<template>
    <div class="form-buttons">
        <transition name="component-fade" mode="out-in">
        <div v-if="state.errors.length !== 0" id="error-warning" class="row">
            <div class="col-sm-12">
                <div class="alert alert-danger" role="alert">
                    <strong>Warning!</strong> There are {{state.errors.length}} errors in your submission, please correct them before finishing.
                    <ul>
                        <li v-for="error in state.errors">{{ error.name }}</li>
                    </ul>
                </div>
            </div>
        </div>
        </transition>
        <div class="row">
            <div class="col-sm-12">
                <button style='float:right' id="next-btn" class="btn btn-info" @click="nextPage">Next</button>
                <button style='float:left' class="btn btn-default" @click="previousPage">Previous</button>
            </div>
        </div>

    </div>
</template>

<script>

    import {mapGetters} from 'vuex';
    var $ = require("jquery");

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
        },
        methods: {
            nextPage() {
                this.$store.commit('nextPage');
            },
            previousPage(){
                this.$store.commit('previousPage');
            }
        }
    }
</script>
<style>
    .form-buttons {
        margin-top: 10px;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .2s ease;
    }

    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }
</style>