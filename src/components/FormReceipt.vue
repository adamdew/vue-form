<template>
    <div>

        <div  class="table table-sm" style="margin-top:10px">
            <h4 style="padding:10px">Items</h4>
            <tr>
                <th>Product Name</th>
                <th style="text-align: right">Price</th>
            </tr>
            <tr >
                <td>{{ selectedSession.name }} - {{selectedSession.factor}}
                </td>

                <td style="text-align: right">${{ selectedSession.price }}</td>
            </tr>
            <tr >
                <td>{{ breakoutSession.name+" - "+breakoutSession.description}}
                </td>

                <td style="text-align: right">${{ breakoutSession.price }}</td>
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
            subTotal: function () {
                // var prices = [
                //     this.state.items.sessionSelection.info[0].price
                // ];
                // return prices.reduce((total, currentValue) => {
                //     return total + currentValue;
                // });
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