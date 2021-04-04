<template>
<div>
  <CDataTable
        :items="listaUsuarios"
        :fields="fields"
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
</div>      
</template>

<script>
import api from "../../clientes/api/api.js";]
export default {
 props: {
    items: Array,
    fields: {
      type: Array,
      default () {
        return ['username', 'registered', 'role', 'status']
      }
    },
    caption: {
      type: String,
      default: 'Table'
    },
    hover: Boolean,
    striped: Boolean,
    border: Boolean,
    small: Boolean,
    fixed: Boolean,
    dark: Boolean
  }
   data(){
       return{
            listaUsuarios:[],
            loading: false,
            activePage: 1,
            pages: 5,
            pageSize:2,
            fieldsImput,
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
                pageSize:this.pageSize,
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
}
</script>

<style>

</style>