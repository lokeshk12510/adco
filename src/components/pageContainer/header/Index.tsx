import * as React from 'react'
// Mui
import { AppBar, Avatar, Box, IconButton, Menu, MenuItem, Toolbar, Typography, useScrollTrigger } from '@mui/material'
// Icons
import CloseIcon from '@mui/icons-material/Close'
import SortIcon from '@mui/icons-material/Sort'
// Images
import Images from 'src/config/images'
// Hooks
import useGlobalState from 'src/hooks/useGlobalState'

type HeaderProps = {
    render?: () => React.ReactNode
    title?: string
}

export default function Header({ render, title }: HeaderProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    // Sidebar open state
    const [isSidebarOpen] = useGlobalState('sidebar', false)

    const isMenuOpen = Boolean(anchorEl)
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    // MUi Scroll event hook
    const trigger = useScrollTrigger({
        threshold: 10,
        disableHysteresis: true,
    })

    const menuId = 'primary-search-account-menu'
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    )

    const [, setIsOpen] = useGlobalState('sidebar', false)

    return (
        <AppBar position="sticky" color="inherit" elevation={trigger ? 2 : 0}>
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                    }}
                >
                    <IconButton
                        edge="start"
                        color="neutral"
                        aria-label="open drawer"
                        sx={{
                            mx: 1,
                            '& .MuiSvgIcon-root': {
                                fontSize: '2rem',
                            },
                        }}
                        // onClick={handleSidebarToggle}
                        onClick={() => setIsOpen((t: boolean) => !t)}
                    >
                        {isSidebarOpen ? <CloseIcon /> : <SortIcon />}
                    </IconButton>
                    <Typography variant="h6" fontWeight={'bold'}>
                        {title}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '10px',
                    }}
                >
                    {render && <Box sx={{ display: { xs: 'none', md: 'block' } }}>{render()}</Box>}
                    <Avatar
                        alt="logo"
                        src={Images.ProfileImg}
                        aria-label="account of current user"
                        aria-controls={menuId}
                        aria-haspopup="true"
                        onClick={handleProfileMenuOpen}
                        sx={{ width: 36, height: 36 }}
                    />
                </Box>
            </Toolbar>
            {renderMenu}
        </AppBar>
    )
}
