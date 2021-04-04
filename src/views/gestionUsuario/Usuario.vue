<template>
<CCard>
    <CCardHeader>
      Lista de usuarios
    </CCardHeader>
    <CCardBody>
        <Table
          archivo="Reporteusuario" 
          :lista="listaUsuarios"
          :fields="['nombres','apellidos','correoElectronico','estado','jefe','acciones']"
          @updateClick="openModalModif"
          />
    </CCardBody>
   </CCard>
</template>

<script>
import api from "../../clientes/api/api.js";
import Table from "../../components/Table"

export default {
   components:{
     Table
   },
    data () {
        return {
            listaUsuarios:[],
            loading: false,
            activePage: 1,
            pageSize:2,
            collapse: false,
            cardCollapse: true,
            innerCollapse: false,
            infoModal: false,
            primaryModal: false,
            options: ['Activo','Desactivo'],
            options2: ['Analista_RHH','Gerente_RRHH','Gerente','Director','Evaluador'],
            filtro:{
              nombre:'',
              estado:''
            },
            informUsuario:{
              idUsuario:'',
              nombre:'',
              apellido:'',
              correoElectro:'',
              area:'',
              jefe:'',
              perfil:'',
              estado:'',


            }
        }
    },
    methods:{
      openModalModif(item){
          alert(item.nombres);
      },
      reporte: async function(){
         let content=[];
        let response= await api.get("/gestion-usuario/usuario/reporte");
        content=response.data.map(item => Object.values(item).join(',')).join('\n');
        console.log(response)
        return content;
      },
      onTableChange () {
      this.loading = true;
      this.consultarUsuarios();
    },
      consultarUsuarios(){
         api.get("/gestion-usuario/usuario",{
              params:{
                pageSize:7,
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
    }
  
}
</script>

<style>
</style>