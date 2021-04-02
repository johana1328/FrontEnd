<template>
  <div class="c-app flex-row align-items-center">
    <CContainer class="p-15" border>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent=" procesarLogin" > 
                   
                  <h1>Iniciar Sesión</h1>
                  <p class="text-muted">Iniciar sesión en su cuenta</p>

                           <CAlert v-if="error" show color="danger">
                          Danger Alert with <a href="#" class="alert-link">an example link</a>.
                          </CAlert>
                  <CInput
                   label="Usuario"
                  :lazy="false"
                  :value.sync="$v.form.userName.$model"
                  :isValid="checkIfValid('userName')"
                  placeholder="Usuario"
                  autocomplete="username"
                  invalidFeedback="Este es un campo obligatorio y debe tener al menos 5 caracteres"
                  v-model.trim="credenciales.usuario"
                            
                  >
                    <template #prepend-content><CIcon name="cil-user"/></template>
                  </CInput>
                   <CInput
                   :isValid="checkIfValid('password')"
                   :value.sync="$v.form.password.$model"
                    label="Contraseña"
                    type="password"
                    placeholder="Contraseña"
                    autocomplete="new-password"
                    invalidFeedback="Contraseña requerida que contenga al menos: número, letra mayúscula y minúscula, 8 caracteres"
                    v-model="credenciales.password"
                  
                >
                    <template #prepend-content><CIcon name="cil-lock-locked"/></template>
                  </CInput>
                  <CRow>
                    <CCol class="text-right">
                      <CButton 
                     class="ml-1"  
                    color="info " 
                    :disabled="isValid"
                    @click="validate"
                    type="submit"
                      >Ingresar</CButton>
                    </CCol>
                  
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
            <CCard
           
              text-color="white"
              class="text-center py-5 d-md-down-none"
              
            > 
              <CCardBody>
                <CImg 
                 src="Fondo.png"
                align="center"
                width="100%"

                />
               
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate"
import { required, minLength, email } from "vuelidate/lib/validators"
import api from "../clientes/api/api.js";

export default {
    name:"Login",
    data(){
      return{
        error:false,
        credenciales:{
            password:'',
            usuario:''
            
        },
        form: this.getEmptyForm(),
      
       
      }
    }, 
    computed: {
    isValid () { return !this.$v.form.$invalid },
    isDirty () { return this.$v.form.$anyDirty },
  
 },
      mixins: [validationMixin],
      validations: {
        form:{
          password: {
              required,
              minLength: minLength(8)
            
            },
          userName: {
            required,
            email,
          
          },
        }
  },

    methods:{
      procesarLogin(){
         let body={user:this.credenciales.usuario, password:this.credenciales.password}
         console.log(this.credenciales);
         api.post('/gestion-usuario/login',body).then(response =>{
           console.log(response);
           this.$router.push('Dashboard')
         });
      },
     
      checkIfValid (fieldName) {
     const field = this.$v.form[fieldName]
     if (!field.$dirty) {
       return null
     }
     return !(field.$invalid || field.$model === '')
   },
    validate () {
      this.$v.$touch()
    },
    submit () {
      if (this.isValid) {
        this.submitted = true
      }
    },

    reset () {
      this.form = this.getEmptyForm()
      this.submitted = false
      this.$v.$reset()
    },
   getEmptyForm () {
      return {
        Password: "",
        Usuario:""
       
      }
    }
  }
}
</script>

<style>

</style>