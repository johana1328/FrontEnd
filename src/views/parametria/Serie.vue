<template>
  <div class="wrapper">
    <CCard>
      <CCardHeader>
        <CCardTitle>
          Serie
        </CCardTitle>
      </CCardHeader>
    <CCardBody>
    <CButton color="primary" @click="openModalCrear = true" class="mr-1">
      Nuevo
     </CButton>
        <Table
          archivo="Reporteserie" 
          :lista="listaSerie"
          :warningModal="false"
          :fields="['id','nombre','descripcion','acciones']"
          @updateClick="openModalModif" 
          @deleteClick="eliminarSerie"
          />
   
    </CCardBody>
    </CCard>
 
   
  </div>
</template>

<script>
import Table from "../../components/Table"
import serie from "../../clientes/serie"

export default {
  name: 'Modals',
  components:{
    Table
  },
  data () {
    return {
      primaryModal: false,
      infoModal: false,
      listaSerie:[]
    
    }
  },
  methods:{
     async consultarSerie(){
        this.listaSerie= await serie.getAllSerie();
        this.loading = false;
      },
      async eliminarSerie(item){
        alert(JSON.stringify(item))
         await serie.deleteSerie(item.id);
         this.listaSerie= await serie.getAllSerie();
         this.warningModal= false;
      },
      openModalCrear(){
         this.$refs.componente.openModal();
      }

  },
   mounted: function(){ 
       this.consultarSerie()
    }
}
</script>

<style>

</style>