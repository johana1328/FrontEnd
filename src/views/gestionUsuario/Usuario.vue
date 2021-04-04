<template>
<CCard>
    <CCardHeader>
      Lista de usuarios
    </CCardHeader>
    
      <CCardBody>
           <CButton color="primary" @click="infoModal = true" class="mr-1">
            Nuevo
          </CButton>
          <CButton @click="collapse = !collapse" color="primary"  class="mr-1">
               Buscar/ Reporte
          </CButton>
          <CForm>
           <CCol col="12" md="8">
          <CCollapse :show="collapse" :duration="400">
           <CCard bodyWrapper >
           <CCardBody>
             
                 <CRow>
                   
                    <CCol sm="6" >
                     <CInput class="col-sm-10"
                        label="Nombre"
                        placeholder=""
                        v-model="filtro.nombre"
                        
                      />
                     </CCol>
                    <CCol sm="6" >
                      <CSelect class="col-sm-10"
                       label="Estado"
                       :options="options"
                        placeholder="Seleccione"
                        v-model="filtro.estado"
                        />
                      
                    </CCol>
                 </CRow>
                 </CCardBody>
                  <CCardFooter align="right">
                    <CButton @click="collapse = !collapse" color="danger" class="ml-2 mb-2">
                          Cancelar
                    </CButton>
                    <CButton @click="collapse = !collapse" color="primary" class="ml-2 mb-2">
                          Buscar
                    </CButton>
                     <CButton color="secondary"  class="ml-2 mb-2" :href="csvCode" download="coreui-table-data.csv" target="_blank" >
                        Descargar
                       </CButton>
                  </CCardFooter>
                  </CCard>
                  
                </CCollapse>
                </CCol>
                 </CForm>
               
          
            <CModal
              title="Usuario"
              color="primary"
              :show.sync="infoModal"
            >
              <CForm>
                <CRow >
                  <CCol sm="6" >
                  <CInput 
                          label="Nombre"
                          placeholder=""
                        />
                        <CInput
                          label="Nombre"
                          placeholder=""
                        />
                  </CCol>
                        <CCol sm="6" >
                       <CInput
                          label="Nombre"
                          placeholder=""
                        />
                        <CInput
                          label="Nombre"
                          placeholder=""
                        />
                  </CCol>
                  </CRoW>
              </CForm>
              <template #footer>
                <CButton @click=" primaryModal = false" color="danger">Cancelar</CButton>
                <CButton @click="primaryModal = false" color="primary">Guardar</CButton>
              </template>

            </CModal>
<br/>
        <CDataTable
            :items="listaUsuarios"
            :fields="fieldsImput"
            :items-per-page="2"
            :active-page="1"
            :loading="loading"
            hover
            sorter
            border
            striped
            outlined 
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
                  <CButton class="ml-1"
                      size="sm"
                      :key="key"
                      color="primary"
                      @click="infoModal = true" 
                      
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
            fieldsImput,
            collapse: false,
            cardCollapse: true,
            innerCollapse: false,
            infoModal: false,
            primaryModal: false,
            options: ['Activo','Desactivo'],
            filtro:{
              nombre:'',
              estado:''
            }
        }
    },
    method:{
      onTableChange () {
      this.loading = true;
      console.log(123)
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