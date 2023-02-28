// Router
import { Navigate, useRoutes } from 'react-router-dom'
// Layouts
import AdminLayout from 'src/modules/admin/layouts/adminLayout/Index'
// Pages
import HSE from 'src/modules/admin/pages/HSE/Index'
import Home from 'src/modules/admin/pages/home/Index'
import ProjectInfo from 'src/modules/admin/pages/projectInfo/Index'
import Error from 'src/modules/admin/pages/status/Error'
import TrafficLight from 'src/modules/admin/pages/trafficLight/Index'
import Programme from 'src/modules/admin/pages/programme/Index'
import General from 'src/modules/admin/pages/general/Index'
// urls
import { urls } from './urls'

const Routes = () => {
    return useRoutes([
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
                        {
                            path: urls.hse,
                            element: <HSE />,
                        },
                        {
                            path: urls.programme,
                            element: <Programme />,
                        },
                        {
                            path: urls.general,
                            element: <General />,
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
    ])
}

export default Routes
