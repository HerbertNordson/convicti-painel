<template>
  <section class="py-3 px-6 bg-white rounded-lg min-h-[300px]">
    <div class="flex items-center justify-between">
      <h2 class="text-xl mb-2">Usuários</h2>
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
import { computed, defineAsyncComponent, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";

const UserTable = defineAsyncComponent(() => import("./UserTable.vue"));

const NewPerfilModal = defineAsyncComponent(
  () => import("./modals/NewPerfilModal.vue")
);

const store = useStore();

const perfils = computed(() => store.getters.perfils);

onMounted(() => {
  store.dispatch("getPerfils");
});

const modalOpen = ref(false);

const openModal = () => {
  modalOpen.value = true;
};

const save = (newPerfil: string) => {
  modalOpen.value = false;
};
</script>
