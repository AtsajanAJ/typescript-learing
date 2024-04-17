/*
handler = () => {
    console.log('Test')
}
*/

const callbackFn = (handler: (str: string) => void) => {
    const secret = 'I love you'

    handler(secret)
    // return secret
}

export default callbackFn