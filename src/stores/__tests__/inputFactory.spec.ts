import { beforeEach, describe, it, expect } from 'vitest'
import { useInputFactory } from '@/stores/inputFactory'
import { setActivePinia, createPinia, storeToRefs } from 'pinia'

describe('useInputFactory', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('can add input', () => {
    const inputFactory = useInputFactory()
    const { inputs } = storeToRefs(inputFactory)

    inputFactory.add()
    expect(inputs.value.length).toBe(1)
  })

  it('has upper limit', () => {
    const inputFactory = useInputFactory()
    const { inputs, canAdd } = storeToRefs(inputFactory)

    expect(canAdd.value).toBe(true)
    Array.from({ length: 10 }).forEach(() => inputFactory.add())
    expect(canAdd.value).toBe(false)
    inputFactory.add()
    expect(inputs.value.length).toBe(10)
  })

  it('can remove input', () => {
    const inputFactory = useInputFactory()
    const { inputs } = storeToRefs(inputFactory)

    Array.from({ length: 10 }).forEach(() => inputFactory.add())
    expect(inputs.value.length).toBe(10)
    inputFactory.remove(inputs.value[0].id)
    expect(inputs.value.length).toBe(9)
  })

  it('has lower limit', () => {
    const inputFactory = useInputFactory()
    const { inputs, canRemove } = storeToRefs(inputFactory)

    Array.from({ length: 2 }).forEach(() => inputFactory.add())
    inputFactory.remove(inputs.value[0].id)
    expect(canRemove.value).toBe(false)
    inputFactory.remove(inputs.value[0].id)
    expect(inputs.value.length).toBe(1)
  })
})
