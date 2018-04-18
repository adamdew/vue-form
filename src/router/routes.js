import Sessions from '../components/Sessions'
import PersonalInformation from '../components/PersonalInformation'
import GuestTickets from '../components/GuestTickets'

export default [
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
    }
];
