import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
=======

>>>>>>> wanglin

Vue.use(VueRouter)

const routes = [
<<<<<<< HEAD
    {
        path:"/quotation",
        component:() => import('../views/quotation/')
    }
=======
  {
    path: '/car',
    component: () => import('../views/car/Car.vue')
  },

>>>>>>> wanglin
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
