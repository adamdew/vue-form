<template>
    <div class="form-buttons">
        <div class="row">
            <div class="col-sm-12">
                <button style='float:right' class="btn btn-info" @click="nextPage">Next</button>
                <button style='float:left' class="btn btn-default" @click="previousPage">Previous</button>
            </div>
        </div>
    </div>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters({
            state: 'getState'
        }),
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
</style>