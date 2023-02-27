// Axios Instance

import axiosInstance from 'src/utils/axiosInstance'

const getProjects = () => {
    return axiosInstance.post('/projects').then((res) => res.data)
}

const homeApi = {
    getProjects,
}

export default homeApi
