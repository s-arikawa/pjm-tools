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

}
</script>
<template>
  <div>
    <div class="flex items-center gap-3">
      <label class="block">
        <span class="text-gray-700">ID:</span>
        <input type="number" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
      </label>

      <label>
        <span>Title:</span>
        <input type="text">
      </label>

      <div>
        <label>
          SP:
          <input type="number">
        </label>
      </div>
      <div>
        <button type="button" @click="addTask">Enter</button>
      </div>
    </div>

    <table class="table-auto border-collapse">
      <thead class="border-b-2 border-b-gray-400">
      <tr>
        <th class="px-3 py-5 w-16">ID</th>
        <th class="px-3 py-5 w-96">Title</th>
        <th class="px-3 py-5 w-40">Story Point</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in backlog">
        <td class="p-3 text-center">{{ task.id }}</td>
        <td class="p-3">{{ task.title }}</td>
        <td class="p-3 text-right pr-10">{{ task.sp }}</td>
      </tr>
      </tbody>
      <tfoot class="border-t-2 border-t-gray-400">
      <tr>
        <td class="p-3">合計</td>
        <td class="p-3">{{ taskCount }} 課題</td>
        <td class="p-3 text-right pr-10">{{ totalSP }} SP</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped></style>