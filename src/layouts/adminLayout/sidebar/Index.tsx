import { FC, useEffect, useState } from 'react'
// Mui
import { Drawer, styled } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
// Router
import { Link, useLocation } from 'react-router-dom'
// Images
import Images from 'src/config/images'
// Hooks
import useResponsive from 'src/hooks/useResponsive'
// Config
import { SIDEBAR_MAX_WIDTH, SIDEBAR_MIN_WIDTH } from '../Index'
import { generateSidebarMenu, sidebarConfig } from './sidebar_config'

// -------------- TYPES ----------------------

type SidebarProps = {
    isSidebarOpen: boolean
    handleSidebarToggle?: () => void
}

type StyleRootProps = {
    open: Boolean
}

// -------------- TYPES ----------------------

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

    return (
        <Root
            open={isSidebarOpen}
            variant={isPermanent ? 'permanent' : 'temporary'}
            ModalProps={{
                keepMounted: false,
            }}
            onClose={handleSidebarToggle}
        >
            <>
                <LogoImg>
                    <img className="image" src={isSidebarOpen ? Images.MainLogo : Images.MiniLogo} alt="logo" />
                </LogoImg>
                <StyledListWrapper
                    open={isSidebarOpen}
                    sx={{ width: '100%' }}
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader">
                            Dashboard
                        </ListSubheader>
                    }
                >
                    {generateSidebarMenu(sidebarConfig, location).map((menu, i) => {
                        return (
                            <ListItemButton
                                key={menu.key}
                                component={Link}
                                to={menu.path}
                                selected={location.pathname === menu.path && true}
                            >
                                <ListItemIcon>{menu.icon}</ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItemButton>
                        )
                    })}
                </StyledListWrapper>
            </>
        </Root>
    )
}

export default Sidebar

// --------------- CUSTOM STYLES ----------------

const Root = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'isSidebarOpen',
})<StyleRootProps>(({ theme, open }) => ({
    '& .MuiPaper-root': {
        background: theme.palette.secondary.main,
        position: 'fixed',
        width: open ? SIDEBAR_MAX_WIDTH : SIDEBAR_MIN_WIDTH,
        boxShadow: theme.shadows[2],
        minHeight: '100vh',
        borderRight: 'none',
        overflowY: 'auto',
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
})<StyleRootProps>(({ theme, open }) => ({
    paddingBlock: 0,

    '& .MuiListSubheader-root': {
        background: 'transparent',
        color: theme.palette.common.white,
        textTransform: 'uppercase',
        display: open ? 'block' : 'none',
    },
    '& .MuiListItemButton-root': {
        paddingBlock: theme.spacing(3),
        paddingInline: theme.spacing(3),
        justifyContent: open ? 'flex-start' : 'center',
        minHeight: open ? 'unset' : 60,

        '& .MuiListItemIcon-root,.MuiListItemText-root': {
            color: theme.palette.grey[500],
        },
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },

        '&.Mui-selected': {
            fontWeight: '500',
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.common.white,
            '& .MuiListItemIcon-root,.MuiListItemText-root': {
                color: theme.palette.common.white,
            },
        },
    },
    '& .MuiListItem-root': {
        flexDirection: open ? 'row' : 'column',
    },
    '& .MuiListItemIcon-root': {
        minWidth: 38,
        justifyContent: open ? 'flex-start' : 'center',
        '& .MuiSvgIcon-root': {
            fontSize: open ? 20 : 28,
        },
    },
    '& .MuiListItemText-root': {
        display: open ? 'block' : 'none',
        whiteSpace: 'nowrap',
    },
}))
