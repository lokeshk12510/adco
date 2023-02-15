import * as React from 'react'
// Mui
import {
    AppBar,
    Avatar,
    Box,
    IconButton,
    InputAdornment,
    Menu,
    MenuItem,
    TextField,
    Toolbar,
    Typography,
    useScrollTrigger,
} from '@mui/material'
// Icons
import { Search } from '@mui/icons-material'
import CloseIcon from '@mui/icons-material/Close'
import SortIcon from '@mui/icons-material/Sort'
// Router
import { useLocation } from 'react-router-dom'
// Images
import Images from 'src/config/images'

interface HeaderProps {
    isSidebarOpen: boolean
    handleSidebarToggle: () => void
}

// Func to render header based on current route
const renderHeaderContent = (page: string) => {
    if (page === '/') {
        return 'Active PCR Projects'
    } else if (page.includes('/project')) {
        return 'Robina Office Building'
    } else {
        return ''
    }
}

export default function Header({ isSidebarOpen, handleSidebarToggle }: HeaderProps) {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

    const isMenuOpen = Boolean(anchorEl)
    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
        setAnchorEl(null)
    }

    const location = useLocation()

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
                        onClick={handleSidebarToggle}
                    >
                        {isSidebarOpen ? <CloseIcon /> : <SortIcon />}
                    </IconButton>
                    <Typography variant="h6" fontWeight={'bold'}>
                        {renderHeaderContent(location.pathname)}
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                    }}
                >
                    <TextField
                        fullWidth
                        placeholder="Search project"
                        size="small"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <Search />
                                </InputAdornment>
                            ),
                        }}
                        sx={{
                            display: { sm: 'none', md: 'block' },
                            minWidth: { md: '200px', lg: '350px' },
                            '& .MuiOutlinedInput-root': {
                                borderRadius: '20px',
                            },
                        }}
                    />

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
