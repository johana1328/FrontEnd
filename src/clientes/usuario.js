import api from './api/api.js'

export default {
    getAllUsers(){ 
       return  api.get('/gestion-usuario/usuario/usuarios-all')
       .then(response => response.data )
       .then(items =>{
          let usuarios = items.map(item=>{
            let obj={};
            obj.id=item.idUsuario;
            obj.nombres=item.nombres;
            obj.apellidos=item.apellidos;
            obj.correoElectronico=item.correoElectronico;
            obj.estado=item.estado=='USACT'?'ACTIVO':'INACTIVO';
            obj.jefe=item.jefe;
            return obj;
          });
          return usuarios;
       });
    },
    delteUser(id){
       return api.put(`/gestion-usuario/usuario/activar/${id}/USBLO`);
    },
    createUser(userForm){
       return api.post('/gestion-usuario/usuario',{
        idUsuario:userForm.id,
        nombres:userForm.nombres,
        apellidos:userForm.apellidos,
        correoElectronico:userForm.correo,
        area:userForm.area,
        jefe:userForm.jefe,
        usPerfils:[{codigoPerfil:userForm.perfil}]
       });
    }

}
