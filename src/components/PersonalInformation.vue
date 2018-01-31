<template>
    <div>
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
                                placeholder="Enter your middle name" required="notrequired">
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
                                placeholder="Enter your primary email" required="required">
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
                                placeholder="Enter your organization's name" required="notrequired">
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
                                placeholder="" required="not required">
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
                                    @click="updateState('state')" v-validate="'required'">
                                <option disabled value="">Please select one</option>
                                <option v-for="item in state.stateList" :value="item.abbreviation">{{ item.name }}
                                </option>
                            </select>
                            <div v-show="errors.has('state')" class="help-block alert alert-danger">
                                <small> {{ errors.first('state') }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-4">
                        <div class="form-group">
                            <label for="country">Country</label>
                            <select class="custom-select" id="country" name="country"
                                    v-model="state.personalInfo.country" @click="updateState('country')"
                                    v-validate="'required'">
                                <option disabled value="">Please select one</option>
                                <option v-for="item in state.countryList" :value="item.abbreviation">{{ item.name }}
                                </option>
                            </select>
                            <div v-show="errors.has('country')" class="help-block alert alert-danger">
                                <small> {{ errors.first('country') }}</small>
                            </div>
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
            }
        },
    }
</script>
<style>

    .help-block {
        margin-top: 5px;
    }
</style>