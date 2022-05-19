<script lang="ts" setup>
const props = defineProps({modelValue: String})
const emits = defineEmits<{ (e: 'update:modelValue', num: string): void }>()
const onInputString = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
</script>

<template>
  <input type="text" :value="modelValue" @input="onInputString"
         class="mt-1 block w-full rounded-md border-gray-300 shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
</template>

<style scoped></style>
