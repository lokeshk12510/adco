import { ArrowDropDownOutlined, CalendarMonthRounded } from '@mui/icons-material'
import { InputAdornment } from '@mui/material'
import Grid from '@mui/material/Grid'
import InputField from 'src/components/Form/InputField'
import RichTextField from 'src/components/Form/RichTextField'
import Review from './Review'

const ProjectInfoForm = () => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        console.log(e)
    }

    return (
        <form>
            <Grid container columnSpacing={4}>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Project Name"
                        defaultValue={'Basis Grotesque Arabic Pro'}
                        placeholder="Enter project name"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField label="JobId" placeholder="Enter jobId" onChange={handleChange} />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField label="State" placeholder="Enter state" onChange={handleChange} />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Construction Sector"
                        placeholder="Enter construction sector"
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <ArrowDropDownOutlined />
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField label="Contract Type" placeholder="Enter contract type" onChange={handleChange} />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Report Date"
                        placeholder="Enter report date"
                        onChange={handleChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <CalendarMonthRounded />
                            </InputAdornment>
                        }
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField label="ECI/Tender" placeholder="Enter ECI/Tender" onChange={handleChange} />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Net or Gross Contract Programme"
                        placeholder="Enter net or gross contract programme"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Weather Allowance"
                        placeholder="Enter Weather Allowance"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Budget Contingency"
                        placeholder="Enter Budget Contingency"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField label="Site Commencement" placeholder="Enter Site Commenment" onChange={handleChange} />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField label="Target Margin" placeholder="Enter Target Margin" onChange={handleChange} />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Target Completion"
                        placeholder="Enter Target Completion"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Original Contract Sum"
                        placeholder="Enter Original Contract Sum"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Contract Award Date"
                        placeholder="Enter Contract Award Date"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Contract Completion Date"
                        placeholder="Enter Contract Completion Date"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Contract Duration"
                        placeholder="Enter Contract Duration"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <InputField
                        label="Practial Completion Achieved"
                        placeholder="Enter Practial Completion Achieved"
                        onChange={handleChange}
                    />
                </Grid>

                <Grid item xs={12} mb={5}>
                    <Review />
                </Grid>

                <Grid item xs={12}>
                    <RichTextField label="Reviewer Comments" />
                </Grid>
            </Grid>
        </form>
    )
}

export default ProjectInfoForm
