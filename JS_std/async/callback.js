'use strict';

//자바스크립트는 동기적이다.
// 코드가 작성한 순서에 맞춰 동기적으로 실행된다는 말
// hoisting: var, function declaration이 제일 위로 올라가는거
console.log('1');
setTimeout(() => console.log('2'), 1000);
console.log('3');


// 즉각적으로 동기적으로 실행하는 Synchronous callback
function printImmediately(print) {
    print();
}
// 함수선언이 제일 위로 올라감(hoisting)

printImmediately(()=> console.log('hello'));



// 나중에 언제 실행될지 예측할 수 없는 Asynchronous callback

function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
// 함수 선언이 제일 위로 올라감(hoisting)

printWithDelay(() => console.log('async callback'), 2000);