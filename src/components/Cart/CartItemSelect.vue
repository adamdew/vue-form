<template>
    <div>
        <select v-on:change="(e) => onChange(e, product)" style="width: 50px">
            <option value="0">0</option>
            <option v-for="n in maxSelectQuantity" v-bind:value="n">{{ n }}</option>
        </select>
    </div>
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';

    export default {
        data: function() {
            return {
                maxSelectQuantityValue: 0
            }
        },
        props: {
            product: Object
        },
        computed: {
            maxSelectQuantity() {
                if (this.product.max_quantity >= 10) {
                    return 10;
                }
                return parseInt(this.product.max_quantity);
            },
        },
        methods: {
            ...mapActions([
                'addToCart'
            ]),
            onChange(e, product) {
                var product = {
                    ...product,
                    quantity: e.target.value
                };
                this.addToCart(product);
            }
        }
    }
</script>
