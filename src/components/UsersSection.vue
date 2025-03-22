<template>
  <section class="py-3 px-6 bg-white rounded-lg min-h-[300px]">
    <div class="flex items-center justify-between">
      <h2 class="text-xl mb-2">Usuários</h2>
      <button @click="openModal">
        <img src="../assets/icons/sum-icon.svg" alt="Botão de adição" />
      </button>
    </div>
    <UserTable :data="users" />
    <NewUserModal
      :isOpen="modalOpen"
      @close="modalOpen = false"
      @add="save"
    />
  </section>
</template>

<script setup lang="ts">
import { defineAsyncComponent, ref } from "vue";

const UserTable = defineAsyncComponent(() => import("./UserTable.vue"));

const NewUserModal = defineAsyncComponent(
  () => import("./modals/NewUserModal.vue")
);

interface Users {
  id: number;
  name: string;
  email: string;
  perfil: string;
  status: boolean;
}

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

const save = (newPerfil: Object) => {
  console.log("Novo perfil adicionado:", newPerfil);
  modalOpen.value = false;
};

const users = ref<Array<Users>>([
  {
    id: 1,
    name: "junior Luiz",
    email: "junior@convicti.com.br",
    perfil: "Admin",
    status: true,
  },
  {
    id: 2,
    name: "joao Lucas",
    email: "joao.lucas@convicti.com.br",
    perfil: "Desenvolvedor",
    status: false,
  },
  {
    id: 3,
    name: "Cíntia Lopes",
    email: "cintia.lopes@convicti.com.br",
    perfil: "Recursos Humanos",
    status: true,
  },
]);
</script>
