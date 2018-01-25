<template>
    <div id="app">
        <transition name="component-fade" mode="out-in">
            <PersonalInformation v-if="state.panelRouting.active === state.personalInfo.panelId"  />
            <CompanyInformation v-if="state.panelRouting.active === state.companyInfo.panelId" />
            <PriceSheet v-if="state.panelRouting.active === state.priceSheet.panelId" />
        </transition>
    </div>
</template>

<script>
    import PersonalInformation from './components/PersonalInformation'
    import CompanyInformation from './components/CompanyInformation'
    import PriceSheet from './components/PriceSheet'

    import {mapGetters} from 'vuex';
    export default {
        name: 'App',
        components: {
            PersonalInformation,
            CompanyInformation,
            PriceSheet
        },
        computed: mapGetters({
            state: 'getState'
        }),
        methods: {

        }
    }
</script>

<style>
    #app {
        width: 100%;
        margin: 0 auto;
    }
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity .2s ease;
    }
    .component-fade-enter, .component-fade-leave-to
        /* .component-fade-leave-active below version 2.1.8 */ {
        opacity: 0;
    }
</style>
