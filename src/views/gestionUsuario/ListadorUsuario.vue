<template>
  <Table
          archivo="Reporteusuario" 
          :lista="listaUsuarios"
          :fields="['nombres','apellidos','correoElectronico','estado','jefe','acciones']"
          @updateClick="openModalModif"
          />
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
            listaUsuarios:[]
        }
    }
}
</script>

<style>

</style>