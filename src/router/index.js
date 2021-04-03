import Vue from 'vue'
import Router from 'vue-router'

//Root principal
const login = () => import('@/views/Login');
const error404 = () => import('@/views/error/Error404');
const error500 = () => import('@/views/error/Error500');
const container = () => import('@/views/layout/Container');


const dashboard = () => import('@/views/admin/Dashboard');
const solicitudBusqued = () => import('@/views/solicitud/SolicitudPersonal');
const serie = () => import('@/views/parametria/Serie');
const perfil = () => import('@/views/perfil/miPerfil');
const documentacion = () => import('@/views/gestionDocumental/Documentacion');
const evaluacionDese = () => import('@/views/evaluacionDesempeno/EvaluacionDesempeno');
const usuario = () => import('@/views/gestionUsuario/Usuario');
const pruebaTecnica = () => import('@/views/seleccion/PruebaTecnica');
const pruebaPsicotecnica = () => import('@/views/seleccion/PruebaPsicotecnica');
const entrevista = () => import('@/views/seleccion/Entrevista');
const proceso = () => import('@/views/seleccion/Proceso')
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
                    path: '/solicitud/solicitudPersonal',
                    name:'Solicitud Personal',
                    component: solicitudBusqued
                },
                {
                    path:'/parametria/serie',
                    name:'Serie',
                    component: serie
                },
                {
                    path:'/perfil/miPerfil',
                    name:'Perfil',
                    component: perfil

                },
                {
                    path:'/gestionDocumental/documentacion',
                    name: 'Documentación',
                    component: documentacion
                },
                {
                    path:'/evaluacionDesempeno/evaluacionDesempeno',
                    name:'Evaluación de Desempeño',
                    component: evaluacionDese
                },
                {
                    path:'/gestionUsuario/usuario',
                    name:'Usuario',
                    component: usuario
                },
                {
                    path:'/seleccion/pruebaTecnica',
                    name:'Prueba Técnica',
                    component: pruebaTecnica
                },
                {
                    path:'/seleccion/pruebaPsicotecnica',
                    name: 'Prueba Psicotécnica',
                    component: pruebaPsicotecnica
                },
                {
                    path:'/seleccion/entrevista',
                    name: 'Entrevista',
                    component: entrevista
                },
                {
                    path:'/seleccion/proceso',
                    name:'Proceso',
                    component: proceso
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





