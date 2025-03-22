<template>
  <section class="py-3 px-6 bg-white rounded-lg min-h-[300px]">
    <div class="flex items-center justify-between">
      <h2 class="text-xl mb-2">Perfils</h2>
      <button @click="openModal">
        <img src="../assets/icons/sum-icon.svg" alt="Botão de adição" />
      </button>
    </div>
    <UserTable :data="perfils" />
    <NewPerfilModal
      :isOpen="modalOpen"
      @close="modalOpen = false"
      @add="save"
    />
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const UserTable = defineAsyncComponent(() => import("./UserTable.vue"));

const NewPerfilModal = defineAsyncComponent(
  () => import("./modals/NewPerfilModal.vue")
);

interface Perfil {
  id: number;
  name: string;
  permissions: string[];
  quantity: number;
}

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

const save = (newPerfil: string) => {
  console.log("Novo perfil adicionado:", newPerfil);
  modalOpen.value = false;
};

const perfils = ref<Array<Perfil>>([
  {
    id: 1,
    name: "Admin",
    permissions: ["Tudo"],
    quantity: 1,
  },
  {
    id: 2,
    name: "Desenvolvedor",
    permissions: ["Downloads", "Avaliações", "Erros", "Novas Funcionalidades"],
    quantity: 2,
  },
  {
    id: 3,
    name: "Recursos Humanos",
    permissions: ["Nenhuma"],
    quantity: 1,
  },
]);
</script>
