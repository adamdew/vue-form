<template>
    <div class="form-section">
        <div class="form-section-head">
            <h4>Guest Tickets</h4>
        </div>
        <div class="form-section-body">
            <div class="smaller-cont">
                
                <div class="btn-group sm-nav" role="group" aria-label="Basic example">
                    <button v-bind:class="{ active: adultVisible }" type="button" class="btn btn-default" @click="showAdult">Adult Tickets</button>
                    <button v-bind:class="{ active: !adultVisible }" type="button" class="btn btn-default" @click="showChild">Child Tickets</button>
                </div>
                
                
                <br>
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="guestName">Name: </label>
                            <input v-model="guestName" class="form-control" id="guestName" placeholder="Jane Doe">
                        </div>
                        
                        <div class="form-group col-md-6">
                            <label for="guestEmail">Email: </label>
                            <input v-model="guestEmail" type="email" class="form-control" id="guestEmail"
                                   placeholder="jane.doe@example.com">
                        
                        </div>
                    </div>
                
                </form>
                <div v-if="adultVisible" class="row">
                    <div class="col-sm-6">
                        <p><strong>Leadership Luncheon Guest Ticket $100.00</strong></p>
                        <p>
                            <small>(Adult guests may attend, but MUST pre-register for this event.)</small>
                        </p>
                        <button type="submit" class="btn btn-default" @click="addAdultGuestLuncheon">Add Ticket</button>
                    </div>
                    <div class="col-sm-6">
                        <p><strong>Adult Guest $80.00</strong></p>
                        <p>
                            <small>(Includes 1 badge with unlimited access to exhibit hall on Friday & Saturday and to
                                the
                                Saturday evening reception.)
                            </small>
                        </p>
                        <button type="submit" class="btn btn-default" @click="addAdultGuest">Add Ticket</button>
                    </div>
                </div>
                <div v-else class="row">
                    <div class="col-sm-12">
                        <p><strong>Child Guest $40.00</strong></p>
                        <p>
                            <small>(Includes 1 badge with unlimited access to exhibit hall on Friday & Saturday & access
                                to the Saturday evening reception.)
                            </small>
                        </p>
                        <button type="submit" class="btn btn-default" @click="addChildGuest">Add Ticket</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-sm-12">
                <br/>
                <router-link style='float:right' class="btn btn-info" to="/Checkout">
                    Next <small>(Checkout)</small>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex';
    
    export default {
        data: function () {
            return {
                adultVisible: true,
                guestName: '',
                guestEmail: ''
            }
        },
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            
        },
        methods: {
            showAdult() {
                this.adultVisible = true;
            },
            showChild() {
                this.adultVisible = false;
            },
            addAdultGuestLuncheon(){
                this.$store.commit('addGuestTicket', {
                    guestTicketType: 'Leadership Luncheon Guest Ticket',
                    guestName: this.guestName,
                    guestEmail: this.guestEmail,
                    price: '100.00',
                });
            },
            addAdultGuest(){
                this.$store.commit('addGuestTicket', {
                    guestTicketType: 'Adult Guest Ticket',
                    guestName: this.guestName,
                    guestEmail: this.guestEmail,
                    price: '80.00',
                });
            },
            addChildGuest(){
                this.$store.commit('addGuestTicket', {
                    guestTicketType: 'Child Guest',
                    guestName: this.guestName,
                    guestEmail: this.guestEmail,
                    price: '80.00',
                });
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
</style>



