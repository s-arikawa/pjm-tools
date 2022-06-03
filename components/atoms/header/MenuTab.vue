<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    require: true
  },
  active: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <div class="flex flex-col hover:bg-gray-200">
    <div class="flex place-content-center">
      <p class="title text-base font-bold">{{ title }}</p>
    </div>
    <div v-if="active" class="border-2 border-black rounded-t-sm" />
  </div>
</template>

<style scoped>
.title {
  height: 62px;
  padding: 21px 16px 15px;
}
</style>