<template>
  <component
    :is="layout"
    class="relative h-full w-full flex flex-col justify-center md:flex-row md:justify-between 2xl:justify-center items-center"
  >
    <article class="absolute left-8 top-8">
      <Logo />
      <p class="uppercase">Convic<span class="text-primary">ti</span></p>
    </article>
    <div
      class="flex flex-col items-center justify-center gap-8 w-full lg:max-w-sm xl:max-w-lg p-14"
    >
      <div class="w-full max-w-xs">
        <h1 class="font-bold text-2xl">Bem-vindo de Volta</h1>
        <p class="opacity-50 text-xs">
          Insira sua credenciais para acessar a plataforma
        </p>
      </div>

      <form class="w-full flex flex-col gap-4 max-w-xs">
        <div class="flex flex-col gap-2 w-full">
          <input
            type="text"
            class="w-full py-[12px] px-[10px] border border-solid border-borderInput rounded-md text-xs"
            placeholder="Seu e-mail"
          />
          <input
            type="password"
            class="w-full py-[12px] px-[10px] border border-solid border-borderInput rounded-md text-xs"
            placeholder="Sua senha"
          />
        </div>
        <input
          type="submit"
          class="w-full border border-solid border-primary bg-primary text-center text-white rounded-md text-xs p-3 cursor-pointer hover:opacity-90"
          placeholder="Entrar"
          value="Entrar"
        />
      </form>
    </div>

    <div
      class="relative hidden md:flex items-center justify-end max-w-7xl w-full h-full overflow-hidden"
    >
      <article
        class="absolute w-full h-full min-h-screen max-w-7xl top-0 right-0"
      >
        <div
          class="absolute flex items-center justify-end w-full h-full max-h-screen top-0 right-0"
        >
          <img
            src="../assets/images/dashboard.png"
            alt="Demonstrativo do painel Convicti"
            class="w-10/12 h-[80%] max-w-[750px] max-h-[800px] z-10"
          />
          <div
            class="absolute w-full max-w-[920px] aspect-square border border-solid border-primaryOpacity50 rounded-full p-16 right-[-6rem] bottom-0 shadow shadow-md"
          >
            <div
              class="w-full h-full border border-solid border-primary rounded-full shadow shadow-md"
            ></div>
          </div>
        </div>
      </article>
    </div>
  </component>
</template>

<script setup lang="ts">
import Logo from "../components/ui/LogoImage.vue";
const layout = "blank-view";
</script>
