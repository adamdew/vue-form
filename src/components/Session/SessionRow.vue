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

