import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex);

var apiConfig = {
    data   : {},
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    method : 'post',
    url    : 'https://www.ophmasters.com/registration/reg_api.php',

}

export const store = new Vuex.Store({
    state: {
        panelRouting: {
          active: 1,
        },
        personalInfo: {
            panelId: 2,
            firstName: '',
            middleName: '',
            lastName: '',
            degree: '',
            email: '',
            company: '',
            address1: '',
            address2: '',
            city: '',
            country: '',
            state: '',
            zip: '',
            phone: ''
        },
        companyInfo: {
            panelId: 3,
            companyName: ''
        },
        priceSheet: {
            panelId: 1,
            priceData: {
                ssData:{},
                oaData: {},
                codingData: {},
                combined:{}
            }
        }
    },
    getters: {
        getState(state){
            return state;
        }
    },
    mutations: {
        updatePersonalInfo(state, newState){
            state.personalInfo = {
                firstName: newState.personalInfo.firstName,
                middleName: newState.personalInfo.middleName,
                lastName: newState.personalInfo.lastName,
                phone: newState.personalInfo.phone,
                email: newState.personalInfo.email,
                degree: newState.personalInfo.degree,
                company: newState.personalInfo.company,
                address1: newState.personalInfo.address1,
                address2: newState.personalInfo.address2,
                city: newState.personalInfo.city,
                country: newState.personalInfo.country,
                state: newState.personalInfo.state,
                zip: newState.personalInfo.zip
            }
        },
        updateCompanyInfo(state, newState){
            state.companyInfo = {
                companyName: newState.companyInfo.companyName,
                panelId: newState.companyInfo.panelId,
            }
        },
        updatePriceSheetInfo(state, newState){
            state.priceSheet = {
                panelId: newState,
                fetchedData: newState.fetchedData,
            }
        },
        nextPage(state){
            state.panelRouting.active++;
        },
        previousPage(state){
            state.panelRouting.active--;
        },
        fetchPrices(state, query){
            const params = new URLSearchParams();
            params.append('query', query);
            const app = this;
            apiConfig.data = params;
            axios(apiConfig).then(function (response) {
                if(query === 'combined_prices'){
                    console.log(response.data);
                    app.state.priceSheet.priceData.combined = response.data;
                }
            }).catch(function (error) {
                alert(error);
            });
        }
    },

});