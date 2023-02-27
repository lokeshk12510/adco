import axios from 'axios'
import constants from 'src/config/contants'

const UNAUTHORIZED = 401
const FORBIDDEN = 403
const CSRF_TOKEN_MISMATCH = 419

// Set config defaults when creating the instance
const axiosInstance = axios.create({
    baseURL: constants.BASE_URL,
    //withCredentials: true,
})

axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Expose-Headers'] = 'Content-Disposition'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status) {
            const resStatus = error.response.status
            if (resStatus === UNAUTHORIZED || resStatus === FORBIDDEN || resStatus === CSRF_TOKEN_MISMATCH) {
                console.log('logged out!')
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
