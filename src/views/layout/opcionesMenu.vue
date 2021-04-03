<script>
export default{
    name:'nav',
    computed:{
        siderbarItems(){
           //let perfiles = ["GERENTE"]
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
                 },
                 {
                     _name:'CSidebarNavItem',
                     name:'Usuario',
                     to:'/gestionUsuario/usuario'
                 }
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
                  name:'Candidatos',
                  to:'/candidato/Registro'
              },
              {
                  name:'Procesos',
                  to:'/seleccion/proceso'
              },
              {
                  name:'Entrevista',
                  to:'/seleccion/entrevista'
              }]
            }

            let solicitud = {
            _name: 'CSidebarNavDropdown',
            name: 'Solicitud',
            route: '/solicitud',
            items:[{
                name:'Permisos',
                to:'/solicitud/permiso'
            },
            {
                name:'Vacaciones',
                to:'/solicitud/vacaciones'
            },
            {
                name:'Solicitud Personal',
                to:'/solicitud/solicitudPersonal'
            },
            {
                name:'Incapacidad',
                to:'/solicitud/incapacidad'
            },
            {
                name:'Certificaciones',
                to:'/solicitud/certificaciones'
            }]
            }

            let parametria={
                 _name: 'CSidebarNavDropdown',
                 name: 'Parametria',
                 route: '/parametria',
                 items:[{
                     name:'Serie',
                     to:'/parametria/serie'
                 }]
            }
            menunav._children.push(seleccion,solicitud,parametria)
            menu.push(menunav);

  
            
            return menu;
        }
    }
}
</script>
