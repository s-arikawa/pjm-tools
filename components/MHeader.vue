<script lang="ts" setup>
import {CogIcon, UserCircleIcon} from '@heroicons/vue/solid'
import {ref} from "#imports";

const menuItems = ref([
  {title: "プロジェクト", to: 'projects', active: true},
  {title: "メンバー", to: 'members', active: false},
  {title: "カレンダー", to: 'calendar', active: false},
])
const onClickMenuTab = (title: String) => {
  menuItems.value.forEach((it) => it.active = it.title === title)
}
</script>
<template>
  <header class="flex flex-row items-center content-center h-16 bg-white shadow-md">
    <NuxtLink to="/" class="flex-none h-16">
      <ServiceLogo class="m-4 pr-8"/>
    </NuxtLink>
    <div class="flex-none flex flex-row content-start gap-4 h-16">
      <NuxtLink v-for="item in menuItems" :to="item.to">
        <MenuTab :title="item.title" class="w-32" :active="item.active" @click="onClickMenuTab(item.title)"/>
      </NuxtLink>
    </div>
    <div class="flex-1 flex flex-row-reverse gap-4 h-16 content-center pr-6">
      <MenuTab>
        <UserCircleIcon class="h-16 w-10 text-gray"/>
      </MenuTab>
      <MenuTab>
        <CogIcon class="h-16 w-10 text-gray"/>
      </MenuTab>
    </div>
  </header>
</template>
<style scoped></style>