import { computed } from 'vue'

export const useVowelCounter = () => {
  const count = computed(() => (str: string) => (str.match(/[aeiou]/gi) || []).length)

  return { count }
}
