<template>
    <div>

        <div  class="table table-sm" style="margin-top:10px">
            <h4 style="padding:10px">Items</h4>
            <tr>
                <th>Product Name</th>
                <th style="text-align: right">Price</th>
            </tr>
            <tr v-if="state.session">
                <td>{{ selectedSession.name }} - {{selectedSession.factor}}
                </td>

                <td style="text-align: right">${{ selectedSession.price }}</td>
            </tr>
            <tr v-if="state.breakoutSession">
                <td>{{ breakoutSession.name+" - "+breakoutSession.description}}
                </td>

                <td style="text-align: right">${{ breakoutSession.price }}</td>
            </tr>
            <tr v-if="state.yoSeminar">
                <td>{{ yoSeminar.name+" - "+yoSeminar.description}}
                </td>

                <td style="text-align: right">${{ yoSeminar.price }}</td>
            </tr>
            <tr>
                <td style="text-align: right"><strong>Subtotal:</strong></td>
                <td><strong>$<u>{{ selectedSession.price }}</u></strong></td>
            </tr>
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
            selectedSession: function(){
                return this.getProduct(this.state.session);
            },
            breakoutSession: function(){
                return this.getProduct(this.state.breakoutSession);
            },
            yoSeminar: function() {
                return this.getProduct(this.state.yoSeminar);
            },
            subTotal: function () {
                return this.selectedSession.price;
            }
        },
        methods: {
            getProduct: function(PRODUCTID){
                let needle = '';
                this.state.priceSheet.priceData.combined.filter((product) => {
                    if(product.PRODUCTID === PRODUCTID){
                        needle = product;
                    }
                });
                return needle;
            }
        }
    }
</script>

<style>
    .receipt-table {

        margin-top: 10px;
        padding: 10px;

    }
</style>