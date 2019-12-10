import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD


Vue.use(VueRouter)

=======
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import 'mint-ui/lib/style.css'
Vue.use(VueRouter)
 
>>>>>>> jyh
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
    path: '/type',
    component: () => import('../views/type/Type.vue')
  },
  {
    path:"/quotation",
    name: "quotation",
    component:()=>import("../views/quotation/index.vue")
<<<<<<< HEAD
  },{
    path:"/site",
    component:()=>import("../views/site/index.vue")
  },{
=======
  },
  {
>>>>>>> jyh
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
