<template>
  <div class="flex flex-col items-center pt-10 space-y-7">
    <img class="w-28" alt="Vue logo" src="../assets/logo.png" />

    <h2 class="text-2xl font-bold">Attendance Form</h2>

    <Form />
    <WelcomeModal />
  </div>
</template>

<script setup>
import WelcomeModal from "../components/WelcomeModal.vue";
import Form from "../components/Form.vue";
</script>

<style></style>
