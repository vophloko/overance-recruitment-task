<script setup lang="ts">
import { ref } from 'vue'

const inputRef = ref<HTMLInputElement | null>(null)

const model = defineModel<string>()

defineExpose({
  inputRef
})
</script>

<template>
  <input v-model="model" ref="inputRef" class="text-input" type="text" />
</template>

<style scoped>
.text-input {
  all: unset;
  outline: 2px solid hsl(0, 0%, 20%);
  border-radius: 0.25rem;
  line-height: 1.25;
  padding: 0.25rem 0.5rem;
}
</style>
