<template>
  <component :is="layout">
    <TitlePage :title="'Estatísticas'" />

    <div class="flex flex-col gap-3">
      <section>
        <div class="grid grid-flow-col grid-cols-3 gap-4">
          <CardStatus
            :title="'Downloads'"
            :content="'333'"
            :android="244"
            :ios="64"
            :icon="'cloud-icon.svg'"
            :alt="'Ícone de nuvem azul'"
          />
          <CardStatus
            :title="'Avaliações'"
            :content="'4.2'"
            :android="244"
            :ios="64"
            :icon="'star-icon.svg'"
            :alt="'Ícone de nuvem azul'"
            :hate="true"
          />
          <CardStatus
            :title="'Downloads'"
            :content="'333'"
            :android="244"
            :ios="64"
            :icon="'times-icon.svg'"
            :alt="'Ícone de nuvem azul'"
          />
        </div>
      </section>

      <section class="py-3 px-6 bg-white rounded-lg">
        <h2 class="text-xl mb-2">Feedbacks</h2>
        <StatisticTable />
      </section>
      <section class="py-3 px-6 bg-white rounded-lg">
        <h2 class="text-xl mb-2">Novas Funcionalidades</h2>
        <FeaturesTable />
      </section>
    </div>
  </component>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";

const layout = "sidebar-view";

const StatisticTable = defineAsyncComponent(
  () => import("@/components/StatisticTable.vue")
);

const FeaturesTable = defineAsyncComponent(
  () => import("@/components/FeaturesTable.vue")
);
const TitlePage = defineAsyncComponent(
  () => import("@/components/ui/TitlePage.vue")
);
const CardStatus = defineAsyncComponent(
  () => import("@/components/CardStatus.vue")
);
</script>
