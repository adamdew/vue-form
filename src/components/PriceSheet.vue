<template>
    <div>
        <div class="form-section">
            <h2 class="form-section-head">2018 Registration</h2>
            <div class="form-section-body">
                <table class="table table-striped">
                    <thead class="thead-default">
                    <tr>
                        <th style="border:none">Scientific Sessions Program<br/>(Friday, June 8 - Sunday, June 10)</th>
                        <th style="border:none"><em>Early Bird</em><br/>(Up to April 27)</th>
                        <th style="border:none"><em>Regular</em><br/>(After April 27)</th>
                    </tr>
                    </thead>
                    <tr>
                        <td>FSO Member</td>
                        <td>${{ pricing.earlybirdPricing.sessions.member.price }}</td>
                        <td>${{ pricing.regularPricing.sessions.member.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.sessions.member.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID" ></td>
                    </tr>
                    <tr>
                        <td>Non-Member</td>
                        <td>${{ pricing.earlybirdPricing.sessions.nonMember.price }}</td>
                        <td>${{ pricing.regularPricing.sessions.nonMember.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.sessions.nonMember.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID" ></td>
                    </tr>
                    <tr>
                        <td>Ophthalmic Nurse</td>
                        <td>${{ pricing.earlybirdPricing.sessions.ophthalmicNurse.price }}</td>
                        <td>${{ pricing.regularPricing.sessions.ophthalmicNurse.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.sessions.ophthalmicNurse.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>
                    </tr>
                    <tr>
                        <td>In-Training</td>
                        <td>$0</td>
                        <td>$0</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.sessions.inTraining.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>
                    </tr>
                    <tr>
                        <th>Office Administrator Program<br/>(Saturday, June 9)</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>FSO Member</td>
                        <td>${{ pricing.earlybirdPricing.oa.member.price }}</td>
                        <td>${{ pricing.regularPricing.oa.member.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.oa.member.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>
                    </tr>
                    <tr>
                        <td>Non-Member</td>
                        <td>${{ pricing.earlybirdPricing.oa.nonMember.price }}</td>
                        <td>${{ pricing.regularPricing.oa.nonMember.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.oa.nonMember.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>

                    </tr>
                    <tr>
                        <td>Ophthalmic Nurse</td>
                        <td>${{ pricing.earlybirdPricing.oa.ophthalmicNurse.price }}</td>
                        <td>${{ pricing.regularPricing.oa.ophthalmicNurse.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.oa.ophthalmicNurse.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>

                    </tr>
                    <tr>
                        <th>Coding and Reimbursement Program<br/>(Friday, June 8)</th>
                        <th></th>
                        <th></th>
                    </tr>
                    <tr>
                        <td>FSO Member</td>
                        <td>${{ pricing.earlybirdPricing.coding.member.price }}</td>
                        <td>${{ pricing.regularPricing.coding.member.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.coding.member.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>

                    </tr>
                    <tr>
                        <td>Non-Member</td>
                        <td>${{ pricing.earlybirdPricing.coding.nonMember.price }}</td>
                        <td>${{ pricing.regularPricing.coding.nonMember.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.coding.nonMember.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>

                    </tr>
                    <tr>
                        <td>Ophthalmic Nurse</td>
                        <td>${{ pricing.earlybirdPricing.coding.ophthalmicNurse.price }}</td>
                        <td>${{ pricing.regularPricing.coding.ophthalmicNurse.price }}</td>
                        <td><input class="form-check-input" type="radio" name="registration" :value="currentPricing.coding.ophthalmicNurse.PRODUCTID" v-model="state.items.sessionSelection.PRODUCTID"></td>

                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from 'vuex';
    import FormReceipt from './FormReceipt'

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            pricing: function(){
              return {
                  earlybirdPricing: {
                      sessions: {
                          member: this.getPriceData('Scientific Sessions', 'FSO Member', 'earlybird'),
                          nonMember: this.getPriceData('Scientific Sessions', 'Non-Member', 'earlybird'),
                          ophthalmicNurse: this.getPriceData('Scientific Sessions', 'Ophthalmic Nurse', 'earlybird'),
                          inTraining: this.getPriceData('Scientific Sessions', 'In-Training', null)
                      },
                      oa: {
                          member: this.getPriceData('Office Administrator', 'FSO Member', 'earlybird'),
                          nonMember: this.getPriceData('Office Administrator', 'Non-Member', 'earlybird'),
                          ophthalmicNurse: this.getPriceData('Office Administrator', 'Ophthalmic Nurse', 'earlybird'),
                      },
                      coding: {
                          member: this.getPriceData('Coding and Reimbursement', 'FSO Member', 'earlybird'),
                          nonMember: this.getPriceData('Coding and Reimbursement', 'Non-Member', 'earlybird'),
                          ophthalmicNurse: this.getPriceData('Coding and Reimbursement', 'Ophthalmic Nurse', 'earlybird'),
                      }
                  },
                  regularPricing: {
                      sessions: {
                          member: this.getPriceData('Scientific Sessions', 'FSO Member', 'regular'),
                          nonMember: this.getPriceData('Scientific Sessions', 'Non-Member', 'regular'),
                          ophthalmicNurse: this.getPriceData('Scientific Sessions', 'Ophthalmic Nurse', 'regular'),
                          inTraining: this.getPriceData('Scientific Sessions', 'Ophthalmic Nurse', 'regular')
                      },
                      oa: {
                          member: this.getPriceData('Office Administrator', 'FSO Member', 'regular'),
                          nonMember: this.getPriceData('Office Administrator', 'Non-Member', 'regular'),
                          ophthalmicNurse: this.getPriceData('Office Administrator', 'Ophthalmic Nurse', 'regular'),
                      },
                      coding: {
                          member: this.getPriceData('Coding and Reimbursement', 'FSO Member', 'regular'),
                          nonMember: this.getPriceData('Coding and Reimbursement', 'Non-Member', 'regular'),
                          ophthalmicNurse: this.getPriceData('Coding and Reimbursement', 'Ophthalmic Nurse', 'regular'),
                      }
                  },
              }
            },
            currentPricing: function() {
                if(this.state.priceSheet.priceData.earlybird){
                    //console.log('yes');
                    return this.pricing.earlybirdPricing;
                }
                else{
                    return this.pricing.regularPricing;
                }
            },
            productID: function() {
                return this.state.items.sessionSelection.PRODUCTID;
            },
        },
        components: {
            FormReceipt
        },
        watch: {
            productID: function(){
              this.$store.commit('updateSessionSelection', this.state.items.sessionSelection.PRODUCTID);
          },
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
            updateSession() {
                console.log(this.state.items.sessionSelection);
                //this.$store.commit('updateSessionSelection', this.state.items.sessionSelection);
            },


        }
    }
</script>