<template>
    <div>

        <div  class="table table-sm" style="margin-top:10px">
            <h4 style="padding:10px">Items</h4>
            <tr>
                <th><small>Product Name</small></th>
                <th style="text-align: right"><small>Price</small></th>
                <th></th>
            </tr>
            <tr v-for="productID in state.sessions">
                <td>
                    <small>{{ selectedSession(productID).name }} - {{selectedSession(productID).factor}}</small>
                </td>

                <td style="text-align: right">
                    <small>${{ selectedSession(productID).price }}</small>
                </td>
                <td>
                    <router-link class="btn btn-sm" to="/Sessions">
                        Change
                    </router-link>
                </td>
            </tr>
            <tr v-if="state.breakoutSession">
                <td>
                    <small>{{ breakoutSession.name+" - "+breakoutSession.description}}</small>
                </td>
                <td style="text-align: right">
                    <small>${{ breakoutSession.price }}</small>
                </td>
                <td>
                    <button @click="removeBreakout" class="btn btn-sm">Remove</button>
                </td>
            </tr>
            <tr v-if="state.yoSeminar">
                <td>
                    <small>{{ yoSeminar.name+" - "+yoSeminar.description}}</small>
                </td>
                <td style="text-align: right">
                    <small>${{ yoSeminar.price }}</small>
                </td>
                <td>
                    <button @click="removeYoSeminar" class="btn btn-sm">Remove</button>
                </td>
            </tr>
            <tr v-for="guestTicket in state.guests">
                <td v-if="guestTicket.degree">
                    <small>{{ guestTicket.guestTicketType+" - "+guestTicket.firstName+" "+guestTicket.lastName+", "+guestTicket.degree}}</small>
                </td>
                <td v-else>
                    <small>{{ guestTicket.guestTicketType+" - "+guestTicket.firstName+" "+guestTicket.lastName}}</small>
                </td>
                <td style="text-align: right">
                    <small>${{ guestTicket.price }}</small>
                </td>
                <td>
                    <button @click="removeGuest(guestTicket)" class="btn btn-sm">Remove</button>
                </td>
            </tr>
            <tr>
                <td><h4>Total:</h4></td>
                <td></td>
                <td style="text-align: right"><h4>${{ this.subTotal }}</h4></td>
            </tr>

        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    
    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),

            breakoutSession: function(){
                return this.getProduct(this.state.breakoutSession);
            },
            yoSeminar: function() {
                return this.getProduct(this.state.yoSeminar);
            },
            guestTotal: function(){
                let guestTotal = 0;
                for(let i = 0; i < this.state.guests.length; i++){
                    guestTotal += parseInt(this.state.guests[i].price);
                }
                return guestTotal;
            },
            subTotal: function (){

                let sessionTotal = 0;
                for(let i = 0; i < this.state.sessions.length; i++){
                    sessionTotal += parseInt(this.getProduct(this.state.sessions[i]).price);
                }
                let subTotal = sessionTotal + parseInt(this.guestTotal);
                this.state.cartTotal = subTotal;
                return subTotal.toFixed(2);

            }
        },
        methods: {
            selectedSession: function(session){
                return this.getProduct(session);
            },
            getProduct: function(PRODUCTID){
                let needle = '';
                this.state.priceSheet.priceData.combined.filter((product) => {
                    if(product.PRODUCTID === PRODUCTID){
                        needle = product;
                    }
                });
                return needle;
            },
            removeBreakout: function(){
                this.$store.commit('removeBreakout');
            },
            removeYoSeminar: function(){
                this.$store.commit('removeYoSeminar');
            },
            removeGuest: function(guestTicket){
                this.$store.commit('removeGuest', guestTicket);
            }
        }
    }
</script>

<style>
    .receipt-table {

        margin-top: 10px;
        padding: 10px;

    }
</style>
