<template>
  <div class="wrapper">
    <div>
   
        
    <CButton color="primary" @click="infoModal = true" class="mr-1">
      Nuevo
     </CButton>

    </div>
    <!-- Modal Component -->
    <CModal
      title="Subserie"
      color="primary"
      :show.sync="infoModal"
    >
      <CForm>
          <CRow>
          <CCol sm="6" >
           <CInput
                  label="Nombre"
                  placeholder=""
                />
                <CInput
                  label="Procedimiento"
                  placeholder=""
                />
                <CInput
                  label="Años de retención central"
                  placeholder=""
                />
          </CCol>
          <CCol sm="6" >
           <CInput
                  label="Proceso"
                  placeholder=""
                />
            <CInput
                  label="Años de retención gestión"
                  placeholder=""
                />
                   <CSelect class="col-sm-10"
                label="Dispoción final"
                :options="options"
                placeholder="Seleccione"
              />
          </CCol>
          </CRow>
      </CForm>
      <template #footer>
        <CButton @click=" primaryModal = false" color="danger">Cancelar</CButton>
        <CButton @click="primaryModal = false" color="primary">Guardar</CButton>
      </template>

    </CModal>
   
  </div>
</template>

<script>
export default {
  name: 'Modals',
  data () {
    return {
      primaryModal: false,
      infoModal: false,
       options: ['Eiminar', 'Contener Temporalmente'],
     
    }
  }
}
</script>

<style>

</style>