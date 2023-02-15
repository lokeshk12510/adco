import { data } from "./data"

export type RowTypes = {
    id: number
    jobID: number
    projectName: string
    state: string
    sector: string
    contractType: string
    signOffReq: string
    status: boolean
}

export type TableStateTypes = {
    loading: boolean
    rows: RowTypes[]
    rowCount: number
    page: number
    pageSize: number
}

export const initialTableValues = {
    loading: false,
    rows: data,
    rowCount: 20,
    page: 0,
    pageSize: 10,
}