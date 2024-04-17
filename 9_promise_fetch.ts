// set time(loop infinity)
// setInterval( () => {
//     console.log(++i)
// }, 2000)

// Promise
const zeroNumber = (x : number) => {
    return new Promise((resolve, reject) =>{
        const cid = setInterval( () => {
            console.log(++x)
            if (x === 8)
                // stop the process
                clearInterval(cid)
        }, 2000)
        if (x === 0)
            resolve(0);
        else
            reject(new Error('It is not a zero'));
    });
}
// arguments is function
// zeroNumber(0).then(
//     (x) => {
//         console.log(x);
//     }
// ).catch( (error) => console.log(error) );

const response = zeroNumber(0);
console.log('End process');

// async / await example
// async () => { await }
( async () => {
    const response = await zeroNumber(0);
    console.log('Res', response);
})();