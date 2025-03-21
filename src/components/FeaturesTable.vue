<template>
  <DataTable
    :value="newFeatures"
    stripedRows
    scrollable
    scrollHeight="200px"
    class="custom-table"
  >
    <Column field="mode" header="Funcionalidade" class="w-11/12">
      <template #body="slotProps">
        <p class="text-headerTable text-base">{{ slotProps.data.mode }}</p>
      </template>
    </Column>
    <Column field="taxa" header="Taxa De Uso">
      <template #body="slotProps">
        <p class="text-success text-base text-end">{{ slotProps.data.taxa }}</p>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";

const newFeatures = ref([
  {
    mode: "Veículo em Rota",
    taxa: "92%",
  },
  { mode: "Avaliação de coleta", taxa: "92%" },
  {
    mode: "Veículo em Rota",
    taxa: "92%",
  },
  { mode: "Avaliação de coleta", taxa: "92%" },
  {
    mode: "Veículo em Rota",
    taxa: "92%",
  },
  { mode: "Avaliação de coleta", taxa: "92%" },
]);
</script>
