<script lang="ts" setup>
import {computed, ref} from "#imports";
import MTable from "~/components/MTable.vue";
import MInputText from "~/components/forms/MInputText.vue";

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
    <div class="flex items-center gap-3">
      <label class="block">
        <span class="text-gray-700">ID:</span>
        <MInputText v-model="id"/>
      </label>

      <label>
        <span>Title:</span>
        <MInputText v-model="title"/>
      </label>

      <div>
        <label>
          <span>SP:</span>
          <MInputNumber v-model="sp"/>
        </label>
      </div>
      <div>
        <button type="button" @click="addTask">Enter</button>
      </div>
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