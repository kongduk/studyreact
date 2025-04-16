import React from 'react';

export default function PromiseTest() {
  const increase = (number) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {const result = number + 10;
            if(result > 50) {
                const e = new Error("50보다 큰 수 입니다");
                return reject(e);
            }
            resolve(result)
            ,1000})
    })
    return promise;
  }

  console.log("promise 실행");
    // increase 함수를 호출하여 Promise를 리턴하도록 작성하였습니다.
  increase(0)
    .then((number) => {
      console.log("결과:", number);
      return increase(number);
    })
    .then((number) => {
        console.log("결과:", number);
        return increase(number);
      })
      .then((number) => {
        console.log("결과:", number);
        return increase(number);
      })
      .then((number) => {
        console.log("결과:", number);
        return increase(number);
      })
      .then((number) => {
        console.log("결과:", number);
        return increase(number);
      })
      .catch((e) => {
        console.log(e);
      })
  return (
    <div>
      <h1>Promise 객체 Test</h1>
    </div>
  );
}
