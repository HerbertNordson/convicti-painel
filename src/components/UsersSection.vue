<template>
  <section class="py-3 px-6 bg-white rounded-lg min-h-[300px]">
    <div class="flex items-center justify-between">
      <h2 class="text-xl mb-2">Perfils</h2>
      <button @click="openModal">
        <img src="../assets/icons/sum-icon.svg" alt="Botão de adição" />
      </button>
    </div>
    <UserTable :data="users" />
    <NewUserModal :isOpen="modalOpen" @close="modalOpen = false" @add="save" />
  </section>
</template>

<script setup lang="ts">
import { computed, defineAsyncComponent, onMounted, ref } from "vue";
import { useStore } from "vuex";

const UserTable = defineAsyncComponent(() => import("./UserTable.vue"));

const NewUserModal = defineAsyncComponent(
  () => import("./modals/NewUserModal.vue")
);

const store = useStore();

const users = computed(() => store.getters.users);

onMounted(() => {
  store.dispatch("getUsers");
});

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

const save = (newPerfil: Object) => {
  console.log("Novo perfil adicionado:", newPerfil);
  modalOpen.value = false;
};
</script>
