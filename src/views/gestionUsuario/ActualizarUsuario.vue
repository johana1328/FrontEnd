<template>
  <CForm>
    <CModal title="Crear usuario" color="primary"
            :show.sync="updateuser">
            <CRow > 
                <CCol sm="6" >
                    <CInput  label="Id Usuario" disabled="true" placeholder="" v-model="usuarioForm.id" />
                    <CInput label="Correo Electronico"  placeholder="" v-model="usuarioForm.correo"/>
                    <CInput label="Area" placeholder="" v-model="usuarioForm.area"/>
                    <CSelect class="col-sm-10" :value.sync='usuarioForm.perfil' label="Perfil" :options="options2"  placeholder="Seleccione"/>      
                </CCol>
                <CCol sm="6" >
                    <CInput label="Nombres" placeholder="" v-model="usuarioForm.nombres"/>
                    <CInput label="Apellidos" placeholder="" v-model="usuarioForm.apellidos" />
                    <CInput label="Jefe" placeholder="" v-model="usuarioForm.jefe" />
                     <CSelect class="col-sm-10" :value.sync='usuarioForm.estado' label="Estado" :options="options"  placeholder="Seleccione"/>
                  </CCol>
            </CRoW>
              <template #footer>
                <CButton @click="createUpdateuser=false" color="primary">Cancelar</CButton>
                <CButton @click="actualizarUsuario" color="primary">Guardar</CButton>
               
              </template>
    </CModal>
    </CForm>
</template>

<script>
import usuario from "../../clientes/usuario"
export default {
    name:'Actualizarusuarios',
     data () {
        return {
            options: [{value:'USACT', label:'Activo'},
                      {value:'USINA' ,label:'Inactivo'}],
            options2: [{value:'ANALISTA_RRHH', label:'Analista RRHH'},
                       {value:'GERENTE_RRHH', label:'Gerente RRHH'},
                       {value:'GERENTE', label:'Gerente'},
                       {value:'EMPLEADO', label:'Empleado'},
                       {value:'DIRECTOR', label:'Director'}],
            usuarioForm:{
              id: '',
              nombres:'',
              apellidos: '',
              correo:'',
              area:'',
              jefe:'',
              estado:'',
              perfil:''
            },
            updateuser:false
    }},
    methods:{
        async actualizarUsuario(){
             await usuario.updateUser(this.usuarioForm.id,this.usuarioForm);
             this.updateuser=false;
             this.$emit("updateView");
         },
        async openModal(id){
           this.usuarioForm = await usuario.getUserById(id)
            this.updateuser=true
        }
    }

}
</script>

<style>

</style>