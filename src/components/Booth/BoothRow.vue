<template>
    <tr class="ticket_row" v-bind:class="isExpired() ? 'table_row__expired' : '' ">

        <td class="ticket_type_name">
            {{ name }}
            <div v-html="description" class="description"></div>
        </td>

        <td nowrap="nowrap">
            <span v-if="isExpired()">
                Sale Ended
            </span>
            <span v-else-if="isOpen()">
                {{ formatDate(end_date) }}
            </span>
            <span v-else>
                Not Started
            </span>
        </td>

        <td nowrap="nowrap" class="price_td">
            {{ price | formatMoney }}
        </td>

        <td align="right" nowrap="nowrap">
            <span v-if="isOpen()">
                <CartItemSelect :product="{id,name,price,start_date,end_date,description,category,max_quantity:5}"/>
            </span>
            <strong v-else>
                N/A
            </strong>
        </td>

    </tr>
</template>

<script>

    import {mapGetters} from 'vuex';
    var dateFormat = require('dateformat');
    import CartItemRadio from '../Cart/CartItemRadio'
    import CartItemSelect from '../Cart/CartItemSelect'

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
        },
        props: [
            'id',
            'name',
            'price',
            'start_date',
            'end_date',
            'description',
            'category'
        ],
        components: {
            CartItemSelect
        },
        methods: {
            isOpen: function(end_date, start_date) {
                var d = new Date();
                var now = d.getTime()/1000;
                if(now > this.start_date && now < this.end_date) {
                    return true;
                }
            },
            isExpired: function(end_date) {
                var d = new Date();
                var now = d.getTime()/1000;
                if(now > this.end_date) {
                    return true;
                }
            },
            formatDate: function(time, format) {
                var time = new Date(time*1000);
                return dateFormat(time, " mmmm d, yyyy");
            }
        }

    }

</script>

