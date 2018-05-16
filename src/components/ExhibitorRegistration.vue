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
        <transition-group v-on:enter="enter" name="component-fade" mode="out-in">
            <div class="row" v-if="show" :key="1">
                <div class="col-sm-8">
                    <Booth/>
                    <Badge/>
                    <Upsell/>
                </div>
                <div class="col-sm-4">
                    <Cart/>
                    <When/>
                </div>
               <div class="col-sm-12">
                   <button v-on:click="nextView" class="btn btn-primary btn-lg">
                       Continue to Checkout
                   </button>
               </div>
            </div>
        </transition-group>
        <transition-group v-on:enter="enter" name="component-fade" mode="out-in">
            <div class="row" v-if="!show" :key="1">
                <div class="col-sm-8">
                    <Cart/>
                    <CompanyInfo/>
                    <Payment/>
                    <button v-on:click="submit" class="btn btn-primary btn-lg">Complete Order</button>
                    <button v-on:click="goBack" class="btn btn-lg btn-default">Back</button>
                </div>
                <div class="col-sm-4 hidden-xs">
                    <When/>
                </div>
            </div>
        </transition-group>
        <hr class="invisible"/>
        <modal v-if="showModal" @close="showModal = false" :body="modalBody" :header="modalHeader" />
    </div>


</template>

<script>
    import { mapState, mapGetters } from 'vuex';
    import Booth from './Booth/Booth'
    import CompanyInfo from './CompanyInfo/CompanyInfo'
    import Payment from './Payment/Payment'
    import Cart from './Cart/Cart'
    import When from './When/When'
    import Upsell from './Upsell/Upsell'
    import Badge from './Badge/Badge'
    import Modal from './Modal/Modal'

    export default {
        name: 'Exhibitor',
        computed: {
            ...mapGetters(['cartValue']),
            ...mapState(['event', 'Cart'])
        },
        data: function () {
            return {
                show: true,
                showModal: false,
                modalBody: null,
                modalHeader: null
            }
        },
        methods: {
            submit: function () {
                this.$validator.validateAll().then(success => {
                    if (!success) {
                        this.$el.querySelector('[data-vv-id="' + this.$validator.errors.items[0].id + '"]').scrollIntoView(true)
                        return;
                    }
                });
            },
            nextView: function () {
                this.$validator.validateAll().then(success => {
                    if (!success) {
                        this.$el.querySelector('[data-vv-id="' + this.$validator.errors.items[0].id + '"]').scrollIntoView(true)
                        return;
                    }
                    if (this.cartValue == 0) {
                        this.modalBody = 'Please add a product before continuing.';
                        this.showModal = true;
                        return;
                    } else {

                    }
                    this.show = false;
                });
            },
            goBack: function () {
                this.show = true;
            },
            enter: function () {
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
            Badge,
            Modal
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