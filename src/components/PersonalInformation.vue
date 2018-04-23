<template>
    <div>
        <div class="main-form">
            <div class="form-section">
                <h3 class="form-section-head">Personal Information</h3>
                <div class="form-section-body">
                    <div class="row">
                        <div class="col-sm-4">
                            <FormInput
                                    compId="first-name"
                                    label="First Name"
                                    stateName="firstName"
                                    type="text"
                                    placeholder="Enter your first name"
                                    required="required|alpha">
                            </FormInput>
                        </div>
                        <div class="col-sm-4">
                            <FormInput
                                    compId="middle-name"
                                    label="Middle Name"
                                    stateName="middleName"
                                    type="text"
                                    placeholder="Enter your middle name" required="">
                            </FormInput>
                        </div>
                        <div class="col-sm-4">
                            <FormInput
                                    compId="last-name"
                                    label="Last Name"
                                    stateName="lastName"
                                    type="text"
                                    placeholder="Enter your last name" required="required|alpha">
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
                                    placeholder="Enter your primary degree" required="required|alpha">
                            </FormInput>
                        </div>
                        <div class="col-sm-6">
                            <FormInput
                                    compId="email"
                                    label="Email Address"
                                    stateName="email"
                                    type="email"
                                    placeholder="Enter your primary email" required="required|email">
                            </FormInput>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-section">
                <h3 class="form-section-head">Contact Information</h3>
                <div class="form-section-body">
                    <div class="row">
                        <div class="col-sm-12">
                            <FormInput
                                    compId="company"
                                    label="Organization/Company"
                                    stateName="company"
                                    type="text"
                                    placeholder="Enter your organization's name" required="">
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
                                    placeholder="" required="required">
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
                                    placeholder=""
                                    required="">
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
                                    placeholder="" required="required">
                            </FormInput>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="state">State</label>
                                <select class="custom-select" id="state" name="state" v-model="state.personalInfo.state"
                                        @click="updateState('state')">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="item in state.stateList" :value="item.abbreviation">{{ item.name }}
                                    </option>
                                </select>

                            </div>
                        </div>
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="country">Country</label>
                                <select class="custom-select" id="country" name="country"
                                        v-model="state.personalInfo.country" @click="updateState('country')">
                                    <option disabled value="">Please select one</option>
                                    <option v-for="item in state.countryList" :value="item.abbreviation">{{ item.name }}
                                    </option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-4">
                            <FormInput
                                    compId="zip"
                                    label="Zip/Postal Code"
                                    stateName="zip"
                                    type="text"
                                    placeholder="" required="required|numeric">
                            </FormInput>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <FormInput
                                    compId="phone"
                                    label="Phone"
                                    stateName="phone"
                                    type="text"
                                    placeholder="Enter your primary phone number" required="required">
                            </FormInput>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <br/>
                <router-link style='float:right' class="btn btn-info" to="/GuestTickets">
                    Next <small>(Guest Tickets)</small>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import FormInput from './FormField'
    import {mapGetters} from 'vuex';

    export default {
        computed: mapGetters({
            state: 'getState'
        }),
        components: {
            FormInput
        },
        mounted: function () {

        },
        methods: {
            updateState(exp) {
                this.$store.commit('updatePersonalInfo', this.state, exp);
                this.$store.commit('fieldCompleted', exp);
            }
        },
    }
</script>
<style>

    .help-block {
        margin-top: 5px;
    }
</style>
