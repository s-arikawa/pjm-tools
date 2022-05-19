<script lang="ts" setup>
const props = defineProps({label: String})
</script>
<template>
  <label>
    <slot name="label">
      <span class="text-gray-700">{{ label }}</span>
    </slot>
    <slot>
      <MInputText/>
    </slot>
  </label>
</template>
<style scoped></style>
