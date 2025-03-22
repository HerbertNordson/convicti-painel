<template>
  <component :is="layout">
    <TitlePage :title="'Estatísticas'" />

    <div class="flex flex-col gap-3">
      <section>
        <div class="grid grid-flow-col grid-cols-3 gap-4">
          <CardStatus
            :title="'Downloads'"
            :content="downloads.total"
            :android="downloads.android"
            :ios="downloads.ios"
            :icon="'cloud-icon.svg'"
            :alt="'Ícone de nuvem azul'"
          />
          <CardStatus
            :title="'Avaliações'"
            :content="evaluations.average"
            :android="evaluations.android"
            :ios="evaluations.ios"
            :icon="'star-icon.svg'"
            :alt="'Ícone de estrela'"
            :hate="true"
          />
          <CardStatus
            :title="'Erros'"
            :content="errors.total"
            :android="errors.android"
            :ios="errors.ios"
            :icon="'times-icon.svg'"
            :alt="'Ícone de erro'"
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
import { computed, defineAsyncComponent, onMounted, onUnmounted, watch } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";
import { useStore } from "vuex";
const store = useStore();

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

const downloads = computed(() => store.getters.downloads);
const evaluations = computed(() => store.getters.evaluations);
const errors = computed(() => store.getters.errors);

onMounted(() => {
  store.dispatch("fetchData");
});

</script>
