import Vue from 'vue'
import VueRouter from 'vue-router'
// import Mint from 'mint-ui';
// Vue.use(Mint);
// import 'mint-ui/lib/style.css'
Vue.use(VueRouter)
 
const routes = [
  {
    path: '/url',
    component: () => import('../views/Img.vue')
  },
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
  },
  {
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
