<template>
<CForm>
    <CModal title="Crear usuario" color="primary"
            :show.sync="createUpdateuser">
            <CRow > 
                <CCol sm="6" >
                    <CInput  label="Id Usuario" placeholder="" v-model="usuarioForm.id" />
                    <CInput label="Correo Electronico"  placeholder="" v-model="usuarioForm.correo"/>
                    <CInput label="Area" placeholder="" v-model="usuarioForm.area"/>
                    <CSelect class="col-sm-10" :value.sync='usuarioForm.perfil' label="Perfil" :options="options2"  placeholder="Seleccione"/>      
                </CCol>
                <CCol sm="6" >
                    <CInput label="Nombres" placeholder="" v-model="usuarioForm.nombres"/>
                    <CInput label="Apellidos" placeholder="" v-model="usuarioForm.apellidos" />
                    <CInput label="Jefe" placeholder="" v-model="usuarioForm.jefe" />
                  </CCol>
            </CRoW>
              <template #footer>
                <CButton @click="createUpdateuser=false" color="primary">Cancelar</CButton>
                <CButton @click="crearUsuario" color="primary">Guardar</CButton>
               
              </template>
    </CModal>
    </CForm>
</template>

<script>
import usuario from "../../clientes/usuario"
export default {
 name: 'Crearusuarios',
    data () {
        return {
            options: ['Activo','Desactivo'],
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
              perfil:''
            },
            createUpdateuser:false
    }},
     methods:{
         async crearUsuario(){
             await usuario.createUser(this.usuarioForm);
             this.createUpdateuser=false;
             this.$emit("updateView");
         },
         openModal(){
           this.createUpdateuser=true;
         }
     }   
}
</script>

<style>

</style>