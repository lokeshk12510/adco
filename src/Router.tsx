// Router
import { RouteObject } from 'react-router'
import { Navigate } from 'react-router-dom'
// Layouts
import AdminLayout from './modules/admin/layouts/adminLayout/Index'
// Pages
import Home from './modules/admin/pages/home/Index'
import ProjectInfo from './modules/admin/pages/projectInfo/Index'
import Error from './modules/admin/pages/status/Error'
import TrafficLight from './modules/admin/pages/trafficLight/Index'

// Urls config
export const urls = {
    home: '/',
    trafficLight: '/traffic-light',
    projectInfo: '/project/edit-information',
    404: '/404',
}

// Router config
const routes: RouteObject[] = [
    {
        path: '',
        element: <AdminLayout />,
        children: [
            {
                path: urls.home,
                element: <Home />,
            },
            {
                path: urls.trafficLight,
                element: <TrafficLight />,
            },
            {
                path: 'project',
                children: [
                    {
                        path: '',
                        element: <Navigate to="404" replace />,
                    },
                    {
                        path: urls.projectInfo,
                        element: <ProjectInfo />,
                    },
                ],
            },
            {
                path: urls[404],
                element: <Error />,
            },
            {
                path: '*',
                element: <Error />,
            },
        ],
    },
]

export default routes
