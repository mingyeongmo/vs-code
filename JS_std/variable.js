// JavaScript is very flexible
// flexible === dangerous
'use strict';

// 2. Variable , rw(read/write)
// let (added in ES6)

let globalName = 'global name';
{
    let name = 'rudah';
    console.log(name);
    name='hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (이제 쓰지 않음.)

// 3. Constant r(read only)
// 값 변경 불가능.
// immutable data type always
const daysInWeek =7;

// 4. Variable types
// primitive, single item : number, string, boolean, null, undefiedn, symbol
// function, first-class function

const count =17; // 정수
const size =17.1; // 소수

const infinity =1/0;
const negativeInfinity = -1/0;
const nAn = 'not a number'/2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// string
const char ='c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = 'hi ${brendan}!';
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: '+ helloBob + 'type: '+typeof helloBob);


// boolean
// false : 0, null, undefined, NaN, ''
// true : any other value

// null


// undefined

// symbol 고유함

// object, real-life object, data structure
const rudah = {name: 'rudah', age: 19 };
rudah.age = 18;

// 5. Dynamic typing: dynamically typed language
let text ='hello';
console.log(`value: ${text}, type: ${typeof text}`);
text=1;
console.log(`value: ${text}, type: ${typeof text}`);
text='7'+5;
console.log(`value: ${text}, type: ${typeof text}`);
text='8'/'2';
console.log(`value: ${text}, type: ${typeof text}`);