<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Order Summary</h2>
        </div>
        <div class="panel-body">
            <table class="table">
                <tbody>
                <tr class="ticket_table_head">
                    <td>Item</td>
                    <td class="text-center">Price</td>
                    <td class="text-center">Quantity</td>
                    <td class="text-center">Subtotal</td>
                </tr>
                <tr v-for="cartItem in Cart.cartItemList" :cartItem="cartItem" :key="cartItem.id" v-if="cartItem.quantity > 0">
                    <td>
                        {{ cartItem.name }}
                        <span v-if="cartItem.category === 'Badge' && cartItem.attributes.name != ''">- {{ cartItem.attributes.name }}</span>
                    </td>
                    <td align="center">{{ cartItem.price | formatMoney }}</td>
                    <td align="center">{{ cartItem.quantity }}</td>
                    <td align="right">{{ (cartItem.price * cartItem.quantity) | formatMoney }}</td>
                </tr>
                <tr v-if="isPromoValid">
                    <td >{{ promo_code }} - {{ promo_code_description }}</td>
                    <td colspan="3" align="right">{{ promo_code_value | formatMoney }}</td>
                </tr>
                <tr>
                    <td colspan="3" style="vertical-align: middle;" class="f14">Total</td>
                    <th style="text-align: right" class="f16">{{ this.cartValue | formatMoney }}</th>
                </tr>
                <tr v-if="!promo">
                    <td colspan="4" align="right"><a href="#" @click="promo = true">Enter promotional code</a></td>
                </tr>
                <tr v-if="promo">
                    <td colspan="4" align="right">
                        If you have a promotional code, enter it here:
                            <input v-model="promo_code" /> <button v-on:click="applyPromoCode">Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import axios from 'axios';

    export default {
        name: 'Cart',
        data: function () {
            return {
                promo: false
            }
        },
        computed: {
            ...mapState(['Cart', 'api_endpoint']),
            ...mapGetters(['cartValue']),
            isPromoValid() {
                if (this.$store.getters.getPromoCode.valid) {
                    return true;
                }
                return false;
            },
            promo_code:{
                get: function(){
                    return this.$store.getters.getPromoCode.code;
                },
                set: function(code){
                    this.$store.dispatch('updatePromoCode', { code });
                }
            },
            promo_code_description:{
                get: function(){
                    return this.$store.getters.getPromoCode.description;
                }
            },
            promo_code_value:{
                get: function(){
                    return this.$store.getters.getPromoCode.value;
                }
            }
        },
        methods: {
            applyPromoCode() {
                var promo_code = this.$store.getters.getPromoCode.code;

                axios({
                    method: "POST",
                    url: this.api_endpoint + "/promo.php",
                    data: {promo_code},
                    headers: {
                            "content-type": "multipart/form-data"
                        }
                }).then(result => {
                    if (result.data.error === true) {
                        alert(result.data.message);
                        return;
                    }

                   this.$store.dispatch('updatePromoCode', result.data.promo_code);

                }, error => {
                    console.error(error);
                });
            }
        }
    }
</script>