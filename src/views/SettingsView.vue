<template>
  <component :is="layout">
    <TitlePage :title="'Configurações'" />
  </component>
</template>

<script setup lang="ts">
import TitlePage from "../components/ui/TitlePage.vue";

const layout = "sidebar-view";
</script>
