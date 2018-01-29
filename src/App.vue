<template>
    <div id="app">
        <div v-if="nameIsSet" class="container">
            <div class="alert alert-info" role="alert">
                Hello, <strong>{{ state.personalInfo.firstName }} {{ state.personalInfo.lastName }}, {{ state.personalInfo.degree }}</strong>
            </div>
        </div>
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
        data: function(){
            return {
                nameSet: false
            }
        },
        computed: mapGetters({
            state: 'getState',
        }),
        methods: {
            nameIsSet: function () {
                if(this.state.personalInfo.firstName == ''){
                   this.nameSet = false;
                } else if(this.state.personalInfo.middleName == ''){
                    this.nameSet = false;
                } else if(this.state.personalInfo.lastName == ''){
                    this.nameSet = false;
                } else {
                    this.nameSet = true;
                }
            },
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
