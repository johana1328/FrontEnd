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
   </CCard>
</template>

<script>
import Table from "../../components/Table"
import Crearusuarios from './Crearusuarios'
import usuario from "../../clientes/usuario"
export default {
   components:{
     Table,
     Crearusuarios
   },
    data () {
        return {
            listaUsuarios:[]
        }
    },
    methods:{
      openModalModif(item){
          alert(item.nombres);
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