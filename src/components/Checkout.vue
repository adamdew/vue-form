<template>
    <div class="form-section">
        <div class="form-section-head">
            <h4>Checkout</h4>
        </div>
        <div class="form-section-body container-fluid">
            <div class="row">
            </div>
            <div class="credit-card-wrapper"></div>
            <form id="payment-form" style="width:65%; margin:0 auto;">
                
                <div class="row">
                    <div class="col-sm-12">
                        <input placeholder="Card number" type="text" name="number" id="number"
                               v-model="state.ccinfo.number">
                    </div>

                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <input placeholder="First Name" type="text" name="cc-first-name" id="cc-first-name" v-model="state.ccinfo.firstName">
                    </div>
                    <div class="col-sm-4">
                        <input placeholder="Last Name" type="text" name="cc-last-name" id="cc-last-name" v-model="state.ccinfo.lastName">
                    </div>
                    <div class="col-sm-4">
                        <input placeholder="Billing Zip" type="text" name="zip" id="zip" v-model="state.ccinfo.zip">
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-3">
                        <input placeholder="MM/YY" type="text" name="expiry" id="expiry" v-model="state.ccinfo.expiry">
                    </div>
                    
                    <div class="col-sm-3">
                        <input placeholder="CVC" type="text" name="cvc" id="cvc" v-model="state.ccinfo.cvc">
                    </div>
                    
                    <div class="col-sm-6">
                        <input type="button" :value="payButtonTotal" @click="submitPayment"
                               class="button postfix btn-info">
                    </div>
                </div>
                <hr>

            </form>
            <div class="row" style="width:65%; margin:0 auto;">
                <label for="promoCode">Promo Code: </label>
                <input v-model="promoCode" class="form-control" id="promoCode" placeholder="If you have a promocode, you may enter it here">
                <button @click='checkPromoCode' class="btn" style="margin-top:15px">Add Promocode</button>
            </div>
        </div>
    
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    var card = require("card");
    
    
    export default {
        data: function () {
            return {
                promoCode: '',
            }
        },
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            payButtonTotal() {
                let output = this.state.cartTotal;
                output = "Pay $" + output;
                return output;
            }
        },
        watch: {
            'state': {
                handler: function (val) {
                    this.$store.commit('updateState', val);
                },
                deep: true
            }
        },
        mounted: function () {
            var $ = require("jquery");
            window.jQuery = $;
            
            var card = new Card({
                // a selector or DOM element for the form where users will
                // be entering their information
                form: 'form', // *required*
                // a selector or DOM element for the container
                // where you want the card to appear
                container: '.credit-card-wrapper', // *required*
                formSelectors: {
                    numberInput: 'input#number', // optional — default input[name="number"]
                    expiryInput: 'input#expiry', // optional — default input[name="expiry"]
                    cvcInput: 'input#cvc', // optional — default input[name="cvc"]
                    nameInput: 'input#name' // optional - defaults input[name="name"]
                },
                width: 300, // optional — default 350px
                formatting: true, // optional - default true
                
                // Strings for translation - optional
                messages: {
                    validDate: 'valid\ndate', // optional - default 'valid\nthru'
                    monthYear: 'mm/yyyy', // optional - default 'month/year'
                },
                
                // Default placeholders for rendered fields - optional
                placeholders: {
                    number: '•••• •••• •••• ••••',
                    name: 'Full Name',
                    expiry: '••/••',
                    cvc: '•••'
                },
                masks: {
                    cardNumber: '' // optional - mask card number
                },
                // if true, will log helpful messages for setting up Card
                debug: false // optional - default false
            });
        },
        methods: {
            submitPayment() {
                this.$store.commit('sendTransaction');
            },
            showAdult() {
                this.adultVisible = true;
            },
            showChild() {
                this.adultVisible = false;
            },
            addAdultGuestLuncheon() {
                this.$store.commit('addGuestTicket', {
                    guestTicketType: 'Leadership Luncheon Guest Ticket',
                    guestName: this.guestName,
                    guestEmail: this.guestEmail,
                    price: 100.00,
                });
            },
            addAdultGuest() {
                this.$store.commit('addGuestTicket', {
                    guestTicketType: 'Adult Guest Ticket',
                    guestName: this.guestName,
                    guestEmail: this.guestEmail,
                    price: 80.00,
                });
            },
            addChildGuest() {
                this.$store.commit('addGuestTicket', {
                    guestTicketType: 'Child Guest',
                    guestName: this.guestName,
                    guestEmail: this.guestEmail,
                    price: 80.00,
                });
            },
            checkPromoCode() {

                this.$store.commit('checkPromoCode', this.promoCode);
            }
        }
    }
</script>

<style scoped>
    .smaller-cont {
        width: 80%;
        margin: 0 auto;
    }
    
    .sm-nav {
        display: flex;
        border-bottom: 1px solid #b4b4b4;
    }
    
    .sm-nav .btn {
        border-radius: 5px 5px 0 0;
    }
    
    .active {
        background-color: #a7a7a7;
        color: white;
    }
    
    #payment-form input[type="text"] {
        -webkit-appearance: none;
        -moz-appearance: none;
        border-radius: 0;
        background-color: #FFFFFF;
        border-style: solid;
        border-width: 1px;
        border-color: #cccccc;
        -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
        color: rgba(0, 0, 0, 0.75);
        display: block;
        font-family: inherit;
        font-size: 0.875rem;
        height: 2.3125rem;
        margin: 0 0 1rem 0;
        padding: 0.5rem;
        width: 100%;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        -webkit-transition: border-color 0.15s linear, background 0.15s linear;
        transition: border-color 0.15s linear, background 0.15s linear;
    }
    
    #payment-form div[class*=col] {
        padding-left: 0;
        padding-right: 0;
    }
    
    .postfix.button {
        border: none;
        padding-left: 0;
        padding-right: 0;
        padding-bottom: 0;
        padding-top: 0;
        text-align: center;
        font-size: 0.875rem;
        height: 2.3125rem;
        line-height: 2.3125rem;
        overflow: visible;
        width: 100%;
        z-index: 2;
    }
</style>



