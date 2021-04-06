<template>
  <CCardBody>
    <CButton
      color="primary"
      class="mb-2"
      :href="csvCode" 
      download="archivo.csv"
      target="_blank"
    >
      Descargar Reporte
    </CButton>
    <CDataTable
      :items="lista"
      :fields="fields"
      column-filter
      :items-per-page="paginacion"
      hover
      sorter
      pagination
      @filtered-items-change="setCurrentItems">
       <template #acciones="{item}">
              <td>
                <CButton
                    color="danger"
                    size="sm"
                    :key="key"
                    @click="openmodaldelete(item)">
                    <CIcon size="sm" name="cil-trash"/>
                  </CButton>
                  <CButton class="ml-1"
                    size="sm"
                    :key="key"
                    color="primary"
                    @click="updateClick(item)" >
                    <CIcon size="sm" name="cil-pencil"/>
                  </CButton>
              </td>
            </template>
    </CDataTable> 
    <CModal
      title="Eliminar Registro"
      color="danger"
      centered="true"
      size="sm"
      :show.sync="warningModal"
    >
     <p> Estas seguro de eliminar el registro?</p>
     <template #footer>
        <CButton @click="warningModal = false" color="danger">Cancelar</CButton>
        <CButton @click="deleteClick" color="primary">Aceptar</CButton>
      </template>
    </CModal>  
  </CCardBody>
</template>

<script>
export default {
    name: 'Table',
    props: {
        archivo:String,
        lista: Array,
        fields:Array,
        warningModal:Boolean
    },
    data () {
    return {
      paginacion:5, 
      currentItems: this.lista.slice(),
      itemSelect:{}
    }
  },
  computed: {
    csvContent () {
      return this.currentItems.map(item => Object.values(item).join(',')).join('\n')
    },
    csvCode () {
      return 'data:text/csv;charset=utf-8,SEP=,%0A' + encodeURIComponent(this.csvContent)
    }
  },
  methods: {
    setCurrentItems (val) {
      this.currentItems = val
    },
    updateClick(item){
        this.$emit("updateClick", item);
    },
    openmodaldelete(item){
      this.itemSelect=item;
      this.warningModal=true;
    },
    deleteClick(){
      this.$emit("deleteClick", this.itemSelect);
    }
  }
}
</script>

<style>
.table thead tr th:last-child input {
  display: none;
}
</style>