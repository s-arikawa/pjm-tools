<script lang="ts" setup></script>

<template>
  <header class="flex items-center h-16 bg-white Header">
    <ServiceLogo class="m-4"/>
    <NuxtLink to="/">
      <h1 class="text-xl">俺的最強のプロジェクト管理ツール</h1>
    </NuxtLink>
  </header>
</template>

<style scoped>
.Header {
  box-shadow: 0px 5px 12px rgba(0, 0, 0, 0.08);
}

</style>