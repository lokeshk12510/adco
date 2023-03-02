// Router
import { Navigate, useRoutes } from 'react-router-dom'
// Layouts
import AdminLayout from 'src/layouts/adminLayout/Index'
// Pages
import HSE from 'src/pages/HSE/Index'
import Home from 'src/pages/home/Index'
import ProjectInfo from 'src/pages/projectInfo/Index'
import Error from 'src/pages/status/Error'
import TrafficLight from 'src/pages/trafficLight/Index'
import Programme from 'src/pages/programme/Index'
import General from 'src/pages/general/Index'
// urls
import { urls } from './urls'
import Financials from 'src/pages/financials/Index'

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
                    path: 'projectInfo',
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
                        {
                            path: urls.financials,
                            element: <Financials />,
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
