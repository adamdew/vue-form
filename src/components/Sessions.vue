<template>
    <div>
        <div class="form-section">
            <h4 class="form-section-head">Session Pricing</h4>
            <div class="form-section-body">
                <table class="table table-sm">
                    <thead class="thead-default">
                    <tr>
                        <th style="border:none">Scientific Sessions Program<br/>(Friday, June 8 - Sunday, June 10)</th>
                        <th style="border:none"><em>Early Bird</em><br/>(Up to April 27)</th>
                        <th style="border:none"><em>Regular</em><br/>(After April 27)</th>
                    </tr>
                    </thead>
                    <PricingRow
                        name="Scientific Sessions"
                        factor="FSO Member"
                    ></PricingRow>
                    <PricingRow
                            name="Scientific Sessions"
                            factor="Non-Member"
                    ></PricingRow>
                    <PricingRow
                            name="Scientific Sessions"
                            factor="Ophthalmic Nurse"
                    ></PricingRow>
                    <!--<PricingRow-->
                            <!--name="Scientific Sessions"-->
                            <!--factor="In-Training"-->
                    <!--&gt;</PricingRow>-->
                    <tr>
                        <th>Office Administrator Program<br/>(Saturday, June 9)</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <PricingRow
                            name="Office Administrator"
                            factor="FSO Member"
                    ></PricingRow>
                    <PricingRow
                            name="Office Administrator"
                            factor="Non-Member"
                    ></PricingRow>
                    <PricingRow
                            name="Office Administrator"
                            factor="Ophthalmic Nurse"
                    ></PricingRow>
                    <tr>
                        <th>Coding and Reimbursement Program<br/>(Friday, June 8)</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <PricingRow
                            name="Coding and Reimbursement"
                            factor="FSO Member"
                    ></PricingRow>
                    <PricingRow
                            name="Coding and Reimbursement"
                            factor="Non-Member"
                    ></PricingRow>
                    <PricingRow
                            name="Coding and Reimbursement"
                            factor="Ophthalmic Nurse"
                    ></PricingRow>
                </table>
            </div>
        </div>

        <div class="form-section">
            <div class="form-section-head">
                <h4>Additional Sessions</h4>
            </div>
            <div class="form-section-body">
                <h5>Scientific Sessions Breakout Sessions (Saturday, June 9)</h5>
                <p>Please select the breakout session below that you would like to attend. There is no additional fee
                    for the breakout sessions.</p>
                <div class="radio">
                    <label>
                        <input
                                type="radio"
                                name="sessionsRadios"
                                :value="pricing.saturdayBreakouts.cornea.PRODUCTID"
                                v-model="state.breakoutSession"
                                @change="updateState()"
                        />
                        {{ pricing.saturdayBreakouts.cornea.description }}
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input
                                type="radio"
                                name="sessionsRadios"
                                :value="pricing.saturdayBreakouts.glaucoma.PRODUCTID"
                                v-model="state.breakoutSession"
                                @change="updateState()"
                        />
                        {{ pricing.saturdayBreakouts.glaucoma.description }}
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input
                                type="radio"
                                name="sessionsRadios"
                                :value="pricing.saturdayBreakouts.retina.PRODUCTID"
                                v-model="state.breakoutSession"
                        />
                        {{ pricing.saturdayBreakouts.retina.description }}
                    </label>
                </div>
                <div class="radio">
                    <label>
                        <input
                                type="radio"
                                name="sessionsRadios"
                                :value="pricing.saturdayBreakouts.pediatric.PRODUCTID"
                                v-model="state.breakoutSession"
                        />
                        {{ pricing.saturdayBreakouts.pediatric.description }}
                    </label>
                </div>
                <br/>
                <h5>Young Ophthalmologist (YO) Seminar (Saturday, June 9 | 4:00-6:00 PM)</h5>
                <p>This program is for YOs and will cover important topics such as practice building, work-life balance, management of medical-legal issues and personal finance.
                </p>
                <div class="checkbox">
                    <label>
                        <input
                                type="radio"
                                name="yoSeminar"
                                :value="pricing.yoSeminar.PRODUCTID"
                                v-model="state.yoSeminar"
                        />
                        Yes, I will attend
                    </label>
                </div>
                <div class="checkbox">
                    <label>
                        <input
                                type="radio"
                                name="yoSeminar"
                                :value="0"
                                v-model="state.yoSeminar"
                        />
                        No, I will not attend
                    </label>
                </div>
            </div>
        </div>
        <br/>
        <div class="row">
            <div class="col-sm-12">
                <router-link v-if="state.session" style='float:right' class="btn btn-info next-btn" to="/PersonalInformation">
                    <span >Next <small>(Contact Info)</small></span>
                </router-link>
                <router-link v-else style='float:right' class="btn btn-info next-btn" disabled>
                    <span><small>Please select a session</small></span>
                </router-link>
            </div>
        </div>
    </div>
    
</template>
<script>

    import {mapGetters} from 'vuex';
    import FormReceipt from './FormReceipt'
    import PricingRow from './PricingRow'
    

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            pricing: function () {
                return {
                    saturdayBreakouts: {
                        cornea: this.getPriceData('Saturday Breakout Session', null, 'Cornea/Refractive Surgery/External Disease'),
                        glaucoma: this.getPriceData('Saturday Breakout Session', null, 'Glaucoma'),
                        retina: this.getPriceData('Saturday Breakout Session', null, 'Retina-Vitreous'),
                        pediatric: this.getPriceData('Saturday Breakout Session', null, 'Pediatric/Strabismus')
                    },
                    yoSeminar: this.getPriceData('YO Seminar', null, 'Young Ophthalmologist Seminar'),
                }
            },
        },
        components: {
            FormReceipt,
            PricingRow,
        },
        mounted() {
            this.fetchPrices();
        },
        methods: {
            fetchPrices() {
                this.$store.commit('fetchPrices', 'combined_prices');
            },
            getPriceData(name, factor, description) {
                let product = this.state.priceSheet.priceData.combined.filter(function (data) {
                    return data.name === name;
                }).filter(function (data) {
                    return data.factor === factor;
                }).filter(function (data) {
                    return data.description === description;
                });
                if (product[0]) {
                    return product[0];
                }
                else {
                    return 0;
                }
            },
            updateState(){
                this.$store.commit('updateState', this.state);
            }
        }
    }
</script>
