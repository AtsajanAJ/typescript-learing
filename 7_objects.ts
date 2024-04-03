const person = {
    Name: 'AJ',
    Surname: 'Doe',
    age: 11,
}
console.log(person);
console.log(person.Name);

// Declaer type of person2
type personType = {
    Name: string;
    Surname: string;
    age: number;
}
let person2: personType;
person2 = {
    Name: 'aj',
    Surname: 'hw',
    age: 32
};

person.Name = 'jane'
// person = person2; // can not assign due to const
console.log(person.Name);

// assgin 2 objects in array
const persons = [person, person2]
console.log(persons);

// print persons using loop

// for(let i = 0; i < persons.length; i++){
//     console.log(persons[i].Name,persons[i].Surname,persons[i].age);
// }

for(let i=0; i< persons.length; i++){
    for(const [key, value] of Object.entries(person))
        console.log(key, value);
}

for (let item in persons){
    console.log(item, persons[item]);
}

type T = 'de' | 'dbiz' | 'Comp'

type StudentType = Record < T,
{
    name: string;
    age?: number;
}>

const students: StudentType = {
    de: {
        name: 'John Doe',
        age: 20
    },
    dbiz: {
        name: 'Tan Doe',
        age: 21
    },
    Comp: {
        name: 'Jane Doe',
        age: 22
    }
}
// focus data
console.log(students.Comp.age);
// change value
students.Comp.age = 17
students.Comp = {
    name: 'Aj',
    // age: 19
}
// console.log(students.Comp.age);
