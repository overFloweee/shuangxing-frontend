<script setup lang="ts">
import BasicLayout from "./layouts/BasicLayout.vue";
// 在App.vue中
import {provide, nextTick, ref} from 'vue'

const isRouterActive = ref(true)
provide('reload', () => {
  isRouterActive.value = false
  nextTick(() => {
    isRouterActive.value = true
  })
})
</script>

<template>
  <BasicLayout/>
</template>

<style>

</style>
