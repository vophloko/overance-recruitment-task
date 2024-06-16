<script setup lang="ts">
import { useVowelCounter } from '@/composables/vowelCounter'

defineProps<{
  word: string
}>()

const { countVowels } = useVowelCounter()
</script>

<template>
  <span class="vowel-counter">{{ countVowels(word) }}</span>
</template>

<style scoped>
.vowel-counter {
  font-weight: bold;
  font-family: monospace;
  font-size: 1.25rem;
}
</style>
