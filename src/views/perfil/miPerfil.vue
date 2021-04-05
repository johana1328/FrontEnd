<template>
 <div>
      <CCard >
          <CCardHeader>
           <h3>Curriculum Vitae</h3> 
          </CCardHeader>
  <form-wizard  next-button-text="Siguiente" back-button-text="Devolver" finish-button-text="Guardar" title="" subtitle="" color="#264985" shape="circle" step-size="xs">
    <tab-content title="Datos básicos">
         <CForm >
       
             <CCardBody >
          <CRow>
               <CCol sm="6" >
                    <CInput class="col-sm-10"
                  label="Documento"
                  placeholder="Ingrese documento"
                />
                  <CInput class="col-sm-10"
                label="Segundo nombre"
                placeholder ="Ingrese segundo nombre"
              />
                <CInput class="col-sm-10"
                  label="Segundo apellido"
                  placeholder="Ingrese segundo apellido"
                />
                 <CInput class="col-sm-10"
                label="Fecha de nacimiento"
                type="date"              
              />
               <CInput class="col-sm-10"
                  label="Número de documento"
                  placeholder="Ingrese número de documento"
                />
                <CInput class="col-sm-10"
                  label="Lugar de expedición"
                  placeholder="Ingrese lugar"
                />
      
               </CCol>
                <CCol sm="6">
                <CInput class="col-sm-10"
                  label="Primer nombre"
                  placeholder="Ingrese primer nombre"
                />
                  <CInput class="col-sm-10"
                  label="Primer apellido"
                  placeholder="Ingrese primer apellido"
                />
                 <CInput class="col-sm-10"
                  label="Lugar Nacimiento"
                  placeholder="Ingrese lugar nacimiento"
                />
                   <CSelect class="col-sm-10"
                label="Tipo de documento"
                :options="options"
                placeholder="Seleccione"
              />
                <CInput class="col-sm-10"
                label="Fecha de expedición"
                type="date"              
              />
                   <CInput class="col-sm-10"
                  label="RH"
                  placeholder="Ingrese RH"
                />
             
              </CCol>
          </CRow>
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
      options: ['Cedula Ciudadania', 'Tarjeta identidad', 'Cedula extranjería','Pasaporte'],
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

</style>>