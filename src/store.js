import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

const apiConfig = {
    data: {},
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'post',
    url: 'https://www.ophmasters.com/registration/reg_api.php',
};
const usStates = [
    {
        "name": "Alabama",
        "abbreviation": "AL"
    },
    {
        "name": "Alaska",
        "abbreviation": "AK"
    },
    {
        "name": "American Samoa",
        "abbreviation": "AS"
    },
    {
        "name": "Arizona",
        "abbreviation": "AZ"
    },
    {
        "name": "Arkansas",
        "abbreviation": "AR"
    },
    {
        "name": "California",
        "abbreviation": "CA"
    },
    {
        "name": "Colorado",
        "abbreviation": "CO"
    },
    {
        "name": "Connecticut",
        "abbreviation": "CT"
    },
    {
        "name": "Delaware",
        "abbreviation": "DE"
    },
    {
        "name": "District Of Columbia",
        "abbreviation": "DC"
    },
    {
        "name": "Federated States Of Micronesia",
        "abbreviation": "FM"
    },
    {
        "name": "Florida",
        "abbreviation": "FL"
    },
    {
        "name": "Georgia",
        "abbreviation": "GA"
    },
    {
        "name": "Guam",
        "abbreviation": "GU"
    },
    {
        "name": "Hawaii",
        "abbreviation": "HI"
    },
    {
        "name": "Idaho",
        "abbreviation": "ID"
    },
    {
        "name": "Illinois",
        "abbreviation": "IL"
    },
    {
        "name": "Indiana",
        "abbreviation": "IN"
    },
    {
        "name": "Iowa",
        "abbreviation": "IA"
    },
    {
        "name": "Kansas",
        "abbreviation": "KS"
    },
    {
        "name": "Kentucky",
        "abbreviation": "KY"
    },
    {
        "name": "Louisiana",
        "abbreviation": "LA"
    },
    {
        "name": "Maine",
        "abbreviation": "ME"
    },
    {
        "name": "Marshall Islands",
        "abbreviation": "MH"
    },
    {
        "name": "Maryland",
        "abbreviation": "MD"
    },
    {
        "name": "Massachusetts",
        "abbreviation": "MA"
    },
    {
        "name": "Michigan",
        "abbreviation": "MI"
    },
    {
        "name": "Minnesota",
        "abbreviation": "MN"
    },
    {
        "name": "Mississippi",
        "abbreviation": "MS"
    },
    {
        "name": "Missouri",
        "abbreviation": "MO"
    },
    {
        "name": "Montana",
        "abbreviation": "MT"
    },
    {
        "name": "Nebraska",
        "abbreviation": "NE"
    },
    {
        "name": "Nevada",
        "abbreviation": "NV"
    },
    {
        "name": "New Hampshire",
        "abbreviation": "NH"
    },
    {
        "name": "New Jersey",
        "abbreviation": "NJ"
    },
    {
        "name": "New Mexico",
        "abbreviation": "NM"
    },
    {
        "name": "New York",
        "abbreviation": "NY"
    },
    {
        "name": "North Carolina",
        "abbreviation": "NC"
    },
    {
        "name": "North Dakota",
        "abbreviation": "ND"
    },
    {
        "name": "Northern Mariana Islands",
        "abbreviation": "MP"
    },
    {
        "name": "Ohio",
        "abbreviation": "OH"
    },
    {
        "name": "Oklahoma",
        "abbreviation": "OK"
    },
    {
        "name": "Oregon",
        "abbreviation": "OR"
    },
    {
        "name": "Palau",
        "abbreviation": "PW"
    },
    {
        "name": "Pennsylvania",
        "abbreviation": "PA"
    },
    {
        "name": "Puerto Rico",
        "abbreviation": "PR"
    },
    {
        "name": "Rhode Island",
        "abbreviation": "RI"
    },
    {
        "name": "South Carolina",
        "abbreviation": "SC"
    },
    {
        "name": "South Dakota",
        "abbreviation": "SD"
    },
    {
        "name": "Tennessee",
        "abbreviation": "TN"
    },
    {
        "name": "Texas",
        "abbreviation": "TX"
    },
    {
        "name": "Utah",
        "abbreviation": "UT"
    },
    {
        "name": "Vermont",
        "abbreviation": "VT"
    },
    {
        "name": "Virgin Islands",
        "abbreviation": "VI"
    },
    {
        "name": "Virginia",
        "abbreviation": "VA"
    },
    {
        "name": "Washington",
        "abbreviation": "WA"
    },
    {
        "name": "West Virginia",
        "abbreviation": "WV"
    },
    {
        "name": "Wisconsin",
        "abbreviation": "WI"
    },
    {
        "name": "Wyoming",
        "abbreviation": "WY"
    }
];
const countries = [
    {name: 'Afghanistan', abbreviation: 'AF'},
    {name: 'Åland Islands', abbreviation: 'AX'},
    {name: 'Albania', abbreviation: 'AL'},
    {name: 'Algeria', abbreviation: 'DZ'},
    {name: 'American Samoa', abbreviation: 'AS'},
    {name: 'AndorrA', abbreviation: 'AD'},
    {name: 'Angola', abbreviation: 'AO'},
    {name: 'Anguilla', abbreviation: 'AI'},
    {name: 'Antarctica', abbreviation: 'AQ'},
    {name: 'Antigua and Barbuda', abbreviation: 'AG'},
    {name: 'Argentina', abbreviation: 'AR'},
    {name: 'Armenia', abbreviation: 'AM'},
    {name: 'Aruba', abbreviation: 'AW'},
    {name: 'Australia', abbreviation: 'AU'},
    {name: 'Austria', abbreviation: 'AT'},
    {name: 'Azerbaijan', abbreviation: 'AZ'},
    {name: 'Bahamas', abbreviation: 'BS'},
    {name: 'Bahrain', abbreviation: 'BH'},
    {name: 'Bangladesh', abbreviation: 'BD'},
    {name: 'Barbados', abbreviation: 'BB'},
    {name: 'Belarus', abbreviation: 'BY'},
    {name: 'Belgium', abbreviation: 'BE'},
    {name: 'Belize', abbreviation: 'BZ'},
    {name: 'Benin', abbreviation: 'BJ'},
    {name: 'Bermuda', abbreviation: 'BM'},
    {name: 'Bhutan', abbreviation: 'BT'},
    {name: 'Bolivia', abbreviation: 'BO'},
    {name: 'Bosnia and Herzegovina', abbreviation: 'BA'},
    {name: 'Botswana', abbreviation: 'BW'},
    {name: 'Bouvet Island', abbreviation: 'BV'},
    {name: 'Brazil', abbreviation: 'BR'},
    {name: 'British Indian Ocean Territory', abbreviation: 'IO'},
    {name: 'Brunei Darussalam', abbreviation: 'BN'},
    {name: 'Bulgaria', abbreviation: 'BG'},
    {name: 'Burkina Faso', abbreviation: 'BF'},
    {name: 'Burundi', abbreviation: 'BI'},
    {name: 'Cambodia', abbreviation: 'KH'},
    {name: 'Cameroon', abbreviation: 'CM'},
    {name: 'Canada', abbreviation: 'CA'},
    {name: 'Cape Verde', abbreviation: 'CV'},
    {name: 'Cayman Islands', abbreviation: 'KY'},
    {name: 'Central African Republic', abbreviation: 'CF'},
    {name: 'Chad', abbreviation: 'TD'},
    {name: 'Chile', abbreviation: 'CL'},
    {name: 'China', abbreviation: 'CN'},
    {name: 'Christmas Island', abbreviation: 'CX'},
    {name: 'Cocos (Keeling) Islands', abbreviation: 'CC'},
    {name: 'Colombia', abbreviation: 'CO'},
    {name: 'Comoros', abbreviation: 'KM'},
    {name: 'Congo', abbreviation: 'CG'},
    {name: 'Congo, The Democratic Republic of the', abbreviation: 'CD'},
    {name: 'Cook Islands', abbreviation: 'CK'},
    {name: 'Costa Rica', abbreviation: 'CR'},
    {name: 'Cote D\'Ivoire', abbreviation: 'CI'},
    {name: 'Croatia', abbreviation: 'HR'},
    {name: 'Cuba', abbreviation: 'CU'},
    {name: 'Cyprus', abbreviation: 'CY'},
    {name: 'Czech Republic', abbreviation: 'CZ'},
    {name: 'Denmark', abbreviation: 'DK'},
    {name: 'Djibouti', abbreviation: 'DJ'},
    {name: 'Dominica', abbreviation: 'DM'},
    {name: 'Dominican Republic', abbreviation: 'DO'},
    {name: 'Ecuador', abbreviation: 'EC'},
    {name: 'Egypt', abbreviation: 'EG'},
    {name: 'El Salvador', abbreviation: 'SV'},
    {name: 'Equatorial Guinea', abbreviation: 'GQ'},
    {name: 'Eritrea', abbreviation: 'ER'},
    {name: 'Estonia', abbreviation: 'EE'},
    {name: 'Ethiopia', abbreviation: 'ET'},
    {name: 'Falkland Islands (Malvinas)', abbreviation: 'FK'},
    {name: 'Faroe Islands', abbreviation: 'FO'},
    {name: 'Fiji', abbreviation: 'FJ'},
    {name: 'Finland', abbreviation: 'FI'},
    {name: 'France', abbreviation: 'FR'},
    {name: 'French Guiana', abbreviation: 'GF'},
    {name: 'French Polynesia', abbreviation: 'PF'},
    {name: 'French Southern Territories', abbreviation: 'TF'},
    {name: 'Gabon', abbreviation: 'GA'},
    {name: 'Gambia', abbreviation: 'GM'},
    {name: 'Georgia', abbreviation: 'GE'},
    {name: 'Germany', abbreviation: 'DE'},
    {name: 'Ghana', abbreviation: 'GH'},
    {name: 'Gibraltar', abbreviation: 'GI'},
    {name: 'Greece', abbreviation: 'GR'},
    {name: 'Greenland', abbreviation: 'GL'},
    {name: 'Grenada', abbreviation: 'GD'},
    {name: 'Guadeloupe', abbreviation: 'GP'},
    {name: 'Guam', abbreviation: 'GU'},
    {name: 'Guatemala', abbreviation: 'GT'},
    {name: 'Guernsey', abbreviation: 'GG'},
    {name: 'Guinea', abbreviation: 'GN'},
    {name: 'Guinea-Bissau', abbreviation: 'GW'},
    {name: 'Guyana', abbreviation: 'GY'},
    {name: 'Haiti', abbreviation: 'HT'},
    {name: 'Heard Island and Mcdonald Islands', abbreviation: 'HM'},
    {name: 'Holy See (Vatican City State)', abbreviation: 'VA'},
    {name: 'Honduras', abbreviation: 'HN'},
    {name: 'Hong Kong', abbreviation: 'HK'},
    {name: 'Hungary', abbreviation: 'HU'},
    {name: 'Iceland', abbreviation: 'IS'},
    {name: 'India', abbreviation: 'IN'},
    {name: 'Indonesia', abbreviation: 'ID'},
    {name: 'Iran, Islamic Republic Of', abbreviation: 'IR'},
    {name: 'Iraq', abbreviation: 'IQ'},
    {name: 'Ireland', abbreviation: 'IE'},
    {name: 'Isle of Man', abbreviation: 'IM'},
    {name: 'Israel', abbreviation: 'IL'},
    {name: 'Italy', abbreviation: 'IT'},
    {name: 'Jamaica', abbreviation: 'JM'},
    {name: 'Japan', abbreviation: 'JP'},
    {name: 'Jersey', abbreviation: 'JE'},
    {name: 'Jordan', abbreviation: 'JO'},
    {name: 'Kazakhstan', abbreviation: 'KZ'},
    {name: 'Kenya', abbreviation: 'KE'},
    {name: 'Kiribati', abbreviation: 'KI'},
    {name: 'Korea, Democratic People\'S Republic of', abbreviation: 'KP'},
    {name: 'Korea, Republic of', abbreviation: 'KR'},
    {name: 'Kuwait', abbreviation: 'KW'},
    {name: 'Kyrgyzstan', abbreviation: 'KG'},
    {name: 'Lao People\'S Democratic Republic', abbreviation: 'LA'},
    {name: 'Latvia', abbreviation: 'LV'},
    {name: 'Lebanon', abbreviation: 'LB'},
    {name: 'Lesotho', abbreviation: 'LS'},
    {name: 'Liberia', abbreviation: 'LR'},
    {name: 'Libyan Arab Jamahiriya', abbreviation: 'LY'},
    {name: 'Liechtenstein', abbreviation: 'LI'},
    {name: 'Lithuania', abbreviation: 'LT'},
    {name: 'Luxembourg', abbreviation: 'LU'},
    {name: 'Macao', abbreviation: 'MO'},
    {name: 'Macedonia, The Former Yugoslav Republic of', abbreviation: 'MK'},
    {name: 'Madagascar', abbreviation: 'MG'},
    {name: 'Malawi', abbreviation: 'MW'},
    {name: 'Malaysia', abbreviation: 'MY'},
    {name: 'Maldives', abbreviation: 'MV'},
    {name: 'Mali', abbreviation: 'ML'},
    {name: 'Malta', abbreviation: 'MT'},
    {name: 'Marshall Islands', abbreviation: 'MH'},
    {name: 'Martinique', abbreviation: 'MQ'},
    {name: 'Mauritania', abbreviation: 'MR'},
    {name: 'Mauritius', abbreviation: 'MU'},
    {name: 'Mayotte', abbreviation: 'YT'},
    {name: 'Mexico', abbreviation: 'MX'},
    {name: 'Micronesia, Federated States of', abbreviation: 'FM'},
    {name: 'Moldova, Republic of', abbreviation: 'MD'},
    {name: 'Monaco', abbreviation: 'MC'},
    {name: 'Mongolia', abbreviation: 'MN'},
    {name: 'Montserrat', abbreviation: 'MS'},
    {name: 'Morocco', abbreviation: 'MA'},
    {name: 'Mozambique', abbreviation: 'MZ'},
    {name: 'Myanmar', abbreviation: 'MM'},
    {name: 'Namibia', abbreviation: 'NA'},
    {name: 'Nauru', abbreviation: 'NR'},
    {name: 'Nepal', abbreviation: 'NP'},
    {name: 'Netherlands', abbreviation: 'NL'},
    {name: 'Netherlands Antilles', abbreviation: 'AN'},
    {name: 'New Caledonia', abbreviation: 'NC'},
    {name: 'New Zealand', abbreviation: 'NZ'},
    {name: 'Nicaragua', abbreviation: 'NI'},
    {name: 'Niger', abbreviation: 'NE'},
    {name: 'Nigeria', abbreviation: 'NG'},
    {name: 'Niue', abbreviation: 'NU'},
    {name: 'Norfolk Island', abbreviation: 'NF'},
    {name: 'Northern Mariana Islands', abbreviation: 'MP'},
    {name: 'Norway', abbreviation: 'NO'},
    {name: 'Oman', abbreviation: 'OM'},
    {name: 'Pakistan', abbreviation: 'PK'},
    {name: 'Palau', abbreviation: 'PW'},
    {name: 'Palestinian Territory, Occupied', abbreviation: 'PS'},
    {name: 'Panama', abbreviation: 'PA'},
    {name: 'Papua New Guinea', abbreviation: 'PG'},
    {name: 'Paraguay', abbreviation: 'PY'},
    {name: 'Peru', abbreviation: 'PE'},
    {name: 'Philippines', abbreviation: 'PH'},
    {name: 'Pitcairn', abbreviation: 'PN'},
    {name: 'Poland', abbreviation: 'PL'},
    {name: 'Portugal', abbreviation: 'PT'},
    {name: 'Puerto Rico', abbreviation: 'PR'},
    {name: 'Qatar', abbreviation: 'QA'},
    {name: 'Reunion', abbreviation: 'RE'},
    {name: 'Romania', abbreviation: 'RO'},
    {name: 'Russian Federation', abbreviation: 'RU'},
    {name: 'RWANDA', abbreviation: 'RW'},
    {name: 'Saint Helena', abbreviation: 'SH'},
    {name: 'Saint Kitts and Nevis', abbreviation: 'KN'},
    {name: 'Saint Lucia', abbreviation: 'LC'},
    {name: 'Saint Pierre and Miquelon', abbreviation: 'PM'},
    {name: 'Saint Vincent and the Grenadines', abbreviation: 'VC'},
    {name: 'Samoa', abbreviation: 'WS'},
    {name: 'San Marino', abbreviation: 'SM'},
    {name: 'Sao Tome and Principe', abbreviation: 'ST'},
    {name: 'Saudi Arabia', abbreviation: 'SA'},
    {name: 'Senegal', abbreviation: 'SN'},
    {name: 'Serbia and Montenegro', abbreviation: 'CS'},
    {name: 'Seychelles', abbreviation: 'SC'},
    {name: 'Sierra Leone', abbreviation: 'SL'},
    {name: 'Singapore', abbreviation: 'SG'},
    {name: 'Slovakia', abbreviation: 'SK'},
    {name: 'Slovenia', abbreviation: 'SI'},
    {name: 'Solomon Islands', abbreviation: 'SB'},
    {name: 'Somalia', abbreviation: 'SO'},
    {name: 'South Africa', abbreviation: 'ZA'},
    {name: 'South Georgia and the South Sandwich Islands', abbreviation: 'GS'},
    {name: 'Spain', abbreviation: 'ES'},
    {name: 'Sri Lanka', abbreviation: 'LK'},
    {name: 'Sudan', abbreviation: 'SD'},
    {name: 'Suriname', abbreviation: 'SR'},
    {name: 'Svalbard and Jan Mayen', abbreviation: 'SJ'},
    {name: 'Swaziland', abbreviation: 'SZ'},
    {name: 'Sweden', abbreviation: 'SE'},
    {name: 'Switzerland', abbreviation: 'CH'},
    {name: 'Syrian Arab Republic', abbreviation: 'SY'},
    {name: 'Taiwan, Province of China', abbreviation: 'TW'},
    {name: 'Tajikistan', abbreviation: 'TJ'},
    {name: 'Tanzania, United Republic of', abbreviation: 'TZ'},
    {name: 'Thailand', abbreviation: 'TH'},
    {name: 'Timor-Leste', abbreviation: 'TL'},
    {name: 'Togo', abbreviation: 'TG'},
    {name: 'Tokelau', abbreviation: 'TK'},
    {name: 'Tonga', abbreviation: 'TO'},
    {name: 'Trinidad and Tobago', abbreviation: 'TT'},
    {name: 'Tunisia', abbreviation: 'TN'},
    {name: 'Turkey', abbreviation: 'TR'},
    {name: 'Turkmenistan', abbreviation: 'TM'},
    {name: 'Turks and Caicos Islands', abbreviation: 'TC'},
    {name: 'Tuvalu', abbreviation: 'TV'},
    {name: 'Uganda', abbreviation: 'UG'},
    {name: 'Ukraine', abbreviation: 'UA'},
    {name: 'United Arab Emirates', abbreviation: 'AE'},
    {name: 'United Kingdom', abbreviation: 'GB'},
    {name: 'United States', abbreviation: 'US'},
    {name: 'United States Minor Outlying Islands', abbreviation: 'UM'},
    {name: 'Uruguay', abbreviation: 'UY'},
    {name: 'Uzbekistan', abbreviation: 'UZ'},
    {name: 'Vanuatu', abbreviation: 'VU'},
    {name: 'Venezuela', abbreviation: 'VE'},
    {name: 'Viet Nam', abbreviation: 'VN'},
    {name: 'Virgin Islands, British', abbreviation: 'VG'},
    {name: 'Virgin Islands, U.S.', abbreviation: 'VI'},
    {name: 'Wallis and Futuna', abbreviation: 'WF'},
    {name: 'Western Sahara', abbreviation: 'EH'},
    {name: 'Yemen', abbreviation: 'YE'},
    {name: 'Zambia', abbreviation: 'ZM'},
    {name: 'Zimbabwe', abbreviation: 'ZW'}
];

export const store = new Vuex.Store({
    state: {
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
        guestTickets: {
            panelId: 3,
            companyName: ''
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
        yoSeminar: '',
        guests: [],
        stateList: usStates,
        countryList: countries
    },
    plugins:[createPersistedState()],
    getters: {
        getState(state) {
            return state;
        }
    },
    mutations: {
        updateState(state, newState){
            state = newState;
        },
        updatePersonalInfo(state, newState, element) {
            state.personalInfo[element] = newState.personalInfo[element];
        },
        setErrors(state, error) {
            if (!search(error.name, state.errors)) {
                state.errors.push(error);
            }
        },
        unSetErrors(state, name) {
            state.errors = state.errors.filter(function (item) {
                return item !== name
            });
        },
        updateCompanyInfo(state, newState) {
            state.companyInfo = {
                companyName: newState.companyInfo.companyName,
                panelId: newState.companyInfo.panelId,
            }
        },
        updatePriceSheetInfo(state, newState) {
            state.priceSheet = {
                panelId: newState,
                fetchedData: newState.fetchedData,
            }
        },
        nextPage(state) {
            state.panelRouting.active++;
        },
        previousPage(state) {
            state.panelRouting.active--;
        },
        fetchPrices(state, query) {
            const params = new URLSearchParams();
            params.append('query', query);
            apiConfig.data = params;
            axios(apiConfig).then(
                response => {
                    if (query === 'combined_prices') {
                        state.priceSheet.priceData.combined = response.data;
                    }
                }
            ).catch(
                error => {
                    alert(error);
                }
            );
        },
        fieldCompleted(state, name) {
            state.incomplete = state.incomplete.filter(function (item) {
                return item !== name
            });
        },
        addGuestTicket(state, guest) {
            state.guests.push(guest);
        }
    },

});

function search(nameKey, myArray) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i].name === nameKey) {
            return myArray[i];
        }
    }
}

