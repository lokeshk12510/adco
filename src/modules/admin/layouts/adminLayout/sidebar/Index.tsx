import { Drawer, styled } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { urls } from 'src/Router'
import { ActiveProjectIcon, OverviewIcon } from 'src/config/icons'
import Images from 'src/config/images'
import useResponsive from 'src/hooks/useResponsive'
import { SIDEBAR_MAX_WIDTH, SIDEBAR_MIN_WIDTH } from '../Index'

interface SidebarProps {
    isSidebarOpen: boolean
    handleSidebarToggle: () => void
}

interface StyleRootProps {
    isSidebarOpen: Boolean
}

const Sidebar: FC<SidebarProps> = ({ isSidebarOpen, handleSidebarToggle }) => {
    // State to sidebar position
    const [isPermanent, setPermanent] = useState(true)

    const location = useLocation()

    // Responsive check for above `md`
    const isMd = useResponsive('up', 'md')

    // Function to trigger when window width is changing
    function handleWindowWidthChange() {
        if (!isMd && isPermanent) {
            setPermanent(false)
        } else if (isMd && !isPermanent) {
            setPermanent(true)
        }
    }

    // Effect to trigger on resizing window
    useEffect(function () {
        window.addEventListener('resize', handleWindowWidthChange)
        handleWindowWidthChange()
        return function cleanup() {
            window.removeEventListener('resize', handleWindowWidthChange)
        }
    })

    const showOthersMenu = location.pathname.includes('/project')

    return (
        <Root isSidebarOpen={isSidebarOpen} variant={isPermanent ? 'permanent' : 'temporary'}>
            <>
                <LogoImg>
                    <img className="image" src={isSidebarOpen ? Images.MainLogo : Images.MiniLogo} alt="logo" />
                </LogoImg>
                <StyledListWrapper
                    isSidebarOpen={isSidebarOpen}
                    sx={{ width: '100%' }}
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Dashboard
                        </ListSubheader>
                    }
                >
                    <ListItemButton component={Link} to={urls.home} selected={location.pathname === urls.home && true}>
                        <ListItemIcon>
                            <ActiveProjectIcon />
                        </ListItemIcon>
                        <ListItemText primary="Active project" />
                    </ListItemButton>
                    {showOthersMenu && (
                        <>
                            <ListItemButton
                                component={Link}
                                to={urls.projectInfo}
                                selected={location.pathname === urls.projectInfo && true}
                            >
                                <ListItemIcon>
                                    <OverviewIcon />
                                </ListItemIcon>
                                <ListItemText primary="Overview" />
                            </ListItemButton>
                        </>
                    )}
                </StyledListWrapper>
            </>
        </Root>
    )
}

export default Sidebar

const Root = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<StyleRootProps>(({ theme, isSidebarOpen }) => ({
    '& .MuiPaper-root': {
        background: theme.palette.secondary.main,
        position: 'fixed',
        width: isSidebarOpen ? SIDEBAR_MAX_WIDTH : SIDEBAR_MIN_WIDTH,
        minHeight: '100vh',
        // width: 'inherit',
        borderRight: 'none',
        overflowY: 'auto',
        // position: 'unset',
        zIndex: 1200,
        [theme.breakpoints.up('md')]: {
            transition: theme.transitions.create('all', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.standard,
            }),
        },
    },
}))

const LogoImg = styled('div')(({ theme }) => ({
    padding: 10,
    marginInline: 'auto',
    marginBottom: 15,
    '& .image': {
        width: '100%',
        height: '100%',
        margin: 'auto',
    },
}))

const StyledListWrapper = styled(List, {
    shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<StyleRootProps>(({ theme, isSidebarOpen }) => ({
    paddingBlock: 0,
    backgroundColor: theme.palette.secondary.main,
    '& .MuiListSubheader-root': {
        background: theme.palette.secondary.main,
        color: theme.palette.common.white,
        textTransform: 'uppercase',
        display: isSidebarOpen ? 'block' : 'none',
    },
    '& .MuiListItemButton-root': {
        paddingBlock: theme.spacing(2),

        paddingInline: theme.spacing(3),
        justifyContent: isSidebarOpen ? 'flex-start' : 'center',
        minHeight: isSidebarOpen ? 'unset' : 60,
        '& .MuiListItemIcon-root,.MuiListItemText-root': {
            color: theme.palette.grey[500],
        },

        '&.Mui-selected': {
            fontWeight: '500',
            color: theme.palette.common.white,
            '& .MuiListItemIcon-root,.MuiListItemText-root': {
                color: theme.palette.common.white,
            },
        },
    },
    '& .MuiListItem-root': {
        flexDirection: isSidebarOpen ? 'row' : 'column',
    },
    '& .MuiListItemIcon-root': {
        minWidth: 38,
        justifyContent: isSidebarOpen ? 'flex-start' : 'center',
    },
    '& .MuiListItemText-root': {
        display: isSidebarOpen ? 'block' : 'none',
        whiteSpace: 'nowrap',
    },
}))
