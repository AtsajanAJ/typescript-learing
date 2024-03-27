// const weights = [10, 20, 30, 40, 50]
// console.log(weights);
// console.log(weights[0]);
// console.log(weights[1]);

// // why we can change value (const) because const is only big group so we can change inside group
// weights[0] = 5
// console.log(weights[0]);

// push element to inside array
// console.log('Before Push: ', weights);
// weights.push(-9)
// console.log('After push: ', weights);

// Merge
const arr1 = [1,2,3]
const arr2 = [4,5,6]
const arr3 = []
// space Operator
const arr4 = [...arr1, ...arr2]
console.log(arr4);

// for (let i = 0; i < arr1.length; i++){
//     arr3.push(arr1[i]);
// }
// for (let i = 0; i < arr1.length; i++){
//     arr3.push(arr2[i]);
// }
// console.log(arr3);

// Map (es6)
// const arr5 = []
// for(let i = 0; i < arr1.length; i++){
//     arr5.push(arr1[i] * arr1[i])
// }
// console.log(arr5);

const arr5 = arr1.map((item) => item * item)
console.log(arr5);