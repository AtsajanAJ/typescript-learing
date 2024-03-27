import readlineSync from 'readline-Sync'

// const Weight = 79
// const Height = 1.78

// console.log("bmi : ", BMI);
// console.log(`Weight = ${Weight} Height = ${Height} BMI : ${BMI}`);

const data = readlineSync.question('Whats your name?: ');
console.log(data);
const Weight = Number(readlineSync.question('Enter your weight: '));
const Height = Number(readlineSync.question('Enter your Height: '));
console.log(Weight);
console.log(Height);

const BMI = Weight / (Height * Height)
console.log("BMI : ", BMI);

if(BMI < 17){
    console.log('Thines');
}
else if(BMI <= 17 && BMI <= 25){
    console.log('normal');
}
else{
    console.log('overweight');
}