import axios from 'axios'

// const particionesAPI = axios.get({
//     baseURL: 'http://127.0.0.1:8000',
//     headers: {
//         'Access-Control-Allow-Origin': '*',
//     }
// })

// export const getParticiones = () =>{
//     const res = particionesAPI('/home')
//     print(res.data)
//     return res.data
// }

const particionesAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

export const getParticiones = async() =>{
    const res = await particionesAPI.get('/home')
    return res.data
}