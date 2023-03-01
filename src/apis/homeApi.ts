// Axios Instance
import axiosInstance from 'src/utils/axiosInstance'

/**
 * Func to get active projects list
 *
 * @param searchText Optional string
 * @returns Object[]
 */
const getProjects = async (params?: any) => {
    return await axiosInstance.post(`/projects?searchText=${params}`).then((res) => res.data)
}

const homeApi = {
    getProjects,
}

export default homeApi
