<template>
 <div>
      <CCard >
  <form-wizard  next-button-text="Siguiente" title="" subtitle="" color="#264985" shape="circle" step-size="xs">
    <tab-content title="Información de perfil">
         <CForm >
       
             <CCardBody >
          <CRow>
               <CCol sm="6" >
                    <CInput class="col-sm-3"
                  label="Área Solicitante"
                  placeholder=""
                />
                  <CSelect
                label="Perfil Solicitado"
                :options="options"
                placeholder="Seleccione"
              />
                <CInput 
                  label="Especialidad"
                  placeholder=""
                />
      
               </CCol>
                <CCol sm="6">
                <CInput
                  label="Experencia mínima requerida en años"
                  placeholder=""
                />
                  <CInput
                  label="Funcionalidad ha realizar"
                  placeholder=""
                />
             
                     <CSelect
                label="Escolaridad"
                :options="options3"
                placeholder="Seleccione"
              />
              </CCol>
             
          </CRow>
              <CTextarea
                label="Descripción de perfil"
                placeholder="Contetido..."
                rows="5"
              />
        </CCardBody>
    </CForm>
     
    </tab-content>
    <tab-content title="Información Cliente">
        <CForm>
        <CCardBody>
            <CRow>
            <CCol  sm="4">
                <CInput
                label="Cliente"
                placeholder=""
              />
               <CInput
                label="Responsable cliente"
                placeholder=""              
              />
            <CInput
                label="Fecha Esperada de Inicio de Labores"
                type="date"              
              />
               <CInput
                label="Salario asignado"
                placeholder=""              
              />
               <CInput
                label="Cantidad de personal para la vacante"
                placeholder=""
              />
              
            </CCol>
            <CCol sm="4">
                 <CInput
                  label="Tipo de contrato"
                  placeholder=""
                />
                    <CSelect
                label="Grupo de ambientación"
                :options="options2"
                placeholder="Seleccione"
              />
                 <CInput
                  label="Área de trabajo"
                  placeholder=""
                />
                  <CInput
                  label="Número de horas a pagar a Cmc"
                  placeholder=""
                />
                 <CInput
                  label="Tarifa"
                  placeholder=""
                />
            </CCol>
            </CRow>
        </CCardBody>
        </CForm>
    </tab-content>
    <tab-content title="Información técnica">
        <CForm>
            <CCardBody>
        <CRow>
            <CCol sm="4"> 
                <CInput
                  label="Requiere equipo de cómputo"
                  placeholder=""
                />
                </CCol>
              
            </CRow>
            <CTextarea
                label="Características del software "
                placeholder="Contetido..."
                rows="5"
              />
               <CTextarea
                label="Observaciones para tener encuenta "
                placeholder="Contetido..."
                rows="5"
              />
            </CCardBody>
        </CForm>
    </tab-content>
</form-wizard>
     </CCard>

     

  </div>
</template>

<script>
import {FormWizard, TabContent} from 'vue-form-wizard'
import 'vue-form-wizard/dist/vue-form-wizard.min.css'


export default {
    
 data () {
    return {
      selected: [], // Must be an array reference!
      show: true,
      horizontal: { label:'col-3', input:'col-9' },
      options: ['Programador', 'Analista Programador Semi Senior', 'Analista Funcional','Analista técnico de calidad','Lider','Gerente','Director','Analista Progrmador Scrum','Soporte'],
      options2: ['CELLS', 'APX', 'ASO','HOST','NETCASH','LA NET','ORGANIZACIONAL','SANTANDER','RRHH','INFRAESTRUCTURA','GERENCIA'],
      options3: ['Bachiller', 'Técnico', 'Técnologo','Profesional Universitario','Especializacón','Maestría','Otros'],
    }
      
 },
 components:{
      FormWizard,
      TabContent
 }
}
</script>

<style>

</style>