<script lang="ts" setup>
const props = defineProps({title: String})
</script>
<template>
  <div class="h-9">
    <p class="text-2xl font-semibold">{{ title }}</p>
  </div>
</template>
<style scoped></style>