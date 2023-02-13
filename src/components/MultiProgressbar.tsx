import { Stack } from '@mui/material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { FC } from 'react'

interface Colors {
    width: string
    color: string
}

interface MultiProgressbarPrpos {
    colorVariants: Colors[]
    label: string
}

const MultiProgressbar: FC<MultiProgressbarPrpos> = ({ colorVariants, label }) => {
    return (
        <Stack direction={'row'} alignItems={'center'} width={'100%'}>
            {colorVariants.map((item, i) => {
                return (
                    <Box
                        key={i}
                        sx={{
                            width: item.width,
                            height: 20,
                            background: item.color,
                            '&:first-of-type': {
                                borderTopLeftRadius: 10,
                                borderBottomLeftRadius: 10,
                            },
                            '&:last-of-type': {
                                borderTopRightRadius: 10,
                                borderBottomRightRadius: 10,
                            },
                        }}
                    ></Box>
                )
            })}
            <Typography variant="subtitle2" mx={2}>
                {label}
            </Typography>
        </Stack>
    )
}

export default MultiProgressbar
