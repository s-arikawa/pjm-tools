<script lang="ts" setup>
import {ref} from "#imports";

const searchText = ref("")
const doSearch = () => window.alert(`プロジェクトを検索：${searchText.value}`)
</script>
<template>
  <div>
    <PageTitle title="プロジェクト"/>
    <SearchInputText v-model="searchText" class="mt-8 w-96" placeholder="検索ワードを入力してください" @search="doSearch"/>
    <p>{{ searchText }}</p>
  </div>
</template>
<style scoped></style>
