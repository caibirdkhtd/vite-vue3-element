<template>
  <h1>{{ msg }}</h1>
  <el-button>Test</el-button>
  <el-date-picker
      v-model="dayRange"
      type="daterange"
      format="YYYY-MM-DD"
      value-format="YYYY-MM-DD"
      size="small">
  </el-date-picker>
  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<script setup>
import { defineProps, reactive, ref } from 'vue'

defineProps({
  msg: String
})
const dayRange = ref(['2021-01-01', '2021-09-01'])
const state = reactive({ count: 0 })
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
