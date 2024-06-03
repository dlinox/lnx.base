<template>
  <v-row class="h-100" no-gutters>
    <v-col cols="12" md="6" class="col-wrapper-form">
      <div>
 
      </div>
      <div>
        <v-card class="" elevation="0">
          <div class="pa-4">
            <h5 class="text-start text-h5">Bienvenido al sistema</h5>
            <p class="text-center">
              Ingrese sus credenciales para acceder al sistema.
            </p>
          </div>
          <v-card-text>
            <v-btn
              color="primary"
              block
              variant="outlined"
              prepend-icon="mdi-google"
              link
              href="/auth/google"
            >
              Google
            </v-btn>
          </v-card-text>

          <v-divider class="my-3"> </v-divider>

          <v-card-text>
            <v-form @submit.prevent="submitSignIn">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="form.email"
                    label="Usuario"
                    prepend-inner-icon="mdi-account"
                    type="text"
                  />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    autocomplete="off"
                    v-model="form.password"
                    prepend-inner-icon="mdi-lock"
                    :append-inner-icon="
                      showPassword ? 'mdi-eye' : 'mdi-eye-off'
                    "
                    @click:append-inner="() => (showPassword = !showPassword)"
                    label="Contraseña"
                    :type="showPassword ? 'text' : 'password'"
                  />
                </v-col>
              </v-row>

              <div
                class="text-center d-flex justify-space-between align-center py-2"
              >
                <v-checkbox
                  color="primary"
                  label="Recordar"
                  hide-details="true"
                  density="compact"
                />

                <a href="" class="text-primary"> Olvidaste tu contraseña? </a>
              </div>
              <v-btn type="submit" color="primary" block> Ingresar </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </div>
      <div class="text-caption pa-3">
        © Todos los derechos reservados {{ new Date().getFullYear() }} -
        Desarrolado por
        <a href="">Linox</a>
      </div>
    </v-col>
    <v-col cols="0" md="6" class="bg-black"> </v-col>
  </v-row>
</template>
<script setup>
import { ref } from "vue";


const showPassword = ref();
const form = ref({
  email: "admin@gmail.com",
  password: "password",
});
const submitSignIn = () => {};
</script>
<style>
.col-wrapper-form {
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
}
</style>
