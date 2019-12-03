import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/car',
    component: () => import('../views/car/Car.vue')
  },
{
    path: '/color',
    component: () => import('../views/color/Color.vue')
  },
   {
    path: '/type/?',
    name:"type",
    component: () => import('../views/type/Type.vue')
  },
  {
    path:"/quotation",
    component:()=>import("../views/quotation/index.vue")
  },{
    path:"/site",
    component:()=>import("../views/site/index.vue")
  },{
    path:"/official",
    component:()=>import("../views/official/index.vue")
  },{
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
