const fetch = require("node-fetch")

const obj = {}

function sum(a, b) {
  return a + b
}

function fetchData(callback) {
  fetch('https://5e324d5ab92d240014ea5171.mockapi.io/michael/v1/user')
  .then(res => res.json())
  .then(data => {
    callback(data)
  })
  .catch(err => {
    callback(err)
  })
}

module.exports = {
  sum,
  fetchData
}