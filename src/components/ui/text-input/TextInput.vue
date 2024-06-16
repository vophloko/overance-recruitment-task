<script setup lang="ts">
const model = defineModel<string>()

defineProps<{
  searchActive?: boolean
}>()
</script>

<template>
  <input
    v-model="model"
    :class="{ '--search-active': searchActive }"
    class="text-input"
    type="text"
  />
</template>

<style scoped>
.text-input {
  all: unset;
  outline: 2px solid hsl(0, 0%, 20%);
  border-radius: 0.25rem;
  line-height: 1.25;
  padding: 0.25rem 0.5rem;
}

.--search-active {
  background-color: hsl(120, 100%, 50%);
}
</style>
