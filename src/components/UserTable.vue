<template>
  <DataTable
    :value="data || []"
    stripedRows
    scrollable
    scrollHeight="400px"
    class="user-table"
  >
    <Column field="name" header="Nome">
      <template #body="slotProps">
        <p class="text-headerTable">{{ slotProps.data.name }}</p>
      </template>
    </Column>

    <Column
      v-if="data && data.length && data.some((u) => u.email)"
      field="email"
      header="Email"
    >
      <template #body="slotProps">
        <p>{{ slotProps.data.email || "N/A" }}</p>
      </template>
    </Column>

    <Column
      v-if="data && data.length && data.some((u) => u.quantity)"
      field="quantity"
      header="Quantidade de usuários"
    >
      <template #body="slotProps">
        <p>{{ slotProps.data.quantity }}</p>
      </template>
    </Column>

    <Column field="permissions" header="Permissões">
      <template #body="slotProps">
        <div class="flex items-center gap-4 max-w-[450px] flex-wrap">
          <p
            v-for="permission in slotProps.data.permissions"
            :key="permission"
            class="bg-primaryOpacity50 py-1 px-4 rounded-full"
          >
            {{ permission }}
          </p>
        </div>
      </template>
    </Column>

    <Column
      v-if="data && data.length && data.some((u) => u.perfil)"
      field="perfil"
      header="Perfil"
    >
      <template #body="slotProps">
        <p>{{ slotProps.data.perfil }}</p>
      </template>
    </Column>

    <Column
      v-if="data && data.length && data.some((u) => u.status)"
      field="status"
      header="Status"
    >
      <template #body="slotProps">
        <p
          :class="[
            'py-1 px-6 rounded-md text-center uppercase max-w-[120px]',
            slotProps.data.status
              ? 'bg-successBack text-successText'
              : 'bg-red-400 text-red-600',
          ]"
        >
          {{ slotProps.data.status ? "Ativo" : "Desativado" }}
        </p>
      </template>
    </Column>

    <Column field="" header="">
      <template #body="slotProps">
        <router.link to="#" class="cursor-pointer">
          <img
            src="../assets/icons/edit-icon.svg"
            alt="Editar informações icone"
            :id="slotProps.data.id"
          />
        </router.link>
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
const layout = "sidebar-view";

import DataTable from "primevue/datatable";
import Column from "primevue/column";
import { defineProps, withDefaults } from "vue";

interface User {
  id: number;
  name: string;
  permissions: string[];
  email?: string;
  quantity?: number;
  perfil?: string;
  status?: string;
}

// Definir props com um valor padrão para evitar que `data` seja `undefined`
withDefaults(defineProps<{ data?: User[] }>(), {
  data: () => [],
});
</script>

<style scope>
.user-table .p-datatable-header-cell,
.user-table .p-datatable-tbody tr td {
  border-style: none;
}

.user-table .p-datatable-header {
  color: #a0a0a0;
}

.user-table .p-datatable-header-cell {
  background: #fff;
}

.p-datatable-column-title {
  color: rgba(48, 48, 48, 1) !important;
  font-size: 12px;
  opacity: 0.4;
}

.user-table .p-datatable-tbody tr td {
  padding: 0.5rem;
  font-size: 10px;
  max-width: 250px;
}

.user-table .p-datatable-tbody tr:nth-child(even) {
  background-color: rgba(246, 246, 246, 1) !important;
}
</style>
