<template>
    <div>
        <div class="form-section">
            <h4 class="form-section-head user-info">Info</h4>
            <div class="form-section-body user-info">
                <p><strong>Personal Info:</strong></p>
                <p>
                    {{ state.personalInfo.firstName }} {{ state.personalInfo.lastName}},
                    {{state.personalInfo.degree}}<br>
                    {{ state.personalInfo.email }}<br>
                    {{ state.personalInfo.phone }}
                </p>

                <p><strong>Address:</strong></p>
                <p>
                    {{ state.personalInfo.address1 }}<br>
                    <!--show hide for non-required element, otherwise linebreak would be automaticly there -->
                    <span v-if="state.personalInfo.address2">{{ state.personalInfo.address2 }}<br/></span>
                    {{ state.personalInfo.city }}, {{ state.personalInfo.state.name }} {{ state.personalInfo.zip }} <br>
                    {{ state.personalInfo.country.name }}
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
