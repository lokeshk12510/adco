import axios from 'axios'
import constants from 'src/config/contants'

// Set logout status codes
const LOGOUT_STATUS = [401, 403, 419]

// Set config defaults when creating the instance
const axiosInstance = axios.create({
    baseURL: constants.BASE_URL,
    //withCredentials: true,
})

// Global config for every axios `requests`
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers['Access-Control-Expose-Headers'] = 'Content-Disposition'
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Global config for every axios `response`
axiosInstance.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        if (error.response && error.response.status) {
            const resStatus = error.response.status
            if (LOGOUT_STATUS.includes(resStatus)) {
                console.log('logged out!')
            }
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
