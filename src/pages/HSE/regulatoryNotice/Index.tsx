// Mui
import { Grid, Typography } from '@mui/material'
// Styled Components
import { StyledBox } from 'src/theme/StyledComponents'
// Components
import NoticeTable from './NoticeTable'
import NoticeChart from './NoticeChart'
// data
import { data } from './data'

const RegulatoryNotice = () => {
    return (
        <StyledBox>
            <Typography variant="h6" fontWeight={'semi-bold'} mb={3}>
                Regulatory Notice
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <NoticeTable data={data} />
                </Grid>
                <Grid item xs={12} md={6}>
                    <NoticeChart />
                </Grid>
            </Grid>
        </StyledBox>
    )
}

export default RegulatoryNotice
