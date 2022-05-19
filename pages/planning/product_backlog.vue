<script lang="ts" setup>
import {computed, ref} from "#imports";

const backlog = ref([
  {id: "#1", title: "画面 A の設計", sp: 8},
  {id: "#2", title: "画面 A の実装", sp: 20},
  {id: "#3", title: "画面 A のテスト設計", sp: 12}
])
const totalSP = computed(() => backlog.value.reduce((sum, task) => sum + task.sp, 0))
const taskCount = computed(() => backlog.value.length)

const addTask = () => {
  backlog.value.push({id: id.value, title: title.value, sp: sp.value})
}

const tableColumns = [
  {key: "id", name: "ID"},
  {key: "title", name: "Title"},
  {key: "sp", name: "Story Point"}
]

const id = ref("")
const title = ref("")
const sp = ref(1)
</script>
<template>
  <div>
    <InputForm label="ID">
      <InputText v-model="id"/>
    </InputForm>

    <InputForm label="Title">
      <InputText v-model="title"/>
    </InputForm>

    <InputForm label="SP">
      <InputNumber v-model="sp"/>
    </InputForm>
    <div>
      <button type="button" @click="addTask">Enter</button>
    </div>

    <MTable class="w-full" :columns="tableColumns" :values="backlog">
      <template #tfoot>
        <tr>
          <td class="p-3">合計</td>
          <td class="p-3">{{ taskCount }} 課題</td>
          <td class="p-3 text-right pr-10">{{ totalSP }} SP</td>
        </tr>
      </template>
    </MTable>
  </div>
</template>

<style scoped></style>