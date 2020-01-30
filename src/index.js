const fetch = require("node-fetch")

export const mockPromise = (trigo) => new Promise((resolve, reject) => {
  if (trigo) {
    resolve('Promise is fullfilled')
  }
  reject('Promise is rejected')
})

export function sum(a, b) {
  return a + b
}

export function fetchData(callback) {
  mockPromise(true)
  .then(data => {
    callback(data)
  })
  .catch(error => {
    callback(error)
  })
}