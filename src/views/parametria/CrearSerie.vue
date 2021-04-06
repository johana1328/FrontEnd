<template>
      <CModal
      title="Serie" color="primary"  :show.sync="infoModal">
      <CForm>
          <CCol sm="10" >
           <CInput label="Nombre" placeholder="" v-model="serieForm.nombre"/>
          </CCol>
             <CTextarea label="Descripción " placeholder="Contetido..." rows="3" v-model="serieForm.descripcion" />    
      </CForm>
      <template #footer>
        <CButton @click="createUpdateuser=false"  color="secundary">Cancelar</CButton>
        <CButton @click="crearSerie = false" color="primary">Guardar</CButton>
      </template>
    </CModal>
</template>

<script>
import serie from "../../clientes/serie"
export default {
 data(){
     return{
        serieForm:{
            nombre:'',
            descripcion:''
        },
         createUpdateuser:false
     }
 },
 methods:{
     async crearSerie(){
         await serie.createSerie(this.serieForm);
         this.createUpdateuser = false;

     },
     openModal(){
           this.createUpdateuser=true;
         }
     
 }
}
</script>

<style>

</style>