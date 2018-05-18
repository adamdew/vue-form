<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Payment Details</h2>
        </div>
        <div class="panel-body">
            <div class="form-horizontal">
                <div class="form-group" :class="{ 'control': true }">
                    <label for="payment_method" class="col-sm-3 control-label text-right">Payment Method:</label>
                    <div class="col-sm-4">
                        <select
                                data-vv-as="payment method"
                                v-validate="'required'"
                                class="form-control"
                                :class="{'input': true, 'is-danger': errors.has('name') }"
                                name="payment_method"
                                type="text"
                                v-model="Payment.payment_method"
                                placeholder="Payment Method"
                        >
                            <option value="card">Credit/Debit Card</option>
                            <option value="check">Check</option>
                        </select>
                        <span
                                v-show="errors.has('payment_method')"
                                class="help is-danger">{{ errors.first('payment_method') }}</span>
                    </div>
                </div>

                <div v-if="Payment.payment_method == 'card'">
                    <div class="form-group" :class="{ 'control': true }">
                        <label for="name" class="col-sm-3 control-label text-right">Name on Card:</label>
                        <div class="col-sm-7">
                            <input
                                    data-vv-as="name"
                                    v-validate="'required'"
                                    class="form-control"
                                    :class="{'input': true, 'is-danger': errors.has('name') }"
                                    name="name"
                                    type="text"
                                    v-model="Payment.name"
                            >
                            <span
                                    v-show="errors.has('name')"
                                    class="help is-danger">{{ errors.first('name') }}</span>
                        </div>
                    </div>

                    <div class="form-group" :class="{ 'control': true }">
                        <label for="card_number" class="col-sm-3 control-label text-right">Card Number:</label>
                        <div class="col-sm-7">
                            <input
                                    data-vv-as="card number"
                                    v-validate="'required|credit_card'"
                                    class="form-control"
                                    :class="{'input': true, 'is-danger': errors.has('card_number') }"
                                    name="card_number"
                                    type="text"
                                    v-model="Payment.card_number"
                            >
                            <span
                                    v-show="errors.has('card_number')"
                                    class="help is-danger">{{ errors.first('card_number') }}</span>
                        </div>
                    </div>

                    <div class="form-group" :class="{ 'control': true }">
                        <label for="card_expiration_date" class="col-sm-3 control-label text-right">Expiration Date:</label>
                        <div class="col-sm-3">
                            <select
                                    data-vv-as="month"
                                    v-validate="'required|numeric'"
                                    class="form-control col-sm-3"
                                    :class="{'input': true, 'is-danger': errors.has('card_expiration_month') }"
                                    name="card_expiration_month"
                                    type="text"
                                    v-model="Payment.card_expiration_month"
                            >
                                <option value="" selected>Month</option>
                            </select>
                            <span
                                    v-show="errors.has('card_expiration_month')"
                                    class="help is-danger">{{ errors.first('card_expiration_month') }}</span>

                        </div>
                        <div class="col-sm-3">
                            <select
                                    data-vv-as="year"
                                    v-validate="'required|numeric'"
                                    class="form-control col-sm-3"
                                    :class="{'input': true, 'is-danger': errors.has('card_expiration_year') }"
                                    name="card_expiration_year"
                                    type="text"
                                    v-model="Payment.card_expiration_year"
                            ><option value="" selected>Year</option></select>
                            <span
                                    v-show="errors.has('card_expiration_year')"
                                    class="help is-danger">{{ errors.first('card_expiration_year') }}</span>

                        </div>
                    </div>

                    <div class="form-group" :class="{ 'control': true }">
                        <label for="card_zipcode" class="col-sm-3 control-label text-right">Zip/Postal Code:</label>
                        <div class="col-sm-4">
                            <input
                                    data-vv-as="Zip/Postal Code"
                                    v-validate="'required|digits:5'"
                                    class="form-control"
                                    :class="{'input': true, 'is-danger': errors.has('card_zipcode') }"
                                    name="card_zipcode"
                                    type="text"
                                    v-model="Payment.card_zipcode"
                            >
                            <span
                                    v-show="errors.has('card_zipcode')"
                                    class="help is-danger">{{ errors.first('card_zipcode') }}</span>
                        </div>
                    </div>

                    <div class="form-group" :class="{ 'control': true }">
                        <label for="card_csc" class="col-sm-3 control-label text-right">CSC:</label>
                        <div class="col-sm-2">
                            <input
                                    data-vv-as="card number"
                                    v-validate="'required|numeric'"
                                    class="form-control"
                                    :class="{'input': true, 'is-danger': errors.has('card_csc') }"
                                    name="card_csc"
                                    type="text"
                                    v-model="Payment.card_csc"
                            >
                            <span
                                    v-show="errors.has('card_csc')"
                                    class="help is-danger">{{ errors.first('card_csc') }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapActions, mapState} from 'vuex'

    export default {
        name: 'Payment',
        data: function() {
            return {
                isCredit: false
            }
        },
        computed: mapState({
            Payment: state => state.Payment
        }),
        inject: ['$validator'],
    }

</script>