<template>
  <div class="wrapper">
    <div>
   
        
    <CButton color="primary" @click="infoModal = true" class="mr-1">
      Nuevo
     </CButton>

    </div>
    <!-- Modal Component -->
    <CModal
      title="Serie"
      color="primary"
      :show.sync="infoModal"
    >
      <CForm>
          <CCol sm="10" >
           <CInput
                  label="Nombre"
                  placeholder=""
                />
          </CCol>
             <CTextarea
                label="Descripción "
                placeholder="Contetido..."
                rows="3"
              />
                
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
      myModal: false,
      largeModal: false,
      smallModal: false,
      primaryModal: false,
      successModal: false,
      warningModal: false,
      dangerModal: false,
      infoModal: false,
      darkModal: false
    }
  }
}
</script>

<style>

</style>