<template>
  <div class="custom-switch" :class="{ checked: modelValue }" @click="toggle">
    <div class="switch-slider"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["update:modelValue"]);

const toggle = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>

<style scoped>
.custom-switch {
  width: 22px;
  height: 14px;
  background-color: #fff;
  border-radius: 22px;
  border: solid 2px #000;
  position: relative;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.custom-switch.checked {
  background-color: rgba(127, 67, 255, .2);
}

.switch-slider {
  width: 8px;
  height: 8px;
  border: solid 2px #000;
  border-radius: 50%;
  position: absolute;
  left: 1px;
  top: 1px;
  transition: transform 0.3s ease;
}

.custom-switch.checked .switch-slider {
  transform: translateX(8px);
  background: #fff;
}
</style>
