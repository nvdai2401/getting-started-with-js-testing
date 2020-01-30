/**
 * These codes follow https://jestjs.io/docs/en/asynchronous
 */

import { fetchData, mockPromise } from '../index'

test('the data is an user array with 10 users', done => {
  function callback(data) {
    try {
      expect(data).toBe('Promise is fullfilled')
      done()
    } catch (error) {
      done(error)
    }
  }
  fetchData(callback)
})

test('the data is Promise is fullfilled', async () => {
  // return mockPromise(true).then(data => {
  //   expect(data).toBe('Promise is fullfilled')
  // })
  try {
    const data = await mockPromise(false)
    expect(data).toBe('Promise is fullfilled')
  } catch (error) {
    expect(error).toMatch('Promise is rejected')
  }
})

beforeEach(() => {
  console.log('beforeEach')
});

afterEach(() => {
  console.log('afterEach')
});

beforeAll(() => {
  console.log('beforeAll')
});

afterAll(() => {
  console.log('afterAll')
});