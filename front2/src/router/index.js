import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=> import("../views/home/home")
const card = ()=> import("../views/card/card")
const message = ()=> import("../views/message/message")
const profile = ()=> import("../views/profile/profile")

Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path:'/card',
        component:card
    },
    {
        path:'/message',
        component:message
    },
    {
        path:'/profile',
        component:profile
    }
]

const router = new VueRouter({
    routes,
    mode:'history'
})

export default router