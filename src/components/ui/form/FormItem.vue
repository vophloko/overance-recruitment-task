<script setup lang="ts">
defineProps<{
  removable?: {
    disabled?: boolean
  }
}>()

const emit = defineEmits<{
  remove: []
}>()
</script>

<template>
  <div class="form-item">
    <slot />
    <button
      v-if="removable"
      class="remove-button"
      :disabled="removable.disabled"
      type="button"
      @click="emit('remove')"
    >
      ✕
    </button>
  </div>
</template>

<style scoped>
.form-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.remove-button {
  border: unset;
  margin: 0;
  padding: 1.125em;
  aspect-ratio: 1;
  background-color: hsl(0, 100%, 50%);
  border-radius: 9999px;
  width: 1.25em;
  font-weight: bold;
  height: 1.25em;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  line-height: 1.5em;
  vertical-align: middle;
  transition: background-color 150ms ease-in-out;

  &:hover {
    background-color: hsl(0, 100%, 25%);
  }

  &:disabled {
    background-color: hsl(0, 100%, 80%);
    cursor: default;
  }
}
</style>
