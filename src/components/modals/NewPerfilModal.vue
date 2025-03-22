<template>
  <Dialog
    v-bind:visible="isOpen"
    modal
    dismissableMask
    class="p-8"
    :style="{
      width: '32rem',
      backgroundColor: '#FFF',
      borderRadius: '10px',
    }"
    @update:visible="updateVisible"
  >
    <template #header>
      <h2 class="text-xl font-semibold">Novo Perfil</h2>
    </template>

    <div class="space-y-4">
      <div>
        <InputText
          id="nomePerfil"
          v-model="perfil.name"
          class="w-full mt-2 !bg-white !border-solid !border !border-borderInput !rounded-md !text-xs !text-headerTableOpacity40 !py-3 !px-2.5"
          placeholder="Novo Perfil"
        />
      </div>

      <h3 class="text-headerTableOpacity40 font-medium text-xs">Permissões</h3>
      <div
        v-for="permissao in permissoes"
        :key="permissao.id"
        class="flex items-center justify-between py-2 !mt-3 text-sm"
      >
        <span class="text-gray-800">{{ permissao.name }}</span>
        <CustomSwitch v-model="permissao.ativo" />
      </div>
    </div>

    <template #footer>
      <div class="w-full flex items-center justify-between gap-4 mt-4">
        <Button
          label="Voltar"
          @click="closeModal"
          class="p-button-text !py-3 text-center w-4/12 !rounded-lg !bg-buttonPrimaryModal !text-buttonPrimaryModalText"
        />
        <Button
          label="Adicionar"
          @click="addPerfil"
          class="p-button-primary !py-3 text-center w-8/12 !rounded-lg !bg-buttonSecundaryModal !text-buttonSecundaryModalText"
        />
      </div>
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits, defineAsyncComponent } from "vue";
import Dialog from "primevue/dialog";
import InputText from "primevue/inputtext";
import Button from "primevue/button";

const CustomSwitch = defineAsyncComponent(
  () => import("@/components/ui/CustomSwitch.vue")
);

const props = defineProps<{ isOpen: boolean }>();
const emit = defineEmits([
  "close",
  "add",
  "update:isOpen",
]);

const perfil = ref({
  name: "",
  permissoes: [],
});

const permissoes = ref([
  { id: 1, name: "Dashboard", ativo: false },
  { id: 2, name: "Downloads", ativo: false },
  { id: 3, name: "Avaliações", ativo: false },
  { id: 4, name: "Erros", ativo: false },
  { id: 5, name: "Feedbacks", ativo: false },
  { id: 6, name: "Novas Funcionalidades", ativo: false },
]);

const updateVisible = (value: boolean) => {
  emit("update:isOpen", value);
};

const closeModal = () => {
  emit("close");
};

const addPerfil = () => {
  const newPerfil = {
    nome: perfil.value.name,
    permissoes: permissoes.value.filter((p) => p.ativo).map((p) => p.name),
  };

  emit("add", newPerfil);
  closeModal();
};
</script>
