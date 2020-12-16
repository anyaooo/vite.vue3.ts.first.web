import axios from 'axios'

const instance = axios.create({
    timeout: 1000,
    headers: {}
})

instance.interceptors.request.use(config => {
    return config
}, err => {
    return Promise.reject(err)
})

instance.interceptors.response.use(response => {
    if (response.data.status !== '00') {
        return Promise.reject(response.data)
    } else if (response.data.state && response.data.state !== '00') {
        return Promise.reject(response.data)
    }
    return response.data
}, err => {
    return Promise.reject(err)
})

export default instance




