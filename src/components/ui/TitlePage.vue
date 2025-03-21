<template>
  <h1 class="text-[32px] font-bold">{{ title }}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitlePage",
  props:{
    title: { type: String, required: true, default: "" },
  },
});
</script>
