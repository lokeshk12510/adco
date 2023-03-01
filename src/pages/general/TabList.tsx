import React from 'react'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import { ElectricityIcon, FuelIcon, GasIcon, WaterIcon, RefrigerantIcon, WasteIcon } from 'src/config/icons'
import { styled } from '@mui/material'
import { useState } from 'react'

const TabList = () => {
    const [selectedTab, setSelectedTab] = useState(1)

    const handleSelectTab = (tabIndex: number) => {
        setSelectedTab(tabIndex)
    }

    return (
        <Root>
            {list.map((item, i) => {
                return (
                    <ListItem
                        disablePadding
                        key={i}
                        sx={{ my: 4 }}
                        selected={selectedTab === i + 1}
                        onClick={() => handleSelectTab(i + 1)}
                    >
                        <ListItemButton sx={{ paddingInline: { xs: 1, md: 2 } }}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItemButton>
                    </ListItem>
                )
            })}
        </Root>
    )
}

export default TabList

const Root = styled(List)(({ theme }) => ({
    position: 'relative',
    '&::before': {
        content: `''`,
        height: '80%',
        // background: theme.palette.grey[400],
        position: 'absolute',
        top: 50,
        left: 25,
        border: `1px dashed ${theme.palette.grey[400]}`,
    },
    '& .MuiListItem-root': {
        '&.Mui-selected': {
            '& .MuiListItemText-root span': {
                fontWeight: 'bold',
            },
        },
        '&:first-of-type': {
            marginTop: 0,
        },
        '&:last-of-type': {
            marginBottom: 0,
        },
    },
}))

const list = [
    {
        title: 'Electricity',
        icon: <ElectricityIcon fontSize="large" />,
    },
    {
        title: 'Fuel',
        icon: <FuelIcon fontSize="large" />,
    },
    {
        title: 'Gas',
        icon: <GasIcon fontSize="large" />,
    },
    {
        title: 'Water',
        icon: <WaterIcon fontSize="large" />,
    },
    {
        title: 'Refrigerants',
        icon: <RefrigerantIcon fontSize="large" />,
    },
    {
        title: 'Waste',
        icon: <WasteIcon fontSize="large" />,
    },
]
