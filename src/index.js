const fetch = require("node-fetch")

export const mockPromise = (trigo) => new Promise((resolve, reject) => {
  if (trigo) {
    setTimeout(() => {
      resolve('Promise is fullfilled')
    }, 1000)
  }
  // reject('Promise is rejected')
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