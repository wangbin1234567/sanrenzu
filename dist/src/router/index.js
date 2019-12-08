import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/car',
    component: () => import('../views/car/Car.vue')
<<<<<<< HEAD
  },{
    path: '/img/:id?',
    name:"img",
    component: () => import('../views/img/index.vue')
=======
>>>>>>> 1092eb8a5613ffcd7c666b7acfc365384bbe68b3
  },
{
    path: '/color',
    component: () => import('../views/color/Color.vue')
  },
   {
    path: '/type',
    component: () => import('../views/type/Type.vue')
  },
  {
    path:"/quotation",
    name: "quotation",
    component:()=>import("../views/quotation/index.vue")
  },{
    path:"/official",
    component:()=>import("../views/official/index.vue")
  },{
    path:"/img",
    component:()=>import("../views/img/index.vue")
  }
  ,{
    path:"/",
    redirect:"/official"
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
