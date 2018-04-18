<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Additional Sponsorship Opportunities</h2>
        </div>
        <div class="panel-body">
            <table class="table table__ticket">
                <tbody>
                    <tr class="ticket_table_head">
                        <td width="60%" nowrap="nowrap">
                        </td>
                        <td align="center">Available</td>
                        <td width="85">
                            Price
                        </td>
                        <td width="80" align="right">Quantity</td>
                    </tr>
                    <UpsellRow v-for="item in upsell" :item="item" :key="item.id" />
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
        name: 'Upsell',
        computed: mapState([
            'upsell'
        ]),
        components: {
            UpsellRow
        }
    }
</script>