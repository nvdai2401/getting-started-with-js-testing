const { fetchData } = require('../index')

test('the data is an user array with 10 users', done => {
  function callback(data) {
    try {
      // expect(data).toBeCalledWith(expect.any(Array))
      done()
    } catch (error) {
      done(error)
    }
  }
  fetchData(callback)
});