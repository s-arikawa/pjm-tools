<script lang="ts" setup>
import {computed, ref} from "#imports";

const backlog = ref([
  {id: "#1", title: "画面 A の設計", sp: 8},
  {id: "#2", title: "画面 A の実装", sp: 20},
  {id: "#3", title: "画面 A のテスト設計", sp: 12}
])

const totalSP = computed(() => backlog.value.reduce((sum, task) => sum + task.sp, 0))
const taskCount = computed(() => backlog.value.length)
</script>
<template>
  <div>
    <table>
      <thead>
      <tr>
        <th class="w-16">ID</th>
        <th class="w-96">Title</th>
        <th class="w-40">Story Point</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="task in backlog">
        <td class="ID">{{ task.id }}</td>
        <td>{{ task.title }}</td>
        <td class="Number">{{ task.sp }}</td>
      </tr>
      </tbody>
      <tfoot>
      <tr>
        <td>合計</td>
        <td>{{ taskCount }} 課題</td>
        <td class="Number">{{ totalSP }} SP</td>
      </tr>
      </tfoot>
    </table>
  </div>
</template>

<style scoped>
table {
  @apply table-auto border-collapse;
}

thead {
  @apply border-b-2 border-b-gray-400;
}

th {
  @apply px-3 py-5;
}

td {
  @apply p-3;
}

tfoot {
  @apply border-t-2 border-t-gray-400;
}

.ID {
  @apply text-center;
}

.Number {
  @apply text-right pr-10;
}

</style>