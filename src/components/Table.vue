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
                    :name="brandName"
                    size="sm"
                    :key="key"
                    @click="deleteClick(item)">
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
  </CCardBody>
</template>

<script>
export default {
    name: 'Table',
    props: {
        archivo:String,
        lista: Array,
        fields:Array
    },
    data () {
    return {
      paginacion:5, 
      currentItems: this.lista.slice()
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
    deleteClick(item){
       this.$emit("deleteClick", item);
    }
  }
}
</script>

<style>

</style>