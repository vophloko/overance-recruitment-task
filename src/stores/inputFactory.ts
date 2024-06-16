import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

const MIN_INPUT_FIELDS = 1
const MAX_INPUT_FIELDS = 10

type InputField = {
  id: string
  label: string
  value: string
}

export const useInputFactory = defineStore('inputFactory', () => {
  const incrementalId = ref(0)
  const inputs = ref<InputField[]>([])

  const isAddDisabled = computed(() => inputs.value.length >= MAX_INPUT_FIELDS)
  const add = () => {
    if (inputs.value.length >= MAX_INPUT_FIELDS) {
      return
    }
    inputs.value.push({
      id: incrementalId.value.toString(),
      label: `Input ${incrementalId.value}`,
      value: ''
    })
    incrementalId.value++
  }

  const isRemoveDisabled = computed(() => inputs.value.length <= MIN_INPUT_FIELDS)
  const remove = (id: string) => {
    if (inputs.value.length <= MIN_INPUT_FIELDS) {
      return
    }
    inputs.value = [...inputs.value.filter((item) => item.id !== id)]
  }

  return {
    inputs,
    add,
    isAddDisabled,
    remove,
    isRemoveDisabled
  }
})
