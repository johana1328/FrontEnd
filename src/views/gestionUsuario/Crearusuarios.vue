<template>
<CForm>
    <CModal title="Crear usuario" color="primary"
            :show.sync="createUpdateuser">
            <CRow >
                <CCol sm="6" >
                    <CInput  label="Id Usuario" placeholder="" />
                    <CInput label="Correo Electronico"  placeholder=""/>
                    <CInput label="Area" placeholder="" />
                    <CSelect class="col-sm-10" label="Perfil" :options="options2"  placeholder="Seleccione"/>      
                </CCol>
                <CCol sm="6" >
                    <CInput label="Nombres" placeholder="" />
                    <CInput label="Apellidos" placeholder="" />
                    <CInput label="Jefe" placeholder="" />
                    <CSelect class="col-sm-10" label="Estado" :options="options" placeholder="Seleccione" />
                  </CCol>
            </CRoW>
              <template #footer>
                <CButton @click="createUpdateuser=false" color="primary">Cancelarmario</CButton>
                <CButton @click="crearUsuario" color="primary">Guardarsss</CButton>
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
            options2: ['Analista_RHH','Gerente_RRHH','Gerente','Director','Evaluador'],
            usuarioForm:{},
            createUpdateuser:false
    }},
     methods:{
         async crearUsuario(){
             this.usuarioForm.id="9";
             this.usuarioForm.nombres="felipina2";
             this.usuarioForm.apellidos="fernandez2";
             this.usuarioForm.correo="maa@e.com";
             this.usuarioForm.area="sss";
             this.usuarioForm.jefe="ddd";
             this.usuarioForm.perfil="EMPLEADO"
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