<template>
    <div class="form-buttons">
        <transition name="component-fade" mode="out-in">
        <div id="warnings" class="row">
            <div class="col-sm-12">
                <div v-if="state.incomplete.length !== 0" class="alert alert-info" role="alert">
                    There are {{state.incomplete.length}} incomplete fields in your submission, please fill them out before finishing.
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
