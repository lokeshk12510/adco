// Axios Instance
import axiosInstance from 'src/utils/axiosInstance'

const getProjects = async (params?: any) => {
    console.log(params)
    return await axiosInstance.post(`/projects?searchText=${params}`).then((res) => res.data)
}

const homeApi = {
    getProjects,
}

export default homeApi
