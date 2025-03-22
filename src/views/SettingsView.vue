<template>
  <component :is="layout">
    <TitlePage :title="'Configurações'" />
    <div class="flex flex-col gap-4">
      <PerfilsSection />
      <UsersSection />
    </div>
  </component>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const UsersSection = defineAsyncComponent(
  () => import("@/components/UsersSection.vue")
);

const PerfilsSection = defineAsyncComponent(
  () => import("@/components/PerfilsSection.vue")
);

const layout = "sidebar-view";
</script>
