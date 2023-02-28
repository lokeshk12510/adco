import { FC, ReactNode, useCallback } from 'react'
// Mui
import { styled } from '@mui/material'
// Router
import { Outlet } from 'react-router-dom'
// Components
import Footer from './footer/Index'
import Sidebar from './sidebar/Index'
import useGlobalState from 'src/hooks/useGlobalState'

// Layout Config
export const SIDEBAR_MAX_WIDTH = 260
export const SIDEBAR_MIN_WIDTH = 120

interface AdminLayoutProps {
    children?: ReactNode
}

interface BodyContainerProps {
    isSidebarOpen: Boolean
}

const AdminLayout: FC<AdminLayoutProps> = () => {
    // Sidebar open state
    const [isOpen, setIsOpen] = useGlobalState('sidebar', false)

    // Sidebar Open state handler
    const handleSidebarToggle = useCallback(() => {
        setIsOpen((p: boolean) => !p)
    }, [setIsOpen])

    console.log(isOpen)

    return (
        <Root>
            <Sidebar isSidebarOpen={isOpen} handleSidebarToggle={handleSidebarToggle} />
            <BodyContainer isSidebarOpen={isOpen}>
                <Outlet />
                <Footer />
            </BodyContainer>
        </Root>
    )
}

export default AdminLayout

const Root = styled('main')(({ theme }) => ({
    position: 'relative',
    // display: "flex",
    height: '100vh',
    // minHeight: '100vh',
}))

const BodyContainer = styled('section')<BodyContainerProps>(({ theme, isSidebarOpen }) => ({
    position: 'relative',
    flexGrow: 1,
    minHeight: '100%',
    padding: 0,

    [theme.breakpoints.up('md')]: {
        marginLeft: `${isSidebarOpen ? SIDEBAR_MAX_WIDTH : SIDEBAR_MIN_WIDTH}px`,
    },
    [theme.breakpoints.down('md')]: {
        marginLeft: 0,
    },
    ...(isSidebarOpen
        ? {
              transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.standard,
              }),
          }
        : {
              transition: theme.transitions.create('margin', {
                  easing: theme.transitions.easing.sharp,
                  duration: theme.transitions.duration.standard,
              }),
          }),
    paddingBottom: 50,
}))
