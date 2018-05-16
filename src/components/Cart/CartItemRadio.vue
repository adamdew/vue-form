<template>
    <div>
    <input type = "radio"
           :name = "type"
           :value = "{
                id: id,
                price: price,
                name: name,
                type: type
           }"
           v-model = "cart"
           v-on:change="updateCart"

    />
    </div>
</template>

<script>
    import { mapActions } from 'vuex';

    export default {
        props: ['id', 'price', 'name', 'type'],
        computed: {
            cart: {
                set: function (newValue) {
                    this.$store.state.cart.push(newValue)
                },
                unset: function(oldVal) {
                    console.log(oldVal)
                }
            }
        },
        methods: {
            ...mapActions(['updateCart', 'removeItemInCart']),
        }

    }
</script>
