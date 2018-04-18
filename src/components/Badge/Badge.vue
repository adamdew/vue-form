<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Badge Registration <small>2 Complimentary Badges. Additional badges will cost $125 each</small></h2>
        </div>
        <div class="panel-body">
            <table class="table table__ticket">
                <tbody>
                    <tr class="ticket_table_head">
                        <td>Name</td>
                        <td>Phone</td>
                        <td  width="80" align="right">
                            Price
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input class="width100" type="text">
                        </td>
                        <td>
                            <input class="width100" type="text">
                        </td>
                        <td align="right">{{ 0 | formatMoney }}</td>
                    </tr>
                    <tr>
                        <td>
                            <input class="width100" type="text">
                        </td>
                        <td>
                            <input class="width100" type="text">
                        </td>
                        <td align="right">{{ 0 | formatMoney }}</td>
                    </tr>
                </tbody>
            </table>

        </div>
    </div>
</template>
<script>

    import { mapGetters } from 'vuex';
    import UpsellRow from './UpsellRow'
    import { mapState } from 'vuex';

    export default {
        name: 'Badge',
        computed: mapState([
            'upsell'
        ]),
        components: {
            UpsellRow
        }
    }
</script>