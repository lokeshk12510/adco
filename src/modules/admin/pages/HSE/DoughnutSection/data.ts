export const doughnutData = {
    columns: [
        { title: 'Hours Worked', key: 'type' },
        { title: 'Last Month', key: 'last_month' },
        { title: 'This Month', key: 'this_month' },
        { title: 'Total Upto Date', key: 'total' },
    ],
    rows: [
        {
            id: 1,
            type: 'ADCO wokers',
            last_month: 1971,
            this_month: 1800,
            total: 29156,
        },
        {
            id: 2,
            type: 'Subcontractors',
            last_month: 14803,
            this_month: 7752,
            total: 191961,
        },
        {
            id: 3,
            type: 'Total Hours Worked',
            last_month: 16774,
            this_month: 9552,
            total: 221155,
        },
    ],
}

interface IObjectKeys {
    [key: string]: string | number
}

export interface DoughnutDataProps {
    columns: Column[]
    rows: Row[]
}

export interface Column extends IObjectKeys {
    title: string
    key: string
}

export interface Row extends IObjectKeys {
    id: number
    type: string
    last_month: number
    this_month: number
    total: number
}
