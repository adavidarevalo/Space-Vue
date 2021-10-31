import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'
import Destination from './views/Destination'
import Crew from './views/Crew'
import Technology from './views/Technology'


Vue.use(Router)

export default new Router({
    node: 'history',

    routes: [
        {
            path: '/',
            redirect: 'home'
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/destination/:name',
            name: 'destination',
            component: Destination
        },
        {
            path: '/crew',
            name: 'crew',
            component: Crew
        },
        {
            path: '/technology',
            name: 'technology',
            component: Technology
        },
        {
            path: '*',
            name: 'NotFount',
            component: NotFound
        }
    ]
})