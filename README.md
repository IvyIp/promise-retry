# Promise Retry
A function to help retry failed promise until it got resolved or maximum retry reached.
# Usage
```js
retryPromise(promise, retryIntervals).then((result) => {
    // success
}).catch((error) => {
    // failed
})
```
Param | Type | example
--- | --- | ---
promise | Function | function example() { return Promise.resolve() }
retryIntervals (in ms) | Array | [1000, 2000, 3000]
# Example
```js
function random() {
  const number = Math.random();
  if (number > 0.5) {
   return Promise.resolve(number)
  }
  return Promise.reject(number)
}

// retry three times with 1s interval
retryPromise(random, Array(3).fill(1000)).then((result) => {
  // success
}).catch((error) => {
    // failed
})
```
