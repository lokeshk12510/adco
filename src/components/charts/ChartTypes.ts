export interface IObjectKeys {
    [key: string]: string | number
}

export interface ChartTableColumn extends IObjectKeys {
    title: string
    key: string
}

export interface ChartRowRow extends IObjectKeys {
    id: number
    title: string
    last_month: number
    this_month: number
    total: number
}

export interface ChartDataProps {
    columns: ChartTableColumn[]
    rows: ChartRowRow[]
}
