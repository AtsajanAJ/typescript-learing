import axios from "axios"

export const fetchJsonPlaceHolder = async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    return await result.json()
}

export const fetchJsonAxios = async() => {
    const result = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    return result.data
}