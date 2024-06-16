import { setActivePinia, createPinia, storeToRefs } from 'pinia'
import { beforeEach, describe, it, expect } from 'vitest'
import { useInputFactory } from '@/stores/inputFactory'

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
    const { inputs, isAddDisabled } = storeToRefs(inputFactory)

    expect(isAddDisabled.value).toBe(false)
    Array.from({ length: 10 }).forEach(() => inputFactory.add())
    expect(isAddDisabled.value).toBe(true)
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
    const { inputs, isRemoveDisabled } = storeToRefs(inputFactory)

    Array.from({ length: 2 }).forEach(() => inputFactory.add())
    inputFactory.remove(inputs.value[0].id)
    expect(isRemoveDisabled.value).toBe(true)
    inputFactory.remove(inputs.value[0].id)
    expect(inputs.value.length).toBe(1)
  })
})
