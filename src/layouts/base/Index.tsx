import { FC, ReactNode } from 'react'
// Router
import { Outlet } from 'react-router-dom'

// ------------ TYPES --------------

type BaseLayoutProps = {
    children?: ReactNode
}

// ------------ TYPES --------------

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <header>{children || <Outlet />}</header>
        </>
    )
}

export default BaseLayout
