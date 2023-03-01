import { urls } from 'src/routes/urls'
import { OverviewIcon, ActiveProjectIcon, HSEIcon, ProgrammeIcon, GeneralIcon } from '../../../config/icons'
import { Location } from 'react-router-dom'

type menuObj = {
    path: string
    label: string
    icon: React.ReactElement
    visible: boolean
    key: string
    showIn: ['projectInfo' | 'all']
}

export const sidebarConfig: menuObj[] = [
    {
        path: urls.home,
        label: 'Active project',
        icon: <ActiveProjectIcon />,
        visible: true,
        key: 'active_project',
        showIn: ['all'],
    },
    {
        path: urls.projectInfo,
        label: 'Overview',
        icon: <OverviewIcon />,
        visible: true,
        key: 'overview',
        showIn: ['projectInfo'],
    },
    {
        path: urls.hse,
        label: 'HSE',
        icon: <HSEIcon />,
        visible: true,
        key: 'hse',
        showIn: ['projectInfo'],
    },
    {
        path: urls.programme,
        label: 'Programme',
        icon: <ProgrammeIcon />,
        visible: true,
        key: 'programme',
        showIn: ['projectInfo'],
    },
    {
        path: urls.general,
        label: 'General',
        icon: <GeneralIcon />,
        visible: true,
        key: 'general',
        showIn: ['projectInfo'],
    },
]

export const generateSidebarMenu = (menuList: menuObj[], location: Location): menuObj[] => {
    if (location.pathname === urls.home) {
        return menuList.filter((item) => item.path === urls.home)
    }

    return menuList.filter((item) => item.visible)
}
