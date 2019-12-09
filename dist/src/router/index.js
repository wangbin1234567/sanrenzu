import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/car',
    component: () => import('../views/car/index.vue')
  },
{
    path: '/color',
    component: () => import('../views/color/index.vue')
  },
   {
    path: '/type',
    component: () => import('../views/type/index.vue')
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
