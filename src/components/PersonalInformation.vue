<template>
    <div class="container">
        <!--<div class="form-section"></div>-->
        <h2 class="form-section-head">Personal Information</h2>
        <div class="form-section-body">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="first-name">First Name</label>
                        <input type="text" v-model="state.personalInfo.firstName" class="form-control" id="first-name"
                               placeholder="Enter your first name" required>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="middle-name">Middle Name</label>
                        <input type="text" v-model="state.personalInfo.middleName" class="form-control" id="middle-name"
                               placeholder="Enter your middle name" required>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label for="last-name">Last Name</label>
                        <input type="text" v-model="state.personalInfo.lastName" class="form-control" id="last-name"
                               placeholder="Enter your last name" required>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="email">Email Address</label>
                        <input type="email" v-model="state.personalInfo.email" class="form-control" id="email"
                               placeholder="Enter your email address" required>
                    </div>
                </div>
                <div class="col-sm-6">
                    <div class="form-group">
                        <label for="phone">Phone Number</label>
                        <input type="text" v-model="state.personalInfo.phone" class="form-control" id="phone"
                               placeholder="Enter your phone number" required>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-buttons">
            <div class="row">
                <div class="col-sm-12">
                    <button style='float:right' class="btn btn-info" @click="formSectionComplete">Next</button>
                    <button style='float:left' class="btn btn-default" @click="previousPage">Previous</button>
                </div>
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
            updateState() {
                this.$store.commit('updatePersonalInfo', this.state);
            },
            nextPage() {
                this.$store.commit('nextPage');
            },
            formSectionComplete() {
                this.updateState();
                this.nextPage();
            },
            previousPage() {
                this.$store.commit('previousPage');
            },
        }
    }
</script>
<style>

    .form-section-head {
        /*border: solid 1px grey;*/
        border-radius: 4px 4px 0 0;
        padding: 10px;
        border-bottom: 1px solid transparent;
        background-color: #dddddd;
        margin: 0;
    }

    .form-section-body {
        padding: 10px;
        border: solid 1px #dddddd;
        border-radius: 0 0 4px 4px;
        border-top: 1px solid transparent;

    }

    .form-buttons {
        margin-top: 10px;
    }
</style>