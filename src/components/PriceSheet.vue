<template>
    <div class="container">
        <h2>2018 Registration Pricing</h2>
        <table class="table table-striped">
            <thead class="thead-default">
            <tr>
                <th>Scientific Sessions Program<br/>(Friday, June 8 - Sunday, June 10)</th>
                <th><em>Early Bird</em><br/>(Up to April 27)</th>
                <th><em>Regular</em><br/>(After April 27)</th>
            </tr>
            </thead>
            <tr>
                <td>FSO Member</td>
                <td>${{ getPriceData('Scientific Sessions', 'FSO Member', 'earlybird') }}</td>
                <td>${{ getPriceData('Scientific Sessions', 'FSO Member', 'regular') }}</td>
            </tr>
            <tr>
                <td>Non-Member</td>
                <td>${{ getPriceData('Scientific Sessions', 'Non-Member', 'earlybird') }}</td>
                <td>${{ getPriceData('Scientific Sessions', 'Non-Member', 'regular') }}</td>
            </tr>
            <tr>
                <td>Ophthalmic Nurse</td>
                <td>${{ getPriceData('Scientific Sessions', 'Ophthalmic Nurse', 'earlybird') }}</td>
                <td>${{ getPriceData('Scientific Sessions', 'Ophthalmic Nurse', 'regular') }}</td>
            </tr>
            <tr>
                <td>In-Training</td>
                <td>${{ getPriceData('Scientific Sessions', 'In-Training') }}</td>
                <td>${{ getPriceData('Scientific Sessions', 'In-Training') }}</td>
            </tr>
            <tr>
                <th>Office Administrator Program<br/>(Saturday, June 9)</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>FSO Member</td>
                <td>${{ getPriceData('Office Administrator', 'FSO Member', 'earlybird') }}</td>
                <td>${{ getPriceData('Office Administrator', 'FSO Member', 'regular') }}</td>
            </tr>
            <tr>
                <td>Non-Member</td>
                <td>${{ getPriceData('Office Administrator', 'Non-Member', 'earlybird') }}</td>
                <td>${{ getPriceData('Office Administrator', 'Non-Member', 'regular') }}</td>
            </tr>
            <tr>
                <td>Ophthalmic Nurse</td>
                <td>${{ getPriceData('Office Administrator', 'Ophthalmic Nurse', 'earlybird') }}</td>
                <td>${{ getPriceData('Office Administrator', 'Ophthalmic Nurse', 'regular') }}</td>
            </tr>
            <tr>
                <th>Coding and Reimbursement Program<br/>(Friday, June 8)</th>
                <th></th>
                <th></th>
            </tr>
            <tr>
                <td>FSO Member</td>
                <td>${{ getPriceData('Coding and Reimbursement', 'FSO Member', 'earlybird') }}</td>
                <td>${{ getPriceData('Coding and Reimbursement', 'FSO Member', 'regular') }}</td>
            </tr>
            <tr>
                <td>Non-Member</td>
                <td>${{ getPriceData('Coding and Reimbursement', 'Non-Member', 'earlybird') }}</td>
                <td>${{ getPriceData('Coding and Reimbursement', 'Non-Member', 'regular') }}</td>
            </tr>
            <tr>
                <td>Ophthalmic Nurse</td>
                <td>${{ getPriceData('Coding and Reimbursement', 'Ophthalmic Nurse', 'earlybird') }}</td>
                <td>${{ getPriceData('Coding and Reimbursement', 'Ophthalmic Nurse', 'regular') }}</td>
            </tr>


        </table>
        <div class="row">
            <div class="col-sm-12">
                <button style='float:right' class="btn btn-info" @click="formSectionComplete">Next</button>
                <!--<button style='float:left' class="btn btn-default" @click="previousPage">Previous</button>-->
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
        },
        mounted() {
            this.fetchPrices();
        },
        methods: {
            nextPage() {
                this.$store.commit('nextPage');
            },
            previousPage() {
                this.$store.commit('previousPage');
            },
            formSectionComplete() {
                this.nextPage();
            },
            fetchPrices() {
                this.$store.commit('fetchPrices', 'combined_prices');
            },
            getPriceData(name, factor, description){
                let product = this.state.priceSheet.priceData.combined.filter(function(data){
                    return data.name === name;
                }).filter(function(data){
                    return data.factor === factor;
                }).filter(function(data){
                    return data.description === description;
                });
                if(product[0]){
                    return product[0].price;
                }
                else{
                    return 0;
                }
            },
        }
    }
</script>