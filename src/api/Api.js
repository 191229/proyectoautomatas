import axios from 'axios'


const particionesAPI = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
})

export const getParticiones = async() =>{
    const res = await particionesAPI.get('/conjunto')
    return res.data
}