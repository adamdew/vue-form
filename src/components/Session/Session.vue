<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h2 class="panel-title">Session Registration</h2>
        </div>
        <div class="panel-body">
            <table class="table">
                <thead>
                <tr>
                    <th>Scientific Sessions Program<br/>(Friday, June 8 - Sunday, June 10)</th>
                    <th><em>Early Bird</em><br/>(Up to April 27)</th>
                    <th><em>Regular</em><br/>(After April 27)</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                <SessionRow
                        name="Scientific Sessions"
                        factor="FSO Member"
                ></SessionRow>
                <SessionRow
                        name="Scientific Sessions"
                        factor="Non-Member"
                ></SessionRow>
                <SessionRow
                        name="Scientific Sessions"
                        factor="Ophthalmic Nurse"
                ></SessionRow>
                <SessionRow
                        name="Scientific Sessions"
                        factor="In-Training"
                ></SessionRow>
                <tr>
                    <th colspan="3">Office Administrator Program<br/>(Saturday, June 9)</th>
                </tr>
                <SessionRow
                        name="Office Administrator"
                        factor="FSO Member"
                ></SessionRow>
                <SessionRow
                        name="Office Administrator"
                        factor="Non-Member"
                ></SessionRow>
                <SessionRow
                        name="Office Administrator"
                        factor="Ophthalmic Nurse"
                ></SessionRow>
                <tr>
                    <th colspan="3">Coding and Reimbursement Program<br/>(Friday, June 8)</th>
                </tr>
                <SessionRow
                        name="Coding and Reimbursement"
                        factor="FSO Member"
                ></SessionRow>
                <SessionRow
                        name="Coding and Reimbursement"
                        factor="Non-Member"
                ></SessionRow>
                <SessionRow
                        name="Coding and Reimbursement"
                        factor="Ophthalmic Nurse"
                ></SessionRow>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>

    import {mapGetters} from 'vuex';
    import SessionRow from './SessionRow'

    export default {
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
        },
        components: {
            SessionRow
        }
    }
</script>