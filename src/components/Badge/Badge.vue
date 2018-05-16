<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Badge Registration
                <small>2 complimentary badges per booth. Additional badges will cost ${{ badge_price }} each</small>
            </h2>
        </div>
        <div class="panel-body">
            <table class="table table__ticket">
                <tbody>
                    <tr class="ticket_table_head">
                        <td>Name</td>
                        <td>Phone</td>
                        <td width="80" align="right">
                            Price
                        </td>
                        <td></td>
                    </tr>
                    <tr v-for="(badge, idx) in getBadges">
                        <td :class="{ 'control': true }">
                            <input
                                    type="text"
                                    data-vv-as="name"
                                    v-validate="'required'"
                                    class="block"
                                    :name="'badgesInCart['+idx+'].attributes.name'"
                                    v-model="badge.attributes.name"
                            />
                            <span v-show="errors.has('badgesInCart['+idx+'].attributes.name')"
                                  class="help is-danger">{{ errors.first('badgesInCart['+idx+'].attributes.name') }}</span>
                        </td>
                        <td>
                            <input
                                    type="text"
                                    data-vv-as="phone number"
                                    v-validate="'required'"
                                    class="block"
                                    :name="'badgesInCart['+idx+'].attributes.phone_number'"
                                    v-model="badge.attributes.phone_number"
                            />
                            <span v-show="errors.has('badgesInCart['+idx+'].attributes.phone_number')"
                                  class="help is-danger">{{ errors.first('badgesInCart['+idx+'].attributes.phone_number') }}</span>
                        </td>
                        <td align="right">{{ badge.price | formatMoney }}</td>
                        <td align="right"><span class="delete-badge" v-on:click="deleteBadge(badge)">X</span></td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td align="left" colspan="4">
                            <button class="btn btn-primary btn-sm" v-on:click="addFreeBadge">Add a Free Badge (<span>{{ this.totalFreeBadgesMax - this.totalFreeBadges }}</span> remaining)</button>
                            <button class="btn btn-primary btn-sm" v-on:click="addPaidBadge">Add a Badge ($50)</button>
                        </td>
                    </tr>
                </tfoot>
            </table>

        </div>
    </div>
</template>
<script>

    import { mapState, mapGetters, mapActions } from 'vuex';

    export default {
        name: 'Badge',
        inject: ['$validator'],
        data: function() {
            return {
                totalBadges: 0,
                totalFreeBadges: 0,
                totalFreeBadgesMax: 0
            }

        },
        computed: {
            ...mapGetters([
                'cartValue',
                'cartItemList',
                'getBadges'
            ]),
            ...mapState(['Cart', 'badge_price', 'CompanyInfo']),

        },
        methods: {
            ...mapActions([
                'addToCart', 'deleteFromCart'
            ]),
            addFreeBadge: function() {

                if (this.totalFreeBadges < this.totalFreeBadgesMax) {
                    let idx = this.totalBadges + 1;
                    this.addToCart({
                        id: 'badge_' + Math.floor(Math.random() * 999999) + 100000,
                        name: 'Free Badge',
                        category: 'Badge',
                        quantity: 1,
                        price: 0,
                        attributes: {
                            name: null,
                            phone_number: null
                        }
                    });
                }
            },
            addPaidBadge: function() {
                    let idx = this.totalBadges + 1;
                    this.addToCart({
                        id: 'badge_' + Math.floor(Math.random() * 999999) + 100000,
                        name: 'Paid Badge',
                        category: 'Badge',
                        quantity: 1,
                        price: this.badge_price,
                        attributes: {
                            name: null,
                            phone_number: null
                        }
                    });

            },
            deleteBadge: function(product) {
                this.deleteFromCart(product);
            }
        },
        watch: {
            cartItemList: {
                handler(state) {
                    console.log('a')
                    this.totalBadges = 0;
                    this.totalFreeBadges = 0;
                    this.totalFreeBadgesMax = 0;
                    this.cartItemList.map((item, idx) => {
                        if (item.category === 'booth') {
                            this.totalFreeBadgesMax += item.quantity * 2;
                        }
                        if (item.category === 'Badge') {
                            this.totalBadges += 1;
                            if (item.price === 0) {
                                this.totalFreeBadges += 1;
                            }
                        }
                    });

                    if(this.totalFreeBadges > this.totalFreeBadgesMax) {
                        let i = 0;
                        const finish = this.totalFreeBadges - this.totalFreeBadgesMax;
                        this.cartItemList.slice(0).reverse().map((item, idx) => {
                            if (i < finish && item.category === 'Badge' && item.price === 0) {
                                this.deleteFromCart(item);
                                i++;
                            }
                        });
                    }
                    this.$nextTick()
                },
                deep: true
            }
        }

    }
</script>