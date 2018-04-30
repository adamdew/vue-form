import Sessions from '../components/Sessions'
import PersonalInformation from '../components/PersonalInformation'
import GuestTickets from '../components/GuestTickets'
import Checkout from '../components/Checkout'


export default [
    { path: '/', redirect: '/Sessions' },
    {
        path: '/Sessions',
        alias: '/',
        name: 'Sessions',
        component: Sessions
    },
    {
        path: '/PersonalInformation',
        name: 'PersonalInformation',
        component: PersonalInformation
    },
    {
        path: '/GuestTickets',
        name: 'GuestTickets',
        component: GuestTickets
    },
    {
        path: '/Checkout',
        name: 'Checkout',
        component: Checkout
    }
];
