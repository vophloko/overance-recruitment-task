import { describe, it, expect } from 'vitest'
import { useVowelCounter } from '@/composables/vowelCounter'

describe('useVowelcountVowelser', () => {
  it('correctly countVowelss vowels', () => {
    const { countVowels } = useVowelCounter()

    expect(countVowels.value('aeiou')).toBe(5)
    expect(countVowels.value('AEIOU')).toBe(5)
    expect(countVowels.value('AAEEIIOOUU')).toBe(10)
    expect(countVowels.value('12345')).toBe(0)
    expect(countVowels.value('qwertyuiop')).toBe(4)
    expect(countVowels.value('')).toBe(0)
    expect(countVowels.value('!@#$%')).toBe(0)
  })
})
