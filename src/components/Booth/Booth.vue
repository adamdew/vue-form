<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Booth Registration</h2>
        </div>
        <div class="panel-body">

            <table class="table table__ticket">
                <tbody>
                    <tr class="ticket_table_head">
                        <td width="60%" nowrap="nowrap">
                            Ticket Type
                        </td>
                        <td>Sales End</td>
                        <td width="85">
                            Price
                        </td>
                        <td width="80" align="right">Quantity</td>
                    </tr>
                    <BoothRow
                            v-for="item in booths" :id="item.id" :key="item.id"
                            :name="item.name"
                            :price="item.price"
                            :start_date="item.start_date"
                            :end_date="item.end_date"
                            :description="item.description"
                    />
                </tbody>
            </table>

        </div>
    </div>
</template>
<script>

    import { mapState } from 'vuex';
    import BoothRow from './BoothRow'

    export default {
        computed: mapState([
            'booths'
        ]),
        components: {
            BoothRow
        }
    }
</script>