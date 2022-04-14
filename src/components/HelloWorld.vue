<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="flex items-center flex-col">
    <h1>{{ msg }}</h1>

    <button
      type="button"
      @click="count++"
      class="py-2 px-4 active:bg-green-400 bg-green-500 text-white rounded"
    >
      count is: {{ count }}
    </button>
  </div>
</template>

<style scoped></style>
