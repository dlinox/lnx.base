<template>
    <v-app app theme="light">
        <v-main app>
            <router-view></router-view>
        </v-main>
    </v-app>
</template>
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<script>
</script>