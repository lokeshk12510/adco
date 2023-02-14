import Images from "src/config/images"

export type StateTypes = {
    value:string 
    title:string
}

export type SectorTypes = {
    value:string 
    title:string
}

export type ContractTypes = {
    value:string 
    title:string
}


export type ProjectInfoFormValuesTypes = {
    projectName: string
    jobId: string
    state: StateTypes | null
    construction_sector:SectorTypes|null
    contract_type:ContractTypes|null    
    reportDate: string | null
    site_commencement: string | null
    target_completion: string | null
    contract_award_date: string | null
    contract_completion_date: string | null
    practial_completion_achieved: string | null
    tender: string
    budget_contingency: string
    weather_allowance: string
    target_margin: string
    original_contract_sum: string
    contract_duration: string
    gross_contract: string
    reviewer_comments: string
    files:any
    projectImage:string|null

}


export const ProjectInfoFormValues ={
    projectName: '',
    jobId: '',
    state: null,
    construction_sector:null,
    contract_type:null,
    tender: '',
    budget_contingency: '',
    weather_allowance: '',
    gross_contract: '',
    reportDate: null,
    site_commencement: null,
    target_completion: null,
    contract_award_date: null,
    contract_completion_date: null,
    practial_completion_achieved: null,
    target_margin: '',
    original_contract_sum: '',
    contract_duration: '',
    reviewer_comments: '',
    files:'',
    projectImage:Images.ProjectImage,
    
}