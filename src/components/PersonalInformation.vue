<template>
    <div>
        <div class="main-form">
            <div class="form-section">
                <h3 class="form-section-head">Personal Information</h3>
                <div class="form-section-body">
                    <div class="row">
                        <div class="col-sm-4 form-group">
                            <label for="first-name">First Name*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.firstName"
                                @keyup="updateState('firstName')"
                                class="form-control"
                                id="first-name"
                                name="first-name"
                                placeholder="Enter your first name"
                                v-validate="'required|alpha_num'"
                            />
                            <div v-if="errors.first('first-name')" class="help-block alert alert-danger">
                                <small>{{ errors.first('first-name') }}</small>
                            </div>
                        </div>
                        <div class="col-sm-4 form-group">
                            <label for="middle-name">Middle Name</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.middleName"
                                @keyup="updateState"
                                class="form-control"
                                id="middle-name"
                                name="middle-name"
                                placeholder="Enter your middle name"
                                v-validate="'alpha_num'"
                            />
                            <div v-if="errors.first('middle-name')" class="help-block alert alert-danger">
                                <small>{{ errors.first('middle-name') }}</small>
                            </div>
                        </div>
                        <div class="col-sm-4 form-group">
                            <label for="last-name">Last Name*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.lastName"
                                @keyup="updateState('lastName')"
                                class="form-control"
                                id="last-name"
                                name="last-name"
                                placeholder="Enter your last name"
                                v-validate="'required|alpha_num'"
                            />
                            <div v-if="errors.first('last-name')" class="help-block alert alert-danger">
                                <small>{{ errors.first('last-name') }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 form-group">
                            <label for="degree">Degree*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.degree"
                                @keyup="updateState"
                                class="form-control"
                                id="degree"
                                name="degree"
                                placeholder="Enter your Primary Degree"
                                v-validate="'required|alpha_num'"
                            />
                            <div v-if="errors.first('degree')" class="help-block alert alert-danger">
                                <small>{{ errors.first('degree') }}</small>
                            </div>
                        </div>
                        <div class="col-sm-6 form-group">
                            <label for="email">Email*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.email"
                                @keyup="updateState"
                                class="form-control"
                                id="email"
                                name="email"
                                placeholder="Enter your Primary Email Address"
                                v-validate="'required|email'"
                            />
                            <div v-if="errors.first('email')" class="help-block alert alert-danger">
                                <small>{{ errors.first('email') }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-section">
                <h3 class="form-section-head">Contact Information</h3>
                <div class="form-section-body">
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <label for="email">Organization/Company</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.company"
                                @keyup="updateState"
                                class="form-control"
                                id="company"
                                name="company"
                                placeholder="Enter your organization's name"
                            />
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <label for="address1">Street Line 1*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.address1"
                                @keyup="updateState"
                                class="form-control"
                                id="address1"
                                name="address1"
                                placeholder=""
                                v-validate="'required'"
                            />
                            <div v-if="errors.first('address1')" class="help-block alert alert-danger">
                                <small>{{ errors.first('address1') }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <label for="address2">Street Line 2</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.address2"
                                @keyup="updateState"
                                class="form-control"
                                id="address2"
                                name="address2"
                                placeholder=""
                            />
                            <div v-if="errors.first('address2')" class="help-block alert alert-danger">
                                <small>{{ errors.first('address2') }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <label for="city">City*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.city"
                                @keyup="updateState"
                                class="form-control"
                                id="city"
                                name="city"
                                placeholder=""
                                v-validate="'required'"
                            />
                            <div v-if="errors.first('city')" class="help-block alert alert-danger">
                                <small>{{ errors.first('city') }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-6 ">
                            <div class="form-group">
                                <label for="state">State*</label>
                                <v-select
                                    id="state"
                                    name="state"
                                    v-model="state.personalInfo.state"
                                    label="name"
                                    @click="updateState"
                                    :options="state.stateList"
                                    v-validate="'required'">
                                </v-select>
                                <div v-if="errors.first('state')" class="help-block alert alert-danger">
                                    <small>{{ errors.first('state') }}</small>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="country">Country*</label>
                                <v-select
                                    id="country"
                                    name="country"
                                    v-model="state.personalInfo.country"
                                    label="name"
                                    @click="updateState"
                                    :options="state.countryList"
                                    v-validate="'required'">
                                </v-select>
                                <div v-if="errors.first('country')" class="help-block alert alert-danger">
                                    <small>{{ errors.first('country') }}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <label for="zip">Zip*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.zip"
                                @keyup="updateState"
                                class="form-control"
                                id="zip"
                                name="zip"
                                placeholder=""
                                v-validate="'required|numeric'"
                            />
                            <div v-if="errors.first('zip')" class="help-block alert alert-danger">
                                <small>{{ errors.first('zip') }}</small>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12 form-group">
                            <label for="phone">Phone*</label>
                            <input
                                type="text"
                                v-model="state.personalInfo.phone"
                                @keyup="updateState"
                                class="form-control"
                                id="phone"
                                name="phone"
                                placeholder=""
                                v-validate="'required'"
                            />
                            <div v-if="errors.first('phone')" class="help-block alert alert-danger">
                                <small>{{ errors.first('phone') }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <br/>
                <router-link style='float:right' class="btn btn-info next-btn" to="/GuestTickets">
                    Next
                    <small>(Guest Tickets)</small>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import FormInput from './FormField'
    import {mapGetters} from 'vuex';
    import vSelect from 'vue-select'
    
    export default {
        computed: mapGetters({
            state: 'getState'
        }),
        components: {
            FormInput,
            vSelect
        },
        mounted: function () {
        
        },
        methods: {
            updateState(exp) {

                this.$store.commit('updatePersonalInfo', this.state, exp);

            },
        },
        watch: {
            errors: {
                handler: function (errorBag) {
                    this.$store.commit('updateErrors', errorBag.items);
                },
                deep: true
            }
        }
    }
</script>
<style>
    .help-block {
        margin-top: 5px;
    }
</style>
