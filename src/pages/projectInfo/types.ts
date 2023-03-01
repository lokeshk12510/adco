import Images from 'src/config/images'

export type StateTypes = {
    value: string
    title: string
}

export type SectorTypes = {
    value: string
    title: string
}

export type ContractTypes = {
    value: string
    title: string
}

export type ProjectInfoFormValuesTypes = {
    ProjectId: number
    ProjectName: string
    JobId: string
    State: StateTypes | null
    ConstructionSector: SectorTypes | null
    ContractType: ContractTypes | null
    ReportDate: string | null
    SiteCommencement: string | null
    TargetCompletion: string | null
    ContractAwardDate: string | null
    ContractCompletionDate: string | null
    PracticalCompletionAchieved: string | null
    ECITender: string
    BudgetContingency: string
    WeatherAllowance: string
    TargetMargin: string
    ContractSum: string
    ContractDuration: string
    NetGross: string
    ReviewerComments: string
    Attachments: File[]
    ProjectImage: string | null
}

export const ProjectInfoFormValues = {
    ProjectName: '',
    JobId: '',
    State: null,
    ConstructionSector: null,
    ContractType: null,
    ECITender: '',
    BudgetContingency: '',
    WeatherAllowance: '',
    NetGross: '',
    ReportDate: null,
    SiteCommencement: null,
    TargetCompletion: null,
    ContractAwardDate: null,
    ContractCompletionDate: null,
    PracticalCompletionAchieved: null,
    TargetMargin: '',
    ContractSum: '',
    ContractDuration: '',
    ReviewerComments: '',
    Attachments: [],
    ProjectImage: Images.ProjectImage,
}
