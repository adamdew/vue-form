<template>
    <tr class="item_row">
        <td class="ticket_type_name">
            <div @click="isShow = !isShow" class="pointer"><strong>{{ item.name }}</strong>
                <div class="arrow-down" v-bind:class="[isShow ? 'opened' : '']"></div>
            </div>
            <div v-show="isShow" class="upsell-description" v-html="item.description"></div>
        </td>


        <td nowrap="nowrap" align="center">
            {{ item.available }}
        </td>
        <td nowrap="nowrap" class="price_td">
            {{ item.price | formatMoney }}
        </td>

        <td align="right" nowrap="nowrap">
            <span v-if="isSoldOut()">
                <CartItemSelect :product="{
                id: item.id,
                name: item.name,
                price: item.price,
                max_quantity: item.available
                }"/>
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
    import CartItemSelect from '../Cart/CartItemSelect'

    export default {
        data: function () {
            return {
                isShow: 0
            }
        },
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
        },
        props: {
            item: Object
        },
        components: {
            CartItemSelect
        },
        methods: {
            isSoldOut: function () {
                return !((this.available - this.sold) > 0)
            }
        }

    }

</script>

