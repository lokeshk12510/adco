import { faker } from '@faker-js/faker'

export type Person = {
    section: string
    total: number | string | 0 | null
    jan22: number | string | 0 | null
    feb22: number | string | 0 | null
    mar22: number | string | 0 | null
    apr22: number | string | 0 | null
    may22: number | string | 0 | null
    jun22: number | string | 0 | null
    jul22: number | string | 0 | null
    aug22: number | string | 0 | null
    sep22: number | string | 0 | null
    oct22: number | string | 0 | null
    nov22: number | string | 0 | null
    dec22: number | string | 0 | null
    unallocated: number | string | 0 | null
    toDate: number | string | 0 | null
}

const range = (len: number) => {
    const arr = []
    for (let i = 0; i < len; i++) {
        arr.push(i)
    }
    return arr
}

const newPerson = (): Person => {
    return {
        section: faker.datatype.string(),
        total: faker.datatype.number(40),
        jan22: faker.datatype.number(1000),
        feb22: faker.datatype.number(1000),
        mar22: faker.datatype.number(1000),
        apr22: faker.datatype.number(1000),
        may22: faker.datatype.number(1000),
        jun22: faker.datatype.number(1000),
        jul22: faker.datatype.number(1000),
        aug22: faker.datatype.number(1000),
        sep22: faker.datatype.number(1000),
        oct22: faker.datatype.number(1000),
        nov22: faker.datatype.number(1000),
        dec22: faker.datatype.number(1000),
        unallocated: faker.datatype.number(1000),
        toDate: faker.datatype.number(1000),
    }
}

export function makeData(...lens: number[]) {
    const makeDataLevel = (depth = 0): Person[] => {
        const len = lens[depth]!
        return range(len).map((d): Person => {
            return {
                ...newPerson(),
            }
        })
    }

    return [
        {
            section: 'section 1',
            total: '',
            jan22: '',
            feb22: '',
            mar22: '',
            apr22: '',
            may22: '',
            jun22: '',
            jul22: '',
            aug22: '',
            sep22: '',
            oct22: '',
            nov22: '',
            dec22: '',
            unallocated: '',
            toDate: '',
        },
        ...makeDataLevel(),
    ]
}
