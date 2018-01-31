<template>
    <div>
        <div class="form-section">
            <h3 class="form-section-head user-info">Info</h3>
            <div class="form-section-body user-info">
                <p><strong>Personal Info:</strong></p>
                <p>{{ state.personalInfo.firstName }} {{ state.personalInfo.lastName}}, {{state.personalInfo.degree}}<br>
                 {{ state.personalInfo.email }}<br>
                   {{ state.personalInfo.phone }} </p>

                <p><strong>Address:</strong></p>
                <p>
                    {{ state.personalInfo.address1 }}<br>
                    {{ state.personalInfo.address2 }}
                    {{ state.personalInfo.city }}, {{ state.personalInfo.state }} {{ state.personalInfo.zip }} <br>
                    {{ state.personalInfo.country }}
                </p>
            </div>
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
    .form-section-head.user-info {
        background-color: transparent;

    }
    .form-section-body.user-info {
        border-top: solid 1px #dddddd;
        border: none;
    }
</style>