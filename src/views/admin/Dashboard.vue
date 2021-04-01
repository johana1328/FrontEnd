<template>
  <div>
    <CRow>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="30"
          text="Aspirantes en espera "
          color="gradient-info"
          inverse
        >
          <CIcon name="cil-people" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
     <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="10"
          text="Solicitudes"
          color="gradient-info"
        >
          <CIcon name="cil-bell" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
      <CCol sm="6" md="2">
        <CWidgetProgressIcon
          header="5 "
          text="Mensajes"
          color="gradient-info"
          inverse
        >
          <CIcon name="cil-speech" height="36"/>
        </CWidgetProgressIcon>
      </CCol>
    
    </CRow>
  </div>
</template>

<script>


export default {

}
</script>

<style>

</style>