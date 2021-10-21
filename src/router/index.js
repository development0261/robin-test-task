import { createWebHistory, createRouter } from "vue-router";
import Dashboard from '../pages/Dashboard.vue'
import Member from '../pages/Member.vue'
import Profile from '../pages/Profile.vue'
const routes = [
    {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/member',
        name: 'Member',
        component: Member
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router