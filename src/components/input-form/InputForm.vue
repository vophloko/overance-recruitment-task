<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { AButton, AForm, ATextInput, AVowelCounter } from '@/components/ui'
import { useSearch } from '@/composables/search'
import { useInputFactory } from '@/stores/inputFactory'

const INITIAL_INPUT_FIELD_QUANTITY = 3

const inputFactory = useInputFactory()
const { inputs, isAddDisabled, isRemoveDisabled } = storeToRefs(inputFactory)
const { phrase, isItemAmongFound, isAnyFound } = useSearch({ items: inputs })

onMounted(() => {
  Array.from({ length: INITIAL_INPUT_FIELD_QUANTITY }).forEach(() => inputFactory.add())
})
</script>

<template>
  <AForm.Root>
    <AForm.Item>
      <AForm.Label for="search"> Search </AForm.Label>
      <ATextInput id="search" v-model="phrase" :search-active="isAnyFound" name="search" />
    </AForm.Item>
    <AForm.Item
      v-for="input in inputs"
      :key="input.id"
      :removable="{
        disabled: isRemoveDisabled
      }"
      @remove="inputFactory.remove(input.id)"
    >
      <AForm.Label class="visually-hidden" :for="input.id">
        {{ input.label }}
      </AForm.Label>
      <AVowelCounter :word="input.value" />
      <ATextInput
        :id="input.id"
        v-model="input.value"
        :search-active="isItemAmongFound(input.id)"
      />
    </AForm.Item>
    <AForm.Item>
      <AButton :disabled="isAddDisabled" @click="inputFactory.add">Add new field</AButton>
    </AForm.Item>
  </AForm.Root>
</template>
