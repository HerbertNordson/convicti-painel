<template>
  <DataTable
    :value="features"
    stripedRows
    scrollable
    scrollHeight="200px"
    class="custom-table"
  >
    <Column field="mode" header="Funcionalidade" class="w-11/12">
      <template #body="slotProps">
        <p class="text-headerTable text-base">{{ slotProps.data.name }}</p>
      </template>
    </Column>
    <Column field="taxa" header="Taxa De Uso">
      <template #body="slotProps">
        <p class="text-success text-base text-end">
          {{ slotProps.data.total_usage }}%
        </p>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
const store = useStore();

const features = computed(() => store.getters.features);

onMounted(() => {
  store.dispatch("getFeatures");
});
</script>
