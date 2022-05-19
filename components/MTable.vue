<script lang="ts" setup>
import {Prop, PropType} from "@vue/runtime-core";
import {computed} from "#imports";

/**
 * 列の定義
 */
interface Column {
  // オブジェクトのキー
  key: string
  // 列の表示名
  name: string
}

const props = defineProps({
  // テーブルの列
  columns: Array as PropType<Column[]>,
  // 行の値
  values: Array as PropType<Object[]>,
})

const keys = computed(() => props.columns.map(it => it.key))
</script>

<template>
  <table class="table-auto border-collapse">
    <thead class="border-b-2 border-b-gray-400">
    <tr>
      <th v-for="column in columns" class="px-3 py-5">{{ column.name }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="val in values">
      <td v-for="key in keys" class="p-3">{{ val[key] }}</td>
    </tr>
    </tbody>
    <tfoot class="border-t-2 border-t-gray-400">
    <slot name="tfoot">
      <tr>
        <!-- Fallback Content -->
        <td :colspan="keys.length"/>
      </tr>
    </slot>
    </tfoot>
  </table>
</template>

<style scoped></style>
