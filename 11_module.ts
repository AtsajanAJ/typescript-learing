// RECAP

// import / export
// 1) variable(let, const), 2)function

//function
// -> function add() {}

//anonymous function
/* -> const sub = function() {}
   -> const z = 5
   -> const a = add
*/

// arrow function
/* -> const mul = () => {}
*/

// import * as jsonP from './modules/jsonplaceholder';
// import {x, add, sub, mul, div} from './modules/math'
// console.log(x);
// console.log('Add',add(10,9));
// console.log('Subs',sub(11,3));
// console.log('Multiply',mul(5,3));
// console.log('Divided',div(6,2));

/*
1).Promise (.then.await)
2). await do something()
3). await must be called inside async function
*/

// const main = async () =>{
//     const result = await jsonP.fetchJsonPlaceHolder()
//     console.log('result',result);

//     const result2 = await jsonP.fetchJsonAxios()
//     console.log('Result2',result2);
// }

// main()

import callbackFn from './modules/callback';

const handler = ((xxx: string)=>{
    console.log(xxx);
})

callbackFn(handler)