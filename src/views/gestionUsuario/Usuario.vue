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
      download="coreui-table-data.pdf"
      target="_blank"
    >
      Descargar
    </CButton>
  <CDataTable
      :items="listaUsuarios"
      :fields="fieldsImput"
      :items-per-page="filterOptions.pageSize"
      :loading="loading"
       hover
       sorter
       border
       striped
       outlined 
    >
     <template #estado="{item}">
        <td>
            {{item.estado=='USACT'?'ACTIVO':'INACTIVO'}}
          
        </td>
      </template>
    <template #acciones="{item}">
        <td>
            {{item.id}}
          <CButton
               color="danger"
                size="sm"
                :key="key"
              >
                <CIcon size="sm" name="cil-trash"/>
            </CButton>
            <CButton
                class="ml-1"
                size="sm"
                :key="key"
                 color="primary"
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
            loading: false,
            activePage: 1,
             pages: 5,
             fieldsImput,
             filterOptions:{
               pageSize:5
             }
        }
    },
    methods:{
      onTableChange () {
      this.loading = true;
      this.consultarUsuarios();
    },
      consultarUsuarios(){
         api.get("/gestion-usuario/usuario",{
              params:{
                pageSize:this.filterOptions.pageSize,
                pageKey:this.activePage}    
        })
           .then(response => {
               this.pages=response.data.pageTotal;
               console.log(response.data)
               this.listaUsuarios=response.data.data;
                this.loading = false;
           }).catch(error => {
               console.log(error); 
           });
      }
    },
    mounted: function(){ 
       this.consultarUsuarios()
    },
    computed: {
    reloadParams () {
      console.log(this.activePage);
      return [  
        this.activePage
      ]
    }, csvContent () {
      return this.listaUsuarios.map(item => Object.values(item).join(',')).join('\n')
    },
    csvCode () {
      return 'data:application/pdf;charset=utf-8,SEP=,%0A' + encodeURIComponent(this.csvContent)
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