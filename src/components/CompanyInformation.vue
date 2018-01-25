<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">
                <div class="form-group">
                    <label for="company-name">Company Name</label>
                    <input type="text" v-model="state.companyInfo.companyName" class="form-control" id="company-name"
                           placeholder="Enter your company's name" required>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <button style='float:right' class="btn btn-info" @click="formSectionComplete">Next</button>
                <button style='float:left' class="btn btn-default" @click="previousPage">Previous</button>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        computed: mapGetters({
            state: 'getState'
        }),
        methods: {
            updateState(){
                this.$store.commit('updateCompanyInfo', this.state);
            },
            nextPage(){
                this.$store.commit('nextPage');
            },
            formSectionComplete(){
                this.updateState();
                this.nextPage();
            },
            previousPage(){
                this.$store.commit('previousPage');
            },
        }
    }
</script>