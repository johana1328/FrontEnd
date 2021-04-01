import Vue from 'vue'
import Router from 'vue-router'

//Root principal
const login = () => import('@/views/Login');
const error404 = () => import('@/views/error/Error404');
const error500 = () => import('@/views/error/Error500');
const container = () => import('@/views/layout/Container');

//Vistas Administrador
const dashboard = () => import('@/views/admin/Dashboard');
const solicitudBusqued = () => import('@/views/solicitud/SolicitudBusquedad');
const serie = () => import('@/views/gestionDocumental/Serie');


//Vistas del candidato
const registroCandidato = () => import('@/views/candidato/Registro');


Vue.use(Router)
export default new Router({
    mode: 'hash',
    linkActiveClass: 'open active',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path:'/',
            name: 'Home',
            component: container, 
            children: [
                {
                  path: '/dashboard',
                  name: 'Dashboard',
                  component: dashboard
                },
                {
                    path: '/solicitudBusqueda',
                    name:'Solicitud Busqueda',
                    component: solicitudBusqued
                },
                {
                    path:'/serie',
                    name:'Serie',
                    component: serie
                }
            ]
        },
        {
            path:'/login',
            name: 'Login',
            component: login
        },
        {
            path:'/error/error500',
            name: 'Error500',
            component: error500
        },
        {
            path:'/error/error404',
            name: 'Error404',
            component: error404
        },
        {
            path:'/candidato/registro',
            name: 'Candidato',
            component: registroCandidato
        }
    ]
   
})





