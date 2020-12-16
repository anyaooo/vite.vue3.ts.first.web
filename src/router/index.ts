import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { 
        path: '/manage', 
        name: 'manage', 
        component: () => import('../views/login/index.vue') 
    },
    { 
        path: '', 
        name: 'layout',
        component: () => import('../views/layout/index.vue'), 
        children: [
            {
                path: 'main',
                name: 'main',
                component: () => import('../views/home/index.vue')
            }
        ] 
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router