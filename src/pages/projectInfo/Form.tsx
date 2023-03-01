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
                        name="ProjectImage"
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
                        name="ProjectName"
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
                        name="JobId"
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
                        name="State"
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
                        name="ConstructionSector"
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
                        name="ContractType"
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
                        name="ReportDate"
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
                        name="ECITender"
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
                        name="NetGross"
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
                        name="WeatherAllowance"
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
                        name="BudgetContingency"
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
                        name="SiteCommencement"
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
                        name="TargetMargin"
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
                        name="TargetCompletion"
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
                        name="ContractSum"
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
                        name="ContractAwardDate"
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
                        name="ContractCompletionDate"
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
                        name="ContractDuration"
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
                        name="PracticalCompletionAchieved"
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
