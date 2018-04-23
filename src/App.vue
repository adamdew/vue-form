<template>
    <div id="app" class="container">
        <div class="row">
            <div class="col-sm-12">
                <ul class="nav nav-pills justify-content-center">
                    <router-link tag="li" class="nav-item" active-class="active" to="/Sessions">
                        <a class="nav-link">Sessions</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" active-class="active" to="/PersonalInformation">
                        <a class="nav-link">Contact Info</a>
                    </router-link>
                    <router-link tag="li" class="nav-item" active-class="active" to="/GuestTickets">
                        <a class="nav-link">Guests</a>
                    </router-link>
                </ul>
                
            </div>
        </div>
        <transition name="component-fade" mode="out-in">
            <div v-if="nameIsSet">
                <div class="alert alert-info" role="alert">
                    Hello, <strong>{{ state.personalInfo.firstName }} {{ state.personalInfo.lastName
                    }}, {{ state.personalInfo.degree }}</strong>
                </div>
            </div>
        </transition>
        <div v-if="sessionIsSet" class="row">
            <div class="col-md-8">
                <transition name="component-fade" mode="out-in">
                    <router-view></router-view>
                </transition>
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
                    <router-view></router-view>
                </transition>
                <!--<FormControl/>-->
            </div>
        </div>
        <div class="form-buttons">
            <transition name="component-fade" mode="out-in">
                <div id="warnings" class="row">
                    <div class="col-sm-12">
                        <div v-if="state.incomplete.length !== 0" class="alert alert-info" role="alert">
                            There are {{state.incomplete.length}} incomplete fields in your submission, please fill them
                            out before finishing.
                        </div>
                    </div>
                </div>
            </transition>
            <!--<div class="row">-->
                <!--<div class="col-sm-12">-->
                    <!--<button style='float:right' id="next-btn" class="btn btn-info"-->
                            <!--@click="nextPage()">Next-->
                    <!--</button>-->
                <!--</div>-->
            <!--</div>-->
        
        </div>
    </div>
</template>

<script>
    
    import PersonalInformation from './components/PersonalInformation'
    import Sessions from './components/Sessions'
    import FormReceipt from './components/FormReceipt'
    import UserInfo from './components/UserInfo'
    import GuestTickets from './components/GuestTickets'
    
    import {mapGetters} from 'vuex';
    
    export default {
        name: 'App',
        components: {
            PersonalInformation,
            Sessions,
            FormReceipt,
            UserInfo,
            GuestTickets
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
            },
            sessionIsSet: function () {
                if (!this.state.session) {
                    return false;
                }
                else {
                    return true;
                }
            },
        },
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
        transition: opacity .1s ease;
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
    /*.router-link-active{*/
        /*background-color: #a7a7a7;*/
        /*color: white;*/
    /*}*/
    .review-container {
        background-color: #dddddd40;
        border-radius: 4px;
    }
    .active {
        background-color: #f6f6f6;
    }
    hr {
        color: black;
    }
    .nav {
        margin-bottom:1rem;
    }
</style>
