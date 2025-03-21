<template>
  <div class="max-w-screen overflow-w-scroll">
    <DataTable
      :value="feedbacks"
      stripedRows
      scrollable
      scrollHeight="400px"
      class="custom-table"
    >
      <Column field="avaliacao" header="Avaliação">
        <template #body="slotProps">
          <p class="text-gray-700">{{ slotProps.data.avaliacao }}</p>
        </template>
      </Column>
      <Column field="data" header="Data"></Column>
      <Column field="nota" header="Avaliação"></Column>
      <Column field="melhorias" header="Melhorias">
        <template #body="slotProps">
          <p v-for="melhoria in slotProps.data.melhorias" :key="melhoria">
            {{ melhoria }}
          </p>
        </template>
      </Column>
      <Column field="plataforma" header="Plataforma"></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { ref } from "vue";

const feedbacks = ref([
  {
    avaliacao:
      "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite. Quando vira o mês o aplicativo apaga os dados da produção dos meses anteriores, não sendo possível consultar os meses anteriores. Antes não tinha esse problema.",
    data: "01/04/24",
    nota: 4,
    melhorias: ["Dados de Produção", "Suporte ao Usuário"],
    plataforma: "Android",
  },
  {
    avaliacao:
      "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite.",
    data: "30/03/24",
    nota: 5,
    melhorias: ["-"],
    plataforma: "IOS",
  },
  {
    avaliacao:
      "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite. Quando vira o mês o aplicativo apaga os dados da produção dos meses anteriores, não sendo possível consultar os meses anteriores. Antes não tinha esse problema.",
    data: "01/04/24",
    nota: 4,
    melhorias: ["Dados de Produção", "Suporte ao Usuário"],
    plataforma: "Android",
  },
  {
    avaliacao:
      "Aplicativo muito bom, porém poderiam atualizar mensalmente com os dados da qualidade do leite.",
    data: "30/03/24",
    nota: 5,
    melhorias: ["-"],
    plataforma: "IOS",
  },
]);
</script>

<style scope>
.custom-table .p-datatable-header-cell,
.custom-table .p-datatable-tbody tr td {
  border-style: none;
}

.custom-table .p-datatable-header {
  color: #a0a0a0;
}

.custom-table .p-datatable-header-cell {
  background: #fff;
}

.p-datatable-column-title {
  color: rgba(48, 48, 48, 1) !important;
  font-size: 12px;
  opacity: 0.4;
}

.custom-table .p-datatable-tbody tr td {
  padding: 0.5rem;
  font-size: 10px;
  max-width: 250px;
}

.custom-table .p-datatable-tbody tr:nth-child(even) {
  background-color: rgba(246, 246, 246, 1) !important;
}
</style>
