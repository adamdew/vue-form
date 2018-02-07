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
                <td style="text-align: right">${{ state.items.sessionSelection.info[0].price}}</td>
            </tr>
            <tr>
                <td style="text-align: right"><strong>Total:</strong></td>
                <td><strong>${{ state.items.sessionSelection.info[0].price}}</u></strong></td>
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
//            idk why this has to be here, it was throwing
//            warnings about the state not being defined yet when it wasent tho..
//            To see the errors just take out the v-if in the template above
            isStateReady: () => {

                if(typeof this.state !== 'undefined'){
                    return true;
                }
                else {
                    return false;
                    alert('test');
                }
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