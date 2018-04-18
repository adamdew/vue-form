// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios';
//
// var apiConfig = {
//     data: {},
//     headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     method: 'post',
//     url: 'https://www.ophmasters.com/registration/reg_api.php',
// };


const state = {
    cart: [],
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
        phone: '',
    },
    priceSheet: {
        panelId: 1,
        priceData: {
            combined: [],
            earlybird: true
        }
    },
    errors: [],
    //Below are the fields we want to be required
    incomplete: [
        'firstName',
        'lastName',
        'degree',
        'email',
        'address1',
        'city',
        'country',
        'state',
        'zip',
        'phone',
    ],
    completion: {
        fieldRequirement: false,
        itemRequirement: false
    },
    session: '',
    breakoutSession: '',
    items: [],
    stateList: usStates,
    countryList: countries
}

export default {
    state,
    mutations
}

