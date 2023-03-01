import { Button, Divider, Stack, Typography } from '@mui/material'
import React from 'react'
import { StyledBox } from 'src/theme/StyledComponents'
import InputField from 'src/components/Form/InputField'

const ContentWidget = () => {
    return (
        <StyledBox
            sx={{ minHeight: '70vh', display: 'flex', justifyContent: 'space-between', flexDirection: 'column' }}
        >
            <Stack spacing={3}>
                <Stack spacing={2} direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'} rowGap={3}>
                    <div>
                        <Typography variant="subtitle2" fontWeight={'bold'} mb={1}>
                            Monthly Mains Electricity Use - Main Switchboard
                        </Typography>
                        <Typography>This is reported with a meter reading from the main switchboard</Typography>
                    </div>
                    <div>
                        {/* <Box sx={(theme) => ({ background: theme.palette.grey[100], p: 4 })} mb={1}></Box> */}
                        <InputField sx={{ width: 150 }} showHelperText={false} />
                        <Typography variant="subtitle2" fontWeight={'bold'} align="center">
                            Kilowatt Hours
                        </Typography>
                    </div>
                </Stack>

                <Divider flexItem />

                <Stack spacing={2} direction={'row'} justifyContent={'space-between'} flexWrap={'wrap'} rowGap={3}>
                    <div>
                        <Typography variant="subtitle2" fontWeight={'bold'} mb={1}>
                            Monthly Mains Electricity Use - Main Switchboard
                        </Typography>
                        <Typography>This is reported with a meter reading from the main switchboard</Typography>
                    </div>
                    <div>
                        <InputField sx={{ width: 150 }} showHelperText={false} />
                        <Typography variant="subtitle2" fontWeight={'bold'} align="center">
                            Kilowatt Hours
                        </Typography>
                    </div>
                </Stack>
            </Stack>

            <Stack direction={'row'} justifyContent={'flex-end'} spacing={2}>
                <Button variant="contained" color="neutral">
                    Cancel
                </Button>
                <Button variant="contained" color="primary">
                    Save
                </Button>
            </Stack>
        </StyledBox>
    )
}

export default ContentWidget
