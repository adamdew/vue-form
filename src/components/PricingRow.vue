<template>
    <tr v-if="isEarlyBird">
        <td>{{ earlyBird.factor }}</td>
        <td>${{ earlyBird.price }}</td>
        <td>${{ regular.price }}</td>
        <td>
            <input
                    class="form-check-input"
                    type="radio"
                    name="registration"
                    :value="earlyBird.PRODUCTID"
                    v-model="state.session">
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
                    v-model="state.session">
        </td>
    </tr>
</template>

<script>

    import {mapGetters} from 'vuex';

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            earlyBird: function () {
                return this.getPriceData(this.name, this.factor, 'earlybird');
            },
            regular: function () {
                return this.getPriceData(this.name, this.factor, 'regular');
            },
            isEarlyBird: function () {
                if (this.state.priceSheet.priceData.earlybird) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        props: [
            'name',
            'factor',
            'description'
        ],
        methods: {
            getPriceData(name, factor, description) {
                let product = this.state.priceSheet.priceData.combined.filter(
                    function (data) {
                        return data.name === name;
                    }).filter(
                    function (data) {
                        return data.factor.includes(factor);
                    }).filter(
                    function (data) {
                        return data.description === null || data.description.includes(description);
                    }
                );


                if (product[0]) {
                    return product[0];
                }
                else {
                    return 0;
                }
            }
        }
    }

</script>

