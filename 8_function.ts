areaTriangle(8, 4) // hoist

// traditional function
function areaTriangle(side: number, height: 4 | 5){
    let area = 0.5*side*height
    console.log(`area = ${area}`);
}

// anonymous function
const areaTriangle2 = function(side: number, height: 4 | 5){
    let area = 0.5*side*height
    console.log(`area2 = ${area}`);
}

// arrow function
const areaTriangle3 = (side: number, height: 4 | 5)=>{
    let area = 0.5*side*height
    console.log(`area3 = ${area}`);
}

areaTriangle2(8, 4)
areaTriangle3(8, 4)

const foo = {
    name: 'AJ',
    area: areaTriangle3,
}

foo.area(3,4);


const products = [
    {id:55, name: 'food', price: 23},
    {id:13, name: 'food', price: 23},
    {id:32, name: 'food', price: 23},
    {id:23, name: 'food', price: 23},
    {id:5, name: 'food', price: 23},
]

// for (let key in products)
//     console.log(products[key]);

//     products.map((item) => console.log(item))

// === adding item in product array
// products.push({id:6, name: 'food', price: 53})
// products.map( (item) => console.log(item))

// adding item with spread operator
const newProduct = [ ...products, {id: 6, name: 'food', price: 5}]
// newProduct.map( (item) => console.log(item))

// Delete product id 55
const newProduct2 = products.filter( (item) => (item.id !== 55))
// non { } there is only one command 
newProduct2.map( (item) => console.log(item))