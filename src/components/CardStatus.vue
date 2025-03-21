<template>
  <article class="col-span-full md:col-span-1 bg-white py-3 px-6 rounded-lg">
    <div class="flex flex-col justify-between">
      <header>
        <div class="flex items-center justify-between">
          <p class="text-xl text-headerTableOpacity40">{{ title }}</p>
          <img :src="iconSrc" :alt="alt" />
        </div>
      </header>
      <main>
        <p class="text-[2.5rem] font-bold text-headerTable">
          {{ content }}<span v-if="hate" class="text-base">/5</span>
        </p>
      </main>
      <footer>
        <div class="flex items-center gap-6">
          <div class="flex items-center gap-2">
            <img
              src="../assets/icons/android-icon.svg"
              alt="ícone do sistema operacional android"
            />
            <span class="text-headerTable font-light">{{ android }}</span>
          </div>
          <div class="flex items-center gap-2">
            <img
              src="../assets/icons/apple-icon.svg"
              alt="ícone do sistema operacional apple"
            />
            <span class="text-headerTable font-light">{{ ios }}</span>
          </div>
        </div>
      </footer>
    </div>
  </article>
</template>

<script setup lang="ts">
import { computed, defineProps } from "vue";

const { title, content, android, ios, icon, alt, hate } = defineProps({
  title: { type: String, required: true },
  content: { type: String, required: true },
  android: { type: Number, required: true },
  ios: { type: Number, required: true },
  icon: { type: String, required: true },
  alt: { type: String, required: true },
  hate: { type: Boolean, required: false, default: false },
});

const iconSrc = computed(() => require(`@/assets/icons/${icon}`));
</script>
