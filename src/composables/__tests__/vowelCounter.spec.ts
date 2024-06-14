import { describe, it, expect } from 'vitest'
import { useVowelCounter } from '@/composables/vowelCounter'

describe('useVowelCounter', () => {
  it('correctly counts vowels', () => {
    const { count } = useVowelCounter()

    expect(count.value('aeiou')).toBe(5)
    expect(count.value('AEIOU')).toBe(5)
    expect(count.value('AAEEIIOOUU')).toBe(10)
    expect(count.value('12345')).toBe(0)
    expect(count.value('qwertyuiop')).toBe(4)
    expect(count.value('')).toBe(0)
    expect(count.value('!@#$%')).toBe(0)
  })
})
