<script lang="ts" setup>
import {SearchIcon} from '@heroicons/vue/outline'

const props = defineProps({modelValue: String, placeholder: String})
const emits = defineEmits<{
  (e: 'update:modelValue', num: string): void
  (e: 'search'): void
}>()
const onInputString = (e: Event) => {
  const target = e.target as HTMLInputElement
  emits('update:modelValue', target.value)
}
const onSearch = () => emits('search')
</script>
<template>
  <div class="relative">
    <InputText :value="modelValue" @input="onInputString" :placeholder="placeholder"/>
    <span class="absolute inset-y-0 right-0 flex items-center pr-2">
      <button type="submit" class="p-1" @click="onSearch">
        <SearchIcon class="w-6 text-gray"/>
      </button>
    </span>
  </div>
</template>
<style scoped></style>