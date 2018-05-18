<template>
    <tr v-if="isEarlyBird">
        <td>{{ earlyBird.factor }}</td>
        <td>${{ earlyBird.price }}</td>
        <td>${{ regular.price }}</td>
        <td>
            <CartItemRadio
                    :id="earlyBird.PRODUCTID"
                    :price="earlyBird.price "
                    :name="earlyBird.factor"
                    :input_name="earlyBird.factor"
                    type="session">
            </CartItemRadio>
        </td>
    </tr>
    <tr v-else>
        <td>{{ regular.factor }}</td>
        <td>${{ earlyBird.price }}</td>
        <td>${{ regular.price }}</td>
        <td>
            <input
                    class="form-check-input"
                    type="radio"
                    name="registration"
                    :value="regular.PRODUCTID"
                    v-model="state.cart">
        </td>
    </tr>


    <tr class="ticket_row">

        <td class="ticket_type_name">
            Member NNCC Learning Collaborative Pre-Conference &amp; Clinical Network Retreat (Early Bird)

            <div id="descriptionDiv83094570" style="font-size: 11px; line-height: 12px; margin: 5px 0 0 0;">
                <ul>
                    <li>One 8x10 Exhibit Booth</li>
                    <li>2 badges</li>
                    <li>Company logo on all supporter recognition material</li>
                    <li>Company listed on the virtual exhibit hall</li>
                    <li>Special ribbons for exhibit personnel</li>
                </ul>
            </div>
        </td>


        <td nowrap="nowrap" content="2018-04-04 23:59:00-04:00">
            Apr 4, 2018
        </td>


        <td nowrap="nowrap" class="price_td">
            <input type="hidden" name="cost_83094570_None" value="230.00">

            $230.00

        </td>

        <td align="right" nowrap="nowrap">
            <select class="form-control">
                <option v-for="n in 10" v-bind:value="n">{{ n }}</option>
            </select>
        </td>

    </tr>
</template>

<script>

    import {mapGetters} from 'vuex';
    import CartItemRadio from '../Cart/CartItemRadio'

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
        },
        props: [
            'name',
            'factor',
            'description'
        ],
        components: {
            CartItemRadio
        },

    }

</script>

