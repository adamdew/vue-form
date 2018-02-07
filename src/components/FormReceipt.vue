<template>
    <div>

        <div  class="table table-sm" style="margin-top:10px">
            <h4 style="padding:10px">Items</h4>
            <tr>
                <th>Product Name</th>
                <th style="text-align: right">Price</th>
            </tr>
            <tr >
                <td>{{ state.items.sessionSelection.info[0].name}} - {{ state.items.sessionSelection.info[0].factor}} -
                    {{ state.items.sessionSelection.info[0].description}}
                </td>
                <td>{{ state.items.additionalSessions}}
                </td>
                <td style="text-align: right">${{ state.items.sessionSelection.info[0].price}}</td>
            </tr>
            <tr>
                <td style="text-align: right"><strong>Subtotal:</strong></td>
                <td><strong>${{ subTotal }}</u></strong></td>
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
            subTotal: function () {
                var prices = [
                    this.state.items.sessionSelection.info[0].price
                ];
                return prices.reduce((total, currentValue) => {
                    return total + currentValue;
                });
            }
        },
        methods: {}
    }
</script>

<style>
    .receipt-table {

        margin-top: 10px;
        padding: 10px;

    }
</style>