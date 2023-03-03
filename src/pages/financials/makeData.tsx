import { useState } from 'react'
// Mui
import { Box, OutlinedInput, Tooltip } from '@mui/material'
// React-table
import { CellContext, ColumnDef } from '@tanstack/react-table'

export interface IObjectKeys {
    [key: string]: string | number | null | undefined
}

export interface Person extends IObjectKeys {
    section: string
    total: number | string | null
    jan22: number | string | null
    feb22: number | string | null
    mar22: number | string | null
    apr22: number | string | null
    may22: number | string | null
    jun22: number | string | null
    jul22: number | string | null
    aug22: number | string | null
    sep22: number | string | null
    oct22: number | string | null
    nov22: number | string | null
    dec22: number | string | null
    unallocated: number | string | null
    toDate: number | string | null
    type?: string
}

type ColumnProps = {
    label: string
    key: string
    currentMonth?: boolean
    editable?: boolean
}

export const columns: ColumnProps[] = [
    {
        label: 'Jan 22',
        key: 'jan22',
    },
    {
        label: 'Feb 22',
        key: 'feb22',
    },
    {
        label: 'Mar 22',
        key: 'mar22',
    },
    {
        label: 'Apr 22',
        key: 'apr22',
    },
    {
        label: 'May 22',
        key: 'may22',
    },
    {
        label: 'Jun 22',
        key: 'jun22',
    },
    {
        label: 'Jul 22',
        key: 'jul22',
    },
    {
        label: 'Aug 22',
        key: 'aug22',
        currentMonth: true,
    },
    {
        label: 'Sep 22',
        key: 'sep22',
        editable: true,
    },
    {
        label: 'Oct 22',
        key: 'oct22',
        editable: true,
    },
    {
        label: 'Nov 22',
        key: 'nov22',
        editable: true,
    },
    {
        label: 'Dec 22',
        key: 'dec22',
        editable: true,
    },
]

// generating dynamic columns for table
export const generateDynamicColumns = (columns: ColumnProps[]): ColumnDef<Person>[] => {
    return columns.map((col, i) => {
        return {
            id: col.key,
            cell: (info) => {
                if (col.editable && info.row.original.type === 'editable') {
                    // condition for showing `input` or `value`
                    return <Input info={info} col={col} i={i} />
                } else {
                    return info.row.original[col.key]
                }
            },
            header: (props) => {
                if (col.currentMonth) {
                    return (
                        <Box
                            sx={(theme) => ({
                                background: theme.palette.warning.main,
                                color: theme.palette.common.white,
                                px: 1,
                                borderRadius: 0.5,
                            })}
                        >
                            {col.label}
                        </Box>
                    )
                }
                return col.label
            },
            footer: (props) => props.column.id,
            meta: {
                getCellContext: (context: CellContext<Person, unknown>) => {
                    if (context.row.original.section.includes('section')) {
                        return { visibility: false }
                    }
                    return {
                        className: col.editable && context.row.original.type === 'editable' ? `editable` : 'disabled',
                    }
                },
            },
        }
    })
}

// Input component using inside the `TableCell`
const Input = ({ info, col, i }: { col: ColumnProps; i: number; info: CellContext<Person, unknown> }) => {
    const [value, setValue] = useState(info.row.original[col.key])
    const [error, setError] = useState<string | boolean>(false)

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setValue(e.target.value)

        // Only numbers condition
        if (!RegExp(/^-?\d+\.?\d*$/).test(e.target.value)) {
            setError('Please enter a valid number!')
        } else {
            setError(false)
        }
    }

    return (
        <Tooltip title={error as string} arrow placement="bottom-end">
            <OutlinedInput
                value={value}
                onChange={handleChange}
                name={`rows.${i}.${col.key}`}
                sx={{ borderRadius: 0, '& input': { py: 0.7, px: 1.2, fontSize: 14 } }}
                error={Boolean(error)}
            />
        </Tooltip>
    )
}

export const rows: Person[] = [
    {
        section: 'section 1',
        total: null,
        jan22: null,
        feb22: null,
        mar22: null,
        apr22: null,
        may22: null,
        jun22: null,
        jul22: null,
        aug22: null,
        sep22: null,
        oct22: null,
        nov22: null,
        dec22: null,
        unallocated: '',
        toDate: '',
    },
    {
        section: '@qioV@L!dC',
        total: 4,
        jan22: 778,
        feb22: 923,
        mar22: 975,
        apr22: 375,
        may22: 152,
        jun22: 225,
        jul22: 551,
        aug22: 774,
        sep22: 136,
        oct22: 219,
        nov22: 511,
        dec22: 787,
        unallocated: 910,
        toDate: 713,
        type: 'editable',
    },
    {
        section: 'rCTeA>dSRE',
        total: 5,
        jan22: 718,
        feb22: 725,
        mar22: 101,
        apr22: 187,
        may22: 86,
        jun22: 451,
        jul22: 865,
        aug22: 614,
        sep22: 245,
        oct22: 500,
        nov22: 740,
        dec22: 274,
        unallocated: 946,
        toDate: 933,
        type: 'editable',
    },
    {
        section: "jDB']6HePM",
        total: 20,
        jan22: 25,
        feb22: 891,
        mar22: 252,
        apr22: 974,
        may22: 103,
        jun22: 438,
        jul22: 650,
        aug22: 313,
        sep22: 852,
        oct22: 40,
        nov22: 909,
        dec22: 793,
        unallocated: 430,
        toDate: 93,
        type: 'editable',
    },
    {
        section: "CQQ'SAs#4f",
        total: 15,
        jan22: 436,
        feb22: 18,
        mar22: 993,
        apr22: 57,
        may22: 485,
        jun22: 819,
        jul22: 62,
        aug22: 303,
        sep22: 212,
        oct22: 860,
        nov22: 417,
        dec22: 832,
        unallocated: 465,
        toDate: 890,
        type: 'editable',
    },
    {
        section: 'BuV`,Q1$w3',
        total: 11,
        jan22: 931,
        feb22: 32,
        mar22: 989,
        apr22: 802,
        may22: 713,
        jun22: 188,
        jul22: 457,
        aug22: 200,
        sep22: 286,
        oct22: 332,
        nov22: 631,
        dec22: 457,
        unallocated: 7,
        toDate: 404,
        type: 'editable',
    },
    {
        section: '($Ya(JaCpu',
        total: 10,
        jan22: 31,
        feb22: 445,
        mar22: 156,
        apr22: 15,
        may22: 765,
        jun22: 843,
        jul22: 408,
        aug22: 327,
        sep22: 452,
        oct22: 657,
        nov22: 796,
        dec22: 686,
        unallocated: 59,
        toDate: 97,
        type: 'editable',
    },
    {
        section: '&YNptqd]yG',
        total: 20,
        jan22: 561,
        feb22: 965,
        mar22: 793,
        apr22: 366,
        may22: 693,
        jun22: 779,
        jul22: 724,
        aug22: 357,
        sep22: 859,
        oct22: 483,
        nov22: 125,
        dec22: 581,
        unallocated: 415,
        toDate: 494,
        type: 'editable',
    },
    {
        section: 'E(t7;V&C%Q',
        total: 36,
        jan22: 772,
        feb22: 721,
        mar22: 137,
        apr22: 9,
        may22: 282,
        jun22: 515,
        jul22: 802,
        aug22: 970,
        sep22: 326,
        oct22: 402,
        nov22: 359,
        dec22: 246,
        unallocated: 111,
        toDate: 346,
        type: 'editable',
    },
    {
        section: 'i[uxl+mX3X',
        total: 34,
        jan22: 944,
        feb22: 198,
        mar22: 595,
        apr22: 126,
        may22: 107,
        jun22: 796,
        jul22: 132,
        aug22: 801,
        sep22: 294,
        oct22: 882,
        nov22: 578,
        dec22: 123,
        unallocated: 543,
        toDate: 941,
        type: 'editable',
    },
    {
        section: '',
        total: 8,
        jan22: 862,
        feb22: 510,
        mar22: 381,
        apr22: 765,
        may22: 537,
        jun22: 388,
        jul22: 1,
        aug22: 63,
        sep22: 650,
        oct22: 625,
        nov22: 968,
        dec22: 772,
        unallocated: 952,
        toDate: 527,
        type: 'non-editable',
    },
    {
        section: 'section 2',
        total: null,
        jan22: null,
        feb22: null,
        mar22: null,
        apr22: null,
        may22: null,
        jun22: null,
        jul22: null,
        aug22: null,
        sep22: null,
        oct22: null,
        nov22: null,
        dec22: null,
        unallocated: '',
        toDate: '',
    },
    {
        section: '=tC/t+7.s?',
        total: 25,
        jan22: 31,
        feb22: 533,
        mar22: 98,
        apr22: 951,
        may22: 263,
        jun22: 250,
        jul22: 174,
        aug22: 606,
        sep22: 445,
        oct22: 529,
        nov22: 836,
        dec22: 45,
        unallocated: 360,
        toDate: 903,
        type: 'editable',
    },
    {
        section: '-}9h{oL]h,',
        total: 2,
        jan22: 513,
        feb22: 813,
        mar22: 95,
        apr22: 54,
        may22: 542,
        jun22: 131,
        jul22: 308,
        aug22: 563,
        sep22: 479,
        oct22: 287,
        nov22: 507,
        dec22: 601,
        unallocated: 856,
        toDate: 432,
        type: 'editable',
    },
    {
        section: ']ufOiNAvq/',
        total: 25,
        jan22: 917,
        feb22: 969,
        mar22: 443,
        apr22: 413,
        may22: 803,
        jun22: 379,
        jul22: 271,
        aug22: 927,
        sep22: 598,
        oct22: 836,
        nov22: 204,
        dec22: 310,
        unallocated: 568,
        toDate: 501,
        type: 'editable',
    },
    {
        section: 'Net claim forecast',
        total: 123123123,
        jan22: 123,
        feb22: 1,
        mar22: 1231,
        apr22: 12313,
        may22: 67567,
        jun22: 35345345,
        jul22: 345,
        aug22: 68687,
        sep22: 546456,
        oct22: 6767,
        nov22: 56755,
        dec22: 7645645,
        unallocated: 1,
        toDate: 90565342,
        type: 'non-editable',
    },
    {
        section: 'IeJlIL-7]F',
        total: 31,
        jan22: 382,
        feb22: 835,
        mar22: 458,
        apr22: 345,
        may22: 474,
        jun22: 114,
        jul22: 395,
        aug22: 461,
        sep22: 534,
        oct22: 604,
        nov22: 903,
        dec22: 530,
        unallocated: 814,
        toDate: 707,
        type: 'non-editable',
    },
    {
        section: 'pO&?&v,Bu]',
        total: 2,
        jan22: 213,
        feb22: 691,
        mar22: 989,
        apr22: 468,
        may22: 783,
        jun22: 580,
        jul22: 13,
        aug22: 486,
        sep22: 942,
        oct22: 48,
        nov22: 542,
        dec22: 620,
        unallocated: 237,
        toDate: 40,
        type: 'non-editable',
    },
]
