<template>
<CCard>
    <CCardHeader>
      Lista de usuarios
    </CCardHeader>
<CCardBody>
    <CButton
      color="primary"
      class="mb-2"
      :href="csvCode" 
      download="coreui-table-data.csv"
      target="_blank"
    >
      Descargar
    </CButton>
  <CDataTable
      :items="listaUsuarios"
      :fields="fieldsImput"
       pagination
       table-filter
       hover
       sorter
       border
       striped
       outlined
       cleaner
      :items-per-page="2"
      :active-page="1"
      pages="3"
      :loading="loading"
    >
    <template #acciones="{item}">
        <td>
            {{item.id}}
          <CButton
               color="danger"
                :name="brandName"
                size="sm"
                :key="key"
              >
                <CIcon size="sm" name="cil-trash"/>
            </CButton>
            <CButton
                :name="brandName"
                class="ml-1"
                size="sm"
                :key="key"
                 color="info"
              >
                <CIcon size="sm" name="cil-pencil"/>
            </CButton>
        </td>
      </template>
    </CDataTable>
    <CPagination
      v-show="pages > 1"
      :pages="pages"
      :active-page.sync="activePage"
    />
   </CCardBody>
   </CCard>
</template>

<script>
import api from "../../clientes/api/api.js";
const fieldsImput=[
    {key: 'nombres'},
    {key: 'apellidos'},
    {key: 'correoElectronico'},
    {key: 'estado' },
     {key: 'acciones',  _style:'width:2%'}
]
export default {
    data () {
        return {
            listaUsuarios:[],
            sorterValue: { column: null, asc: true },
            tableFilterValue: '',
            columnFilterValue: {},
            loading: false,
            activePage: 1,
             pages: 5,
             fieldsImput
        }
    },
    method:{
      onTableChange () {
      this.loading = true;
    }
    },
    mounted(){
        api.get("/gestion-usuario/usuario?pageSize=2&pageKey=1")
           .then(response => {
                console.log(response)
               this.listaUsuarios=response.data.data;
           }).catch(error => {
               console.log(error);
           });
    },
    computed: {
    reloadParams () {
      return [  
        this.sorterValue,
        this.columnFilterValue,
        this.tableFilterValue,
        this.activePage
      ]
    }, csvContent () {
      return this.listaUsuarios.map(item => Object.values(item).join(',')).join('\n')
    },
    csvCode () {
      return 'data:text/csv;charset=utf-8,SEP=,%0A' + encodeURIComponent(this.csvContent)
    }
    },
    watch: {
    reloadParams () {
      this.onTableChange()
    }
  }
  
}
</script>

<style>
</style>