'use strict';

// 프로미스는 자바스크립트 내장 오브젝트이며,
//비동기적인것을 수행할때 콜백함수 대신 유용하게 쓸 수 있음.
// State: pending -> fulfilled or rejected
// Producer(원하는 기능을 수행해서 해당하는 데이터를 만들어내는) vs Consumer(원하는 데이터를 소비하는)

// 1. Producer

// 새로운 프로미스가 만들어질때는, 우리가 전달한 executor 라는 함수가 바로 실행됨.
const promise = new Promise((resolve, reject) => {
    // doing some heavy work (network, read files)
    console.log('doing something...');
    setTimeout(() => {
        resolve('ellie');
        //reject(new Error('no network'))
    }, 2000)
});

// 2. Consumers: then, catch, finally
promise
.then((value) => {
    console.log(value);
})
.catch(error => {
    console.log(error);
})
.finally(() => {
    console.log('finally')
});

// 3. Promise chaning
const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(()=> resolve(1),1000);
});

fetchNumber
.then(num => num *2)
.then(num => num *3)
.then(num => {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(num-1),1000);
    });
})
.then(num => console.log(num));

// 4. Error Handling

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('🐓'), 1000);
    });

const getEgg = hen =>
    new Promise((resolve,reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
    });

const cook = egg =>
    new Promise((resolve,reject) => {
        setTimeout(() => resolve(`${egg} => 🍳`), 1000);
    });

getHen()
    .then(getEgg)
    .catch(error => {
        return '🥖';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);