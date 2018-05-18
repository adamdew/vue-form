<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Company Details</h2>
        </div>
        <div class="panel-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'control': true }">
                    <label for="company_name" class="col-sm-3 control-label text-right">Company Name:</label>
                    <div class="col-sm-7">
                        <input  id="company_name"
                                data-vv-as="company name"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('company_name') }"
                                name="company_name"
                                type="text"
                                v-model="CompanyInfo.company_name"
                        >
                        <span
                                v-show="errors.has('company_name')"
                                class="help is-danger">{{ errors.first('company_name') }}</span>
                    </div>
                </div>
                <div class="form-group" :class="{ 'control': true }">
                    <label for="company_website" class="col-sm-3 control-label text-right">Company Website:</label>
                    <div class="col-sm-7">
                        <input  id="company_website"
                                data-vv-as="company website"
                                v-validate="'required|url'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('company_website') }"
                                name="company_website"
                                type="text"
                                v-model="CompanyInfo.company_website"
                        >
                        <span v-show="errors.has('company_website')"
                              class="help is-danger">{{ errors.first('company_website') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="address_line_1" class="col-sm-3 control-label text-right">Address Line 1:</label>
                    <div class="col-sm-7">
                        <input
                                data-vv-as="address line 1"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('address_line_1') }"
                                name="address_line_1"
                                type="text"
                                v-model="CompanyInfo.address_line_1"
                        >
                        <span v-show="errors.has('address_line_1')"
                              class="help is-danger">{{ errors.first('address_line_1') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="address_line_2" class="col-sm-3 control-label text-right">Address Line 2:</label>
                    <div class="col-sm-7">
                        <input  id="address_line_2"
                                data-vv-as="address line 2"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('address_line_2') }"
                                name="address_line_2"
                                type="text"
                                v-model="CompanyInfo.address_line_2"
                        >
                        <span v-show="errors.has('address_line_1')"
                              class="help is-danger">{{ errors.first('address_line_2') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="city" class="col-sm-3 control-label text-right">City:</label>
                    <div class="col-sm-7">
                        <input  id="city"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('city') }"
                                name="city"
                                type="text"
                                v-model="CompanyInfo.city"
                        >
                        <span v-show="errors.has('city')"
                              class="help is-danger">{{ errors.first('city') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="state" class="col-sm-3 control-label text-right">State:</label>
                    <div class="col-sm-7">
                        <select id="state"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('city') }"
                                name="state"
                                v-model="CompanyInfo.state"
                        ></select>
                        <span v-show="errors.has('state')"
                              class="help is-danger">{{ errors.first('state') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="zipcode" class="col-sm-3 control-label text-right">Zip/Postal Code:</label>
                    <div class="col-sm-7">
                        <input  id="zipcode"
                                v-validate="'required|numeric'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('zipcode') }"
                                name="zipcode"
                                type="text"
                                v-model="CompanyInfo.zipcode"
                        >
                        <span v-show="errors.has('zipcode')"
                              class="help is-danger">{{ errors.first('zipcode') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="competitors" class="col-sm-3 control-label text-right">Competitors:</label>
                    <div class="col-sm-7">
                        <input  id="competitors"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('competitors') }"
                                name="competitors"
                                type="text"
                                v-model="CompanyInfo.competitors"
                        >
                        <span style="font-size: 75%; font-style: italic">(We ask for this information to try and place competitors’ booths away from one another. If you leave this blank, your company may be placed by a competitor.)</span>
                        <span v-show="errors.has('competitors')"
                              class="help is-danger">{{ errors.first('competitors') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="company_information" class="col-sm-3 control-label text-right">Company Description:</label>
                    <div class="col-sm-7">
                        <textarea
                                id="company_information"
                                data-vv-as="company description"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('company_information') }"
                                name="company_information"
                                type="text"
                                v-model="CompanyInfo.company_information"
                        ></textarea>
                        <span style="font-size: 75%; font-style: italic">Please enter a short company description (about 100 words) for your company listing.</span>
                        <span v-show="errors.has('company_information')"
                              class="help is-danger">{{ errors.first('company_information') }}</span>
                    </div>
                </div>

                <div class="form-group" :class="{ 'control': true }">
                    <label for="company_logo" class="col-sm-3 control-label text-right">Company Logo:</label>
                    <div class="col-sm-7">
                        <input type="file" name="company_logo" id="company_logo">
                        <span style="font-size: 75%; font-style: italic">Logo must either be JPEG or PNG</span>
                        <span v-show="errors.has('company_logo')"
                              class="help is-danger">{{ errors.first('company_logo') }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'CompanyInfo',
        inject: ['$validator'],
        computed: {
            ...mapState({
                CompanyInfo: state => state.CompanyInfo
            })
        }
    }

</script>