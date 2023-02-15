// Mui
import Grid from '@mui/material/Grid'
// RHF
import { Controller } from 'react-hook-form'
// Components
import AutoComplete from 'src/components/Form/AutoComplete'
import DateField from 'src/components/Form/DateField'
import ImageUploader from 'src/components/Form/ImageUploadField'
import InputField from 'src/components/Form/InputField'
import Review from './Review'

const ProjectInfoForm = () => {
    return (
        <form>
            <Grid container columnSpacing={4} rowSpacing={1}>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        name="projectImage"
                        render={({ field: { onChange, value }, fieldState: { error } }) => {
                            return (
                                <ImageUploader
                                    label="Project Image"
                                    value={value}
                                    onChange={onChange}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="projectName"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Project Name"
                                    value={value}
                                    placeholder="Enter project name"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>

                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="jobId"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="JobId"
                                    value={value}
                                    placeholder="Enter jobId"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="state"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <AutoComplete
                                    label="State"
                                    options={[
                                        { value: '1', title: 'State 1' },
                                        { value: '2', title: 'State 2' },
                                    ]}
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Select State"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="construction_sector"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <AutoComplete
                                    label="Construction Sector"
                                    options={[
                                        { value: '1', title: 'Sector 1' },
                                        { value: '2', title: 'Sector 2' },
                                    ]}
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Select Construction Sector"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="contract_type"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <AutoComplete
                                    label="Contract Type"
                                    options={[
                                        { value: '1', title: 'Contract 1' },
                                        { value: '2', title: 'Contract 2' },
                                    ]}
                                    value={value}
                                    onChange={onChange}
                                    placeholder="Select Contract Type"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="reportDate"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <DateField
                                    value={value}
                                    onChange={onChange}
                                    InputProps={{ onBlur: onBlur }}
                                    name="Date Field"
                                    label="Report Date"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="tender"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="ECI/Tender"
                                    value={value}
                                    placeholder="Enter ECI/Tender"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="gross_contract"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Net or Gross Contract Programme"
                                    value={value}
                                    placeholder="Enter Net or Gross Contract Programme"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="weather_allowance"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Weather Allowance"
                                    value={value}
                                    placeholder="Enter Weather Allowance"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="budget_contingency"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Budget Contingency"
                                    value={value}
                                    placeholder="Enter Budget Contingency"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="site_commencement"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <DateField
                                    value={value}
                                    onChange={onChange}
                                    InputProps={{ onBlur: onBlur }}
                                    label="Site Commencement"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="target_margin"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Target Margin"
                                    value={value}
                                    placeholder="Enter Target Margin"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="target_completion"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <DateField
                                    value={value}
                                    onChange={onChange}
                                    InputProps={{ onBlur: onBlur }}
                                    label="Target Completion"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="original_contract_sum"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Original Contract Sum"
                                    value={value}
                                    placeholder="Enter Original Contract Sum"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="contract_award_date"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <DateField
                                    value={value}
                                    onChange={onChange}
                                    InputProps={{ onBlur: onBlur }}
                                    label="Contract Award Date"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="contract_completion_date"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <DateField
                                    value={value}
                                    onChange={onChange}
                                    InputProps={{ onBlur: onBlur }}
                                    label="Contract Completion Date"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="contract_duration"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <InputField
                                    label="Contract Duration"
                                    value={value}
                                    placeholder="Enter Contract Duration"
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>
                <Grid item xs={6} md={6} lg={4}>
                    <Controller
                        rules={{
                            required: { value: true, message: 'This field is required' },
                        }}
                        name="practial_completion_achieved"
                        render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => {
                            return (
                                <DateField
                                    value={value}
                                    onChange={onChange}
                                    InputProps={{ onBlur: onBlur }}
                                    label="Practial Completion Achieved"
                                    error={!!Boolean(error)}
                                    helperText={error?.message}
                                />
                            )
                        }}
                    />
                </Grid>

                <Grid item xs={12} mb={5}>
                    <Review />
                </Grid>
            </Grid>
        </form>
    )
}

export default ProjectInfoForm
