<template>
  <div class="flex items-center h-full w-full bg-background">
    <aside
      class="hidden md:block max-w-[256px] h-full w-full px-6 py-[45px] bg-white"
    >
      <div class="flex flex-col items-center justify-between h-full">
        <div class="flex flex-col justify-center items-center gap-6 w-full">
          <Logo />
          <div class="w-full">
            <p class="uppercase text-sm text-primaryText text-center mb-4">
              Painel de dados
            </p>

            <ul class="w-full">
              <li>
                <router-link
                  to="/dashboard"
                  :class="[
                    'flex ittems-center gap-2 rounded-[5px] py-2.5 px-5 cursor-pointer hover:bg-hover',
                    isActive('/dashboard') ? 'bg-hover' : '',
                  ]"
                >
                  <img
                    class="size-[18px]"
                    src="../../assets/icons/dash-icon.svg"
                  />
                  <p class="text-sm text-link">Dashboard</p>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <ul class="w-full">
          <li>
            <router-link
              to="/configuracoes"
              :class="[
                'flex ittems-center gap-2 rounded-[5px] py-2.5 px-5 cursor-pointer hover:bg-hover',
                isActive('/configuracoes') ? 'bg-hover' : '',
              ]"
            >
              <img
                class="size-[18px]"
                src="../../assets/icons/settings-icon.svg"
              />
              <p class="text-sm text-link">Configurações</p>
            </router-link>
          </li>
          <li>
            <router-link
              class="flex ittems-center gap-2 rounded-[5px] py-2.5 px-5 cursor-pointer hover:bg-hover"
            >
              <img
                class="size-[18px]"
                src="../../assets/icons/loggout-icon.svg"
              />
              <p class="text-sm text-link">Sair</p>
            </router-link>
          </li>
        </ul>
      </div>
    </aside>
    <main class="w-full h-full max-w-7xl p-12">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
import Logo from "../ui/LogoImage.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const isActive = (path: string) =>
  computed(() => route.path.startsWith(path)).value;
</script>
