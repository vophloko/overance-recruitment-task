import { describe, it, expect } from 'vitest'
import { useSearch } from '@/composables/search'
import { nextTick, ref } from 'vue'

describe('useSearch', () => {
  it('correctly returns search results', async () => {
    const items = ref([
      {
        id: '0',
        value: 'abc'
      },
      {
        id: '1',
        value: 'ABC'
      }
    ])

    const { isAnyFound, results, phrase, isItemAmongFound } = useSearch({ items })

    phrase.value = ''
    await nextTick()
    expect(results.value.length).toBe(0)

    phrase.value = 'xyz'
    await nextTick()
    expect(results.value.length).toBe(0)
    expect(isAnyFound.value).toBe(false)

    phrase.value = 'abc'
    await nextTick()
    expect(results.value.length).toBe(1)
    expect(isAnyFound.value).toBe(true)

    phrase.value = 'ABC'
    await nextTick()
    expect(results.value.length).toBe(1)

    expect(isItemAmongFound.value('1')).toBe(true)
    expect(isItemAmongFound.value('0')).toBe(false)
  })
})
