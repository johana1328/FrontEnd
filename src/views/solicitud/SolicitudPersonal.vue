<template>
 <div>
      <CCard >
          <CCardHeader>
           <h3>Solicitud de Personal</h3> 
          </CCardHeader>
  <form-wizard  next-button-text="Siguiente" back-button-text="Devolver" finish-button-text="Guardar" title="" subtitle="" color="#264985" shape="circle" step-size="xs">
    <tab-content title="Información de perfil">
         <CForm >
       
             <CCardBody >
          <CRow>
               <CCol sm="6" >
                    <CInput class="col-sm-8"
                  label="Área Solicitante"
                  placeholder=""
                />
                  <CSelect class="col-sm-8"
                label="Perfil Solicitado"
                :options="options"
                placeholder="Seleccione"
              />
                <CInput class="col-sm-8"
                  label="Especialidad"
                  placeholder=""
                />
      
               </CCol>
                <CCol sm="6">
                <CInput class="col-sm-8"
                  label="Experencia mínima requerida en años"
                  placeholder=""
                />
                  <CInput class="col-sm-8"
                  label="Funcionalidad ha realizar"
                  placeholder=""
                />
             
                     <CSelect class="col-sm-8"
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
            <CCol  sm="6">
                <CInput class="col-sm-10"
                label="Cliente"
                placeholder=""
              />
               <CInput class="col-sm-10"
                label="Responsable cliente"
                placeholder=""              
              />
            <CInput class="col-sm-10"
                label="Fecha Esperada de Inicio de Labores"
                type="date"              
              />
               <CInput class="col-sm-10"
                label="Salario asignado"
                placeholder=""              
              />
               <CInput class="col-sm-10"
                label="Cantidad de personal para la vacante"
                placeholder=""
              />
              
            </CCol>
            <CCol sm="6">
                 <CInput class="col-sm-10"
                  label="Tipo de contrato"
                  placeholder=""
                />
                    <CSelect class="col-sm-10"
                label="Grupo de ambientación"
                :options="options2"
                placeholder="Seleccione"
              />
                 <CInput class="col-sm-10"
                  label="Área de trabajo"
                  placeholder=""
                />
                  <CInput class="col-sm-10"
                  label="Número de horas a pagar a Cmc"
                  placeholder=""
                />
                 <CInput class="col-sm-10"
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