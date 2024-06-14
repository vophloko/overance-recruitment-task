import { ref, computed, watch, type Ref } from 'vue'

type Searchable = {
  id: string
  value: string
}

export function useSearch<T extends Searchable>({ items }: { items: Ref<T[]> }) {
  const phrase = ref('')
  const results = ref<string[]>([])
  const isAnyFound = computed(() => !!results.value.length)
  const isItemAmongFound = computed(() => (id: string) => !!results.value.find((_id) => _id === id))

  watch(
    [phrase, items],
    ([newPhrase]) => {
      if (phrase.value.length === 0) {
        results.value = []
        return
      }

      results.value = items.value
        .filter((item) => item.value.includes(newPhrase))
        .map((item) => item.id)
    },
    {
      deep: true,
      immediate: true
    }
  )

  return {
    phrase,
    isAnyFound,
    isItemAmongFound,
    results
  }
}
