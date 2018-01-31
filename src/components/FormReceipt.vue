<template>
    <div>
        <div class="table receipt-table">
            <h2 style="text-align: center">Your Items</h2>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
            </tr>
            <tr>
                <td>{{ state.items.sessionSelection.info[0].name}} - {{ state.items.sessionSelection.info[0].factor}} -
                    {{ state.items.sessionSelection.info[0].description}}
                </td>
                <td>${{ state.items.sessionSelection.info[0].price}}</td>
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
        },
        methods: {}
    }
</script>

<style>
    .receipt-table {

        margin-top: 10px;
        padding: 10px;
        border: solid 1px #dddddd;
        border-radius: 4px;
        background-color: #dddddd2b;
    }
</style>