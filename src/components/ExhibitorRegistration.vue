<template>
    <div class="container">
        <div class="event_header">
            <h1><span class="summary"> {{ event.title }}</span></h1>
            <h2>
                <a :href="event.link"
                   target="_blank">
                    {{ event.group }}
                </a>
            </h2>
            <h2>{{ event.subtitle }}</h2>
            <h2 v-html="event.where"></h2>
        </div>
        <transition-group v-on:enter="enter"  name="component-fade" mode="out-in">
            <div class="row" v-if="show" :key="1">
                <div class="col-sm-8">
                    <Booth/>
                    <Badge/>
                    <Upsell/>
                    <button @click="show = !show" class="btn btn-primary btn-lg">
                        Continue to Checkout
                    </button>
                </div>
                <div class="col-sm-4">
                    <Cart/>
                    <When/>
                </div>
            </div>
        </transition-group>
        <transition-group v-on:enter="enter" name="component-fade" mode="out-in">
            <div class="row" v-if="!show" :key="1">
                <div class="col-sm-8">
                    <Cart/>
                    <CompanyInfo />
                    <Payment />
                    <button v-on:click="submit" class="btn btn-primary btn-lg">Checkout</button>
                </div>
                <div class="col-sm-4">
                    <When/>
                </div>
            </div>
        </transition-group>
        <hr class="invisible" />
    </div>


</template>

<script>
    import { mapState } from 'vuex';
    import Booth from './Booth/Booth'
    import CompanyInfo from './CompanyInfo/CompanyInfo'
    import Payment from './Payment/Payment'
    import Cart from './Cart/Cart'
    import When from './When/When'
    import Upsell from './Upsell/Upsell'
    import Badge from './Badge/Badge'

    export default {
        name: 'Exhibitor',
        computed: mapState([
            'event'
        ]),
        data: function () {
            return {
                show: true
            }
        },
        methods: {
            submit: function () {
                this.$validator.validateAll()
                if (!this.errors.any()) {
                    console.log(this.errors)
                }
            },
            enter: function() {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
        },
        components: {
            Booth,
            CompanyInfo,
            Payment,
            Cart,
            When,
            Upsell,
            Badge
        },
    }
</script>

<style>
    .input.is-danger {
        border: 1px solid #D33732;
    }

    .help {
        font-size: 11px;
    }

    .is-danger {
        color: #D33732;
    }
</style>