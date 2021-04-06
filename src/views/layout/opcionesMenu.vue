<script>
export default{
    name:'nav',
    computed:{
        siderbarItems(){
            let token= localStorage.access_token;
            let tokenArray=token.split(".");
            let perfilesSecode=decodeURIComponent(escape(window.atob( tokenArray[1])));
            let perfilesObj=JSON.parse(perfilesSecode);
            let perfiles = perfilesObj.authorities;
            let menu = new Array();
            let menunav={
                 _name: 'CSidebarNav',
                 _children: [
                 {
                    _name:'CSidebarNavItem',
                    name:'Mi Perfil',
                    to:'/perfil/miPerfil'
                 },
                 {
                    _name:'CSidebarNavItem',
                    name:'Evaluación de desempeño',
                    to:'/evaluacionDesempeno/evaluacionDesempeno'
                 },
                 {
                     _name:'CSidebarNavItem',
                     name:'Documentación',
                     to:'/gestionDocumental/documentacion'
                 }]
            }
             
            let solicitud = {
                _name: 'CSidebarNavDropdown',
                name: 'Solicitud',
                route: '/solicitud',
                items:[{
                     name:'Solicitud Perfil',
                     to:'/solicitud/SolicitudPersonal'
                }
                /*{
                    name:'Permisos',
                     to:'/solicitud/permiso'
                },
                {
                    name:'Vacaciones',
                    to:'/solicitud/vacaciones'
                },
                {
                    name:'Incapacidad',
                    to:'/solicitud/incapacidad'
                },
                {
                    name:'Certificaciones',
                    to:'/solicitud/certificaciones'
                }*/
                ]
            }
            
            let seleccion={
                _name: 'CSidebarNavDropdown',
                name: 'Selección',
                route: '/seleccion',
                items: [{
                    name: 'Prueba técnica',
                    to: '/seleccion/pruebaTecnica'
                },
                {
                    name: 'Prueba Psicotécnica',
                    to: '/seleccion/pruebaPsicotecnica'
                },
                {
                    name:'Procesos',
                    to:'/seleccion/proceso'
                },
                {
                  name:'Entrevista',
                  to:'/seleccion/entrevista'
                },
                {
                    name: 'Candidato',
                    to:'/seleccion/candidato'
                }
              ]
            }
            let parametria={
                 _name: 'CSidebarNavDropdown',
                 name: 'Parametria',
                 route: '/parametria',
                 items:[{
                     name:'Serie',
                     to:'/parametria/serie'
                 },
                 {
                      name:'Subserie',
                     to:'/parametria/subserie'

                 }]
            }

            let candidato = {
                    name: 'Candidato',
                    to:'/candidato/Registro'
                }

            let usuario = {
                     _name:'CSidebarNavItem',
                     name:'Usuario',
                     to:'/gestionUsuario/usuario'
                 }
            //let solicitudBusqueda ={
                     //name:'Solicitud Perfil',
                     //to:'/solicitud/SolicitudPersonal'
            //}

           if(perfiles.includes('EMPLEADO')){
                 // menunav._children.push(solicitud)
                  menu.push(menunav);
                  return menu;
            }

             if(perfiles.includes('ANALISTA_RRHH')){
                seleccion.items.push(candidato)
                menunav._children.push(usuario,seleccion,solicitud)
                menu.push(menunav)
                return menu;
            }

            if(perfiles.includes('GERENTE')){
               //solicitud.items.push(solicitudBusqueda)
               menunav._children.push(seleccion,solicitud)
               menu.push(menunav)
               return menu;
            }

            if(perfiles.includes('GERENTE_RRHH')){
                seleccion.items.push(candidato)
               menunav._children.push(usuario,seleccion,solicitud,parametria)
               menu.push(menunav);
                return menu;  
            }
             return menu; 
        }
    }
}
</script>
