import { computed } from 'vue'

export const useVowelCounter = () => {
  const countVowels = computed(() => (str: string) => (str.match(/[aeiou]/gi) || []).length)

  return { countVowels }
}
