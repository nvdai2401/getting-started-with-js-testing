/*
  These codes follow https://jestjs.io/docs/en/using-matchers
*/

import { sum } from '../index'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('object assignment', () => {
  const data = { one: 1 }
  data['two'] = 2
  expect(data).toEqual({ one: 1, two: 2})
})

test('adding positive numbers to not zero', () => {
  for(let i = 1; i < 10; i++) {
    for(let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0)
    }
  }
})

// Truthiness
test('variable assignment', () => {
  const foo = null
  expect(foo).toBeNull()
  expect(foo).toBeDefined()
  expect(foo).toBeFalsy()
})

// Numbers
test('numbers testings', () => {
  const value = 3 + 3
  expect(value).toBeGreaterThan(4)
  expect(value).toBeGreaterThanOrEqual(6)
  expect(value).toBeLessThan(60)
  expect(value).toBeLessThanOrEqual(6)
  expect(value).toBe(6)
  expect(value).toEqual(6)
})

// Strings
test('there is no I in team', () => {
  expect('Iteam').not.toMatch(/T/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// Arrays and iterables
test('the shopping list has beer on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'beer',
  ];
  expect(shoppingList).toContain('beer')
})

// Exceptions
function complieAndroidCode() {
  throw new Error('You are using the wrong SDK')
}

test('compling android goes as expected', () => {
  expect(complieAndroidCode).toThrow()
  expect(complieAndroidCode).toThrow(Error)
  expect(complieAndroidCode).toThrow(Error('You are using the wrong SDK'))
})
