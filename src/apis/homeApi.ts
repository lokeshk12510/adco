// Axios Instance

import { AxiosResponse } from 'axios'
import axiosInstance from 'src/utils/axiosInstance'

const getProjects = async (payload?: AxiosResponse<any, any>) => {
    return await axiosInstance.post('/projects', payload).then((res) => res.data)
}

const homeApi = {
    getProjects,
}

export default homeApi
