export const retryPromise = (promise, retryIntervals, index = 0) => {
  return new Promise((resolve, reject) => {
    return promise().then((result) => {
      resolve(result)
    }).catch((error) => {
      console.warn(error);
      if (index === retryIntervals.length) {
        reject(`Max retry reached. ${error}`);
        return;
      }
      const timeout = retryIntervals[index];
      setTimeout(() => {
        resolve(retryPromise(promise, retryIntervals, index + 1))
      }, timeout)
    })
  })
}
