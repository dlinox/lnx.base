<template>
  <v-app id="inspire">
    <v-app-bar color="grey-lighten-4" flat>
      <v-btn icon @click="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
      <v-toolbar-title>G-DREWS</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" width="200">
      <v-list nav>
        <v-list-item
          to="/dashboard"
          active-class="active"
          exact
          title="Dashboard"
          prepend-icon="mdi-home"
        />
        <v-list-item
          to="/tareos"
          active-class="active"
          exact
          title="Tareos"
          prepend-icon="mdi-account"
        />
        <v-list-item
          to="/alquiler"
          active-class="active"
          exact
          title="Alquiler"
          prepend-icon="mdi-account"
        />
        <v-list-item
          to="/valoraciones"
          active-class="active"
          exact
          title="Valoraciones"
          prepend-icon="mdi-account"
        />
        <v-list-group value="Seguridad">
          <template v-slot:activator="{ props }">
            <v-list-item v-bind="props" title="Seguridad"></v-list-item>
          </template>

          <v-list-item
            to="/seguridad/usuarios"
            active-class="active"
            exact
            title="Usuarios"
          />
          <v-list-item
            to="/seguridad/roles"
            active-class="active"
            exact
            title="Roles"
          />
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref } from "vue";

const drawer = ref(true);

const menu = ref([
  {
    title: "Dashboard",
    icon: "mdi-home",
    route: "/dashboard",
  },
  {
    title: "Tareos",
    icon: "mdi-account",
    route: "/tareos",
  },
  {
    title: "Alquiler",
    icon: "mdi-account",
    route: "/alquiler",
  },
  {
    title: "Valoraciones",
    icon: "mdi-account",
    route: "/valoraciones",
  },
  {
    title: "Seguridad",
    icon: "mdi-account",
    route: null,
    children: [
      {
        title: "Usuarios",
        icon: "mdi-account",
        route: "/seguridad/usuarios",
      },
      {
        title: "Roles",
        icon: "mdi-account",
        route: "/seguridad/roles",
      },
    ],
  },
]);
</script>
