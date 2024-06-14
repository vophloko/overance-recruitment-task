<script setup lang="ts">
import { useVowelCounter } from '@/composables/vowelCounter'
import { useSearch } from '@/composables/search'
import { useInputFactory } from '@/stores/inputFactory'
import { storeToRefs } from 'pinia'
import { AButton, AForm, ATextInput, AVowelCounter } from '@/components'
import { onMounted } from 'vue'

const INITIAL_INPUT_FIELD_NUMBER = 3

const { count } = useVowelCounter()
const inputFactory = useInputFactory()
const { inputs, canAdd, canRemove } = storeToRefs(inputFactory)
const { phrase, isItemAmongFound, isAnyFound } = useSearch({ items: inputs })

onMounted(() => {
  Array.from({ length: INITIAL_INPUT_FIELD_NUMBER }).forEach(() => inputFactory.add())
})
</script>

<template>
  <main>
    <AForm.Root>
      <AForm.Item>
        <AForm.Label for="search">Search</AForm.Label>
        <ATextInput
          :class="{ 'active-search': isAnyFound }"
          v-model="phrase"
          name="search"
          id="search"
        />
      </AForm.Item>
      <AForm.Item
        v-for="input in inputs"
        :key="input.id"
        :removable="{
          disabled: !canRemove
        }"
        @remove="inputFactory.remove(input.id)"
      >
        <AForm.Label class="visually-hidden" :for="input.id">{{ input.label }}</AForm.Label>
        <AVowelCounter>{{ count(input.value) }}</AVowelCounter>
        <ATextInput
          :class="{ 'active-search': isItemAmongFound(input.id) }"
          ref="inputRefs"
          :name="`input_${input.id}`"
          :id="input.id"
          v-model="input.value"
        />
      </AForm.Item>
      <AForm.Item>
        <AButton :disabled="!canAdd" @click="inputFactory.add">Add new field</AButton>
      </AForm.Item>
    </AForm.Root>
  </main>
</template>

<style>
* {
  font-family:
    system-ui,
    -apple-system,
    sans-serif;
}

.active-search {
  background-color: hsl(120, 100%, 50%) !important;
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
