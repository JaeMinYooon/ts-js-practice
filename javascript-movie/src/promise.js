// resolvem reject
new Promise((resolve, reject) => {
  //...
});

// then, catch, finally
doSome()
  .then(() => {})
  .catch(() => {})
  .finally(() => {});

doFirst()
  .then((firstResult) => doSecond(firstResult))
  .then((secondResult) => doFinal(secondResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);

/*
  Promise는 다음 중 하나의 상태를 가진다.
    - 대기(pending): 이행하거나 거부되지 않은 초기 상태
    - 이행(fulfilled): 연산이 성공적으로 완료됨.
    - 거부(rejected): 연산이 실패함.
  */
export default class Promise {
  #value = null;
  #state = "pending";
  #child = null;
  #onFulfilledCallbacks = [];
  #onRejectedCallbacks = [];
  #onFinallyCallbacks = [];

  constructor(callback) {
    // this.state = "pending";
    // this.onFulFilledCallback = null;
    // this.onRejectedCallback = null;

    // const resolve = (value) => {
    //   if (this.state === "pending") {
    //     this.state = "fulfilled";
    //     this.value = value;
    //     if (this.onFulFilledCallback !== null) {
    //       this.onFulFilledCallback(value);
    //     }
    //   } else {
    //     this.child?.resolve(value);
    //   }
    // };
    // const reject = (value) => {
    //   if (this.state === "pending") {
    //     this.state = "rejected";
    //     this.value = value;
    //     if (this.onRejectedCallback !== null) {
    //       this.onRejectedCallback(value);
    //     }
    //   } else {
    //     this.child?.reject(value);
    //   }
    // };
    callback(this.#resolve, this.#reject);
  }

  #resolve = (value) => {
    if (this.#state === "pending") {
      this.#state = "fulfilled";
      this.#value = value;
      this.#onFinallyCallbacks.forEach((callback) => callback());
      if (this.#onFulfilledCallbacks.length !== 0) {
        this.#onFulfilledCallbacks.forEach((callback) => callback(value));
      } else {
        this.#child?.resolve(value);
      }
    }
  };
  #reject = (value) => {
    if (this.#state === "pending") {
      this.#state = "rejected";
      this.#value = value;
      this.#onFinallyCallbacks.forEach((callback) => callback());
      if (this.#onRejectedCallbacks.length !== 0) {
        this.#onRejectedCallbacks.forEach((callback) => callback(value));
      } else {
        this.#child?.reject(value);
      }
    }
  };

  then(callback) {
    this.#child = new Promise((resolve, reject) => {
      if (this.#state === "pending") {
        this.#onFulFilledCallback.push(() => {
          this.#handleCallback(callback, resolve, reject);
        });
      }
      if (this.#state === "fulfilled") {
        this.#handleCallback(callback, resolve, reject);
      }
      if (this.#state === "rejected") {
        reject(this.#value);
      }
    });
    return this.#child;
  }

  catch(callback) {
    this.#child = new Promise((resolve, reject) => {
      if (this.#state === "pending") {
        this.#onRejectedCallback.push(() => {
          this.#handleCallback(callback, resolve, reject);
        });
      }
      if (this.#state === "rejected") {
        this.#handleCallback(callback, resolve, reject);
      }
      if (this.#state === "fulfilled") {
        resolve(this.#value);
      }
    });
    return this.#child;
  }

  finally(callback) {
    this.#child = new Promise((resolve, reject) => {
      if (this.#state === "pending") {
        this.#onFinallyCallbacks.push(() => {
          this.#handleCallback(callback, resolve, reject);
        });
      }
      if (this.#state === "fulfilled" || this.#state === "rejected") {
        this.#handleCallback(callback, resolve, reject);
      }
    });
    return this.#child;
  }

  #handleCallback(callback, resolve, reject) {
    try {
      const result = callback(this.value);
      if (result instanceof Promise) {
        if (result.state === "fulfilled") {
          result.then(resolve);
        }
        if (result.state === "rejected") {
          result.catch(reject);
        }
        if (result.state === "pending") {
          result.onFulFilledCallback = () => result.then(resolve);
          result.onRejectedCallback = () => result.then(reject);
        }
      } else {
        resolve(result);
      }
    } catch (error) {
      reject(error);
    }
  }
}

function myFunc() {
  return new Promise((resolve) => {
    resolve("my resolve");
  });
}

myFunc().then((result) => console.log(result));

function myResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("my resolve"), 1000);
  });
}

function myReject() {
  return new Promise((resolve, reject) => {
    reject("my reject");
  });
}

myResolve()
  .then((result) => {
    return "next " + result;
  })
  .then((result) => {
    throw "error";
  })
  .catch((error) => console.error(error));

myReject()
  .then((result) => console.log(result))
  .catch((result) => console.log(result));

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("first"), 1000);
});

promise.then((result) => {
  console.log("1", result);
});
promise.then((result) => {
  console.log("2", result);
});

promise.then((result) => {
  console.log("3", result);
});
