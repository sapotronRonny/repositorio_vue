import { createRouter, createWebHistory } from 'vue-router'
import heder_vue from '../components/cuadrolog.vue';
import cuadroreg from '../components/cuadroreg.vue';
import cuadrolog from '../components/cuadrolog.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {path: '/',name: 'home',component: heder_vue},
    {path: '/registro',name: 'registro',component: cuadroreg},
    {path: '/login',name: 'login',component: cuadrolog},
  
  
    ]
  })
  
  export default router