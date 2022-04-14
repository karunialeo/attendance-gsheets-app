<template>
  <section class="w-full flex justify-center">
    <form
      @submit="submitForm"
      action=""
      class="md:w-[40%] w-[90%] space-y-10 border border-gray-400 rounded-lg p-10"
    >
      <div class="flex flex-col space-y-2">
        <label for="name">Name</label>
        <input
          required
          v-model="newAttendee"
          type="text"
          name="name"
          id="name"
          class="p-2 bg-gray-200 rounded outline-none border-none"
        />
      </div>

      <div class="text-center">
        <button
          class="text-white bg-green-500 active:bg-green-400 px-5 py-2 rounded"
        >
          Submit
        </button>
      </div>
    </form>
  </section>
</template>

<script setup>
import { computed, ref } from "vue";
import { useStore } from "vuex";

const store = useStore();

const openModal = computed(() => {
  return store.state.user.open;
});

const newAttendee = ref("");
function submitForm(e) {
  e.preventDefault();
  if (newAttendee.value.length < 3) {
    alert("Minimum 3 Character");
    return;
  }

  store.dispatch("setOpen", true);
  store.dispatch("setName", newAttendee.value);
  newAttendee.value = "";
}
</script>
