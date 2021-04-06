<template>
<CCard>
    <CCardHeader>
      Lista de usuarios
    </CCardHeader>
    <CCardBody>
        <CButton color="primary" @click="openModalCrear" class="mr-1">
            Crear
        </CButton>
        <Table
          archivo="Reporteusuario" 
          :lista="listaUsuarios"
          :warningModal="false"
          :fields="['nombres','apellidos','correoElectronico','estado','jefe','acciones']"
          @updateClick="openModalModif" 
          @deleteClick="eliminarUsuario"
          />
    </CCardBody>
    <Crearusuarios  @updateView="consultarUsuarios"   ref="componente" />
    <ActualizarUsuario @updateView="consultarUsuarios" ref="modificar"    />
   </CCard>
</template>

<script>
import Table from "../../components/Table"
import Crearusuarios from './Crearusuarios'
import usuario from "../../clientes/usuario"
import ActualizarUsuario from './ActualizarUsuario'
export default {
   components:{
     Table,
     Crearusuarios,
     ActualizarUsuario
   },
    data () {
        return {
            listaUsuarios:[]
        }
    },
    methods:{
      openModalModif(item){
          this.$refs.modificar.openModal(item.id);
      },
      async consultarUsuarios(){
        this.listaUsuarios= await usuario.getAllUsers();
        this.loading = false;
      },
      async eliminarUsuario(item){
         await usuario.delteUser(item.id);
         this.listaUsuarios= await usuario.getAllUsers();
         this.warningModal= false;
      },
      openModalCrear(){
         this.$refs.componente.openModal();
      }
    },
    mounted: function(){ 
       this.consultarUsuarios()
    }
}
</script>