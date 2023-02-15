import { FC, ReactNode } from 'react'
// Router
import { Outlet } from 'react-router-dom'

interface BaseLayoutProps {
    children?: ReactNode
}

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <header>{children || <Outlet />}</header>
        </>
    )
}

export default BaseLayout
