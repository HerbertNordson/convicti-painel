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
      <h2 class="text-xl font-semibold">Novo Usuário</h2>
    </template>

    <div class="space-y-4">
      <div>
        <InputText
          id="nomePerfil"
          v-model="user.name"
          class="w-full mt-2 !bg-white !border-solid !border !border-borderInput !rounded-md !text-xs !text-headerTableOpacity40 !py-3 !px-2.5"
          placeholder="Nome do usuário"
        />
      </div>
      <div>
        <InputText
          id="nomePerfil"
          v-model="user.email"
          class="w-full mt-2 !bg-white !border-solid !border !border-borderInput !rounded-md !text-xs !text-headerTableOpacity40 !py-3 !px-2.5"
          placeholder="Email"
        />
      </div>
      <div
        v-for="profile in profiles"
        :key="profile.id"
        class="flex items-center space-x-2 flex justify-between items-center"
      >
        <label :for="`profile-${profile.id}`" class="text-sm">{{
          profile.name
        }}</label>
        <input
          type="radio"
          :id="`profile-${profile.id}`"
          v-model="user.profile_id"
          :value="profile.value"
          :name="'profile-radio'"
          class="form-radio"
        />
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
          @click="addUser"
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
const emit = defineEmits(["close", "add", "update:isOpen"]);

const user = ref({
  name: "",
  email: "",
  profile_id: 0,
});

const profiles = ref([
  { id: 1, name: "Admin", value: 1 },
  { id: 2, name: "Desenvolvedor", value: 2 },
  { id: 3, name: "Recursos Humanos", value: 3 },
]);

const updateVisible = (value: boolean) => {
  emit("update:isOpen", value);
};

const closeModal = () => {
  emit("close");
};

const cleanUser = () => {
  (user.value.name = ""), (user.value.email = ""), (user.value.profile_id = 0);
};

const addUser = () => {
  const newUser = {
    name: user.value.name,
    email: user.value.email,
    profile_id: user.value.profile_id,
  };

  emit("add", newUser);
  cleanUser();
  closeModal();
};
</script>
