<script lang="ts" setup>
const props = defineProps({modelValue: Number})
const emits = defineEmits<{ (e: 'update:modelValue', num: number): void }>()
const onInputNumber = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', Number(target.value))
}
</script>

<template>
  <input type="number" :value="modelValue" @input="onInputNumber"
         class="form-input w-full rounded-md border-gray-300 shadow-sm
        focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
</template>

<style scoped></style>
