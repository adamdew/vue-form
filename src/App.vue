<template>
    <div id="app" class="container">
        <transition name="component-fade" mode="out-in">
            <div v-if="nameIsSet">
                <div class="alert alert-info" role="alert">
                    Hello, <strong>{{ state.personalInfo.firstName }} {{ state.personalInfo.lastName
                    }}, {{ state.personalInfo.degree }}</strong>
                </div>
            </div>
        </transition>
        <div v-if="state.items.sessionSelection.PRODUCTID > 0" class="row">
            <div class="col-md-8">
                <transition name="component-fade" mode="out-in">
                    <PriceSheet v-if="state.panelRouting.active === state.priceSheet.panelId"/>
                    <PersonalInformation v-if="state.panelRouting.active === state.personalInfo.panelId"/>
                </transition>
                <FormControl/>
            </div>
            <div class="col-md-4">
                <div class="container review-container">
                    <FormReceipt></FormReceipt>
                </div>
                <div v-if="nameIsSet" class="container review-container">
                    <UserInfo></UserInfo>
                </div>
            </div>
        </div>
        <div v-else class="row">
            <div class="col-md-12">
                <transition name="component-fade" mode="out-in">
                    <PriceSheet v-if="state.panelRouting.active === state.priceSheet.panelId"/>
                    <PersonalInformation v-if="state.panelRouting.active === state.personalInfo.panelId"/>
                    <CompanyInformation v-if="state.panelRouting.active === state.companyInfo.panelId"/>
                </transition>
                <FormControl/>
            </div>
        </div>

    </div>
</template>

<script>
    import PersonalInformation from './components/PersonalInformation'
    import PriceSheet from './components/PriceSheet'
    import FormReceipt from './components/FormReceipt'
    import FormControl from './components/FormControl'
    import UserInfo from './components/UserInfo'
    import {mapGetters} from 'vuex';

    export default {
        name: 'App',
        components: {
            PersonalInformation,
            PriceSheet,
            FormReceipt,
            UserInfo,
            FormControl
        },
        computed: {
            ...mapGetters({
                state: 'getState',
            }),
            nameIsSet: function () {
                if (this.state.personalInfo.firstName == '') {
                    return false;
                } else if (this.state.personalInfo.degree == '') {
                    return false;
                } else if (this.state.personalInfo.lastName == '') {
                    return false;
                } else {
                    return true;
                }
            }
        },
        methods: {}
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
        /* .component-fade-leave-active below version 2.1.8 */
    {
        opacity: 0;
    }

    .form-section {
        margin-top: 10px;
    }

    .form-section-head {
        border-radius: 4px 4px 0 0;
        padding: 10px;
        border-bottom: 1px solid transparent;
        background-color: #dddddd40;
        margin: 0;
    }

    .form-section-body {
        padding: 10px;
        border: solid 1px #dddddd;
        border-radius: 0 0 4px 4px;
        border-top: 1px solid transparent;
    }

    .review-container {
        background-color: #dddddd40;
        border-radius: 4px;
    }

    hr {
        color: black;
    }
</style>
