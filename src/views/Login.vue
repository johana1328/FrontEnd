<template>
  <div class="c-app flex-row align-items-center">
    <CContainer class="p-15" border>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                 <h1>Iniciar Sesión</h1>
                  <p class="text-muted">Iniciar sesión en su cuenta</p>

                           <CAlert v-if="error" show color="danger">
                         Error: <a href="#" class="alert-link">usuario o contraseña invalida</a>.
                          </CAlert>
                <CForm> 
                  <CInput
                   label="Usuario"
                  :lazy="false"
                  :value.sync="$v.form.userName.$model"
                  :isValid="checkIfValid('userName')"
                  placeholder="Usuario"
                  autocomplete="username"
                  invalidFeedback="Este es un campo obligatorio y debe tener al menos 5 caracteres"
                 
                            
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
import { required, minLength,email } from "vuelidate/lib/validators"
import api from "../clientes/api/api.js";

export default {
    name:"Login",
    data(){
      return{
        form: this.getEmptyForm(),
        error:false,
        submitted: false,
        credenciales:{
            password:'',
            usuario:''
            
        },
        
      }
    }, 
    computed: {
    formString () { return JSON.stringify(this.form, null, 4) },
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
            email
          },
        }
  },

    methods:{
      errorMensages(){
        console.log("Error al autenticar");
      },
      procesarLogin(){
         let body={user:this.credenciales.usuario, password:this.credenciales.password}
         api.post('/gestion-usuario/login',body)
         .then(response =>{
            localStorage.Authorization = response.data.token;
            this.$router.push('Dashboard');
         }).catch((error) => {
                if(error.status==403){
                  this.error= true;           
                }
           });
      },
     
      checkIfValid (fieldName) {
        const field = this.$v.form[fieldName]
        console.log(field);
     
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
        password: "",
        userName:""
       
      }
    }
  }
}
</script>

<style>

</style>