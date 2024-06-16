<script setup lang="ts">
import InputForm from '@/components/input-form/InputForm.vue'
</script>

<template>
  <main>
    <InputForm />
  </main>
</template>

<style>
* {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
