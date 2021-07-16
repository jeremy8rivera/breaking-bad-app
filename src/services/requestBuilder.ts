import axios from 'axios'

const requestBuilder = axios.create({
    baseURL: "https://www.breakingbadapi.com/api",
    headers: {
        common: {
            'Content-Type': 'application/json'
        }
    }
})

export default requestBuilder