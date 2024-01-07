import { describe, expect, it } from 'vitest'
import { kitchenDates, months, roomies } from '../src/data/data'

describe('#1 - Returns an array', () => {
  it('Roomies return an array', () => {
    expect(
      Array.isArray(
        roomies()
      )
    ).toBe(true)
  })

  it('Months return an array', () => {
    expect(
      Array.isArray(
        months()
      )
    ).toBe(true)
  })

  it('Kitchen Dates return an array', () => {
    expect(
      Array.isArray(
        kitchenDates()
      )
    ).toBe(true)
  })
})
