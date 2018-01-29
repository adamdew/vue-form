<template>
    <div class="container">

        <div class="form-section">
            <h2 class="form-section-head">Personal Information</h2>
            <div class="form-section-body">
                <div class="row">
                    <div class="col-sm-4">
                        <FormInput
                                compId="first-name"
                                label="First Name"
                                stateName="firstName"
                                type="text"
                                placeholder="Enter your first name">
                        </FormInput>
                    </div>
                    <div class="col-sm-4">
                        <FormInput
                                compId="middle-name"
                                label="Middle Name"
                                stateName="middleName"
                                type="text"
                                placeholder="Enter your middle name">
                        </FormInput>
                    </div>
                    <div class="col-sm-4">
                        <FormInput
                                compId="last-name"
                                label="Last Name"
                                stateName="lastName"
                                type="text"
                                placeholder="Enter your last name">
                        </FormInput>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-6">
                        <FormInput
                                compId="degree"
                                label="Degree"
                                stateName="degree"
                                type="text"
                                placeholder="Enter your primary degree">
                        </FormInput>
                    </div>
                    <div class="col-sm-6">
                        <FormInput
                                compId="phone"
                                label="Phone Number"
                                stateName="phone"
                                type="text"
                                placeholder="Enter your primary phone number">
                        </FormInput>
                    </div>
                </div>
            </div>
        </div>
        <div class="form-section">
            <h2 class="form-section-head">Contact Information</h2>
            <div class="form-section-body">
                <div class="row">
                    <div class="col-sm-12">
                        <FormInput
                                compId="company"
                                label="Organization/Company"
                                stateName="company"
                                type="text"
                                placeholder="Enter your organization's name">
                        </FormInput>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <FormInput
                                compId="address1"
                                label="Street Line 1"
                                stateName="address1"
                                type="text"
                                placeholder="">
                        </FormInput>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <FormInput
                                compId="address2"
                                label="Street Line 2"
                                stateName="address2"
                                type="text"
                                placeholder="">
                        </FormInput>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <FormInput
                                compId="city"
                                label="City"
                                stateName="city"
                                type="text"
                                placeholder="">
                        </FormInput>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <FormInput
                                compId="city"
                                label="City"
                                stateName="city"
                                type="text"
                                placeholder="">
                        </FormInput>
                    </div>
                    <div class="col-sm-4">
                        <FormInput
                                compId="city"
                                label="City"
                                stateName="city"
                                type="text"
                                placeholder="">
                        </FormInput>
                    </div>
                    <div class="col-sm-4">
                        <FormInput
                                compId="city"
                                label="City"
                                stateName="city"
                                type="text"
                                placeholder="">
                        </FormInput>
                    </div>
                </div>
            </div>
        </div>
        <FormControl/>
    </div>
</template>

<script>

    import FormControl from './FormControl'
    import FormInput from './FormInput'
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters({
            state: 'getState'
        }),
        components: {
            FormControl,
            FormInput
        },
    }
</script>
<style>
    .form-section {
        margin-top: 10px;
    }

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
</style>