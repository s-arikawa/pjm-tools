<script lang="ts" setup>
const menuItems = [
  {title: "プロジェクト", to: 'projects'},
  {title: "メンバー", to: 'members'},
  {title: "カレンダー", to: 'calendar'},
]
</script>
<template>
  <header class="flex flex-row items-center content-center h-16 bg-white shadow-md">
    <NuxtLink to="/">
      <ServiceLogo class="m-4 pr-8"/>
    </NuxtLink>
    <div class="flex flex-row content-start gap-4">
      <NuxtLink v-for="item in menuItems" :to="item.to">
        <MenuTab :title="item.title" class="w-32"/>
      </NuxtLink>
    </div>
  </header>
</template>
<style scoped></style>