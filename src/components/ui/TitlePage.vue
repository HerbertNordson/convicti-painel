<template>
  <h1 class="text-[32px] font-bold font-nunito mb-6">{{ title }}</h1>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

defineProps({
  title: { type: String, required: true },
});
</script>
