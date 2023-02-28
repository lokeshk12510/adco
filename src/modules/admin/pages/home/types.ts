import { GridRowsProp } from '@mui/x-data-grid'

export type Project = {
    id: number
    jobId: number | string
    projectName: string
    state: string
    constructionSector: string
    contractType: string
    currentSignoff: string
    status: boolean
    comStatus: boolean
}

export type TableStateTypes = {
    mock: Project[]
}

export type ProjectTableProps = {
    isLoading: boolean
    rows: GridRowsProp | undefined
    pageSize?: number
}
