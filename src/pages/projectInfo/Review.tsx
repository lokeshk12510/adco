import { useEffect, useState } from 'react'
// Icons
import { AddCircle, Edit } from '@mui/icons-material'
// Mui
import { Box, Grid, IconButton, Stack, Typography, alpha, styled } from '@mui/material'
import Paper from '@mui/material/Paper'
// Moment
import moment from 'moment'
// Components
import Dialog from 'src/components/Dialog'
import DateField from 'src/components/Form/DateField'
// Constants
import { DATE_FORMAT } from 'src/config/contants'
import InputField from 'src/components/Form/InputField'
interface StyledCardProps {
    status: boolean
}

interface ReviewListProps {
    name: string
    title: string
    status: boolean
    approved_date: Date | null
    id: number
    assignee: string
}

const reviewList: ReviewListProps[] = [
    {
        name: 'contract_administrator',
        title: 'Contract Administrator',
        assignee: 'Doug Zuzic',
        status: true,
        approved_date: new Date(),
        id: 1,
    },
    {
        name: 'project_manager',
        title: 'Project Manager',
        status: false,
        approved_date: null,
        id: 2,
        assignee: '-',
    },
    {
        name: 'construction_manager',
        title: 'Construction Manager',
        status: true,
        approved_date: new Date(),
        id: 3,
        assignee: 'Charlie Archie',
    },
    {
        name: 'commercial_manager',
        title: 'Commercial Manager',
        status: false,
        approved_date: null,
        id: 4,
        assignee: '-',
    },
    {
        name: 'planning_manager',
        title: 'Planning Manager',
        status: true,
        approved_date: new Date(),
        id: 5,
        assignee: 'Lucas Matilda',
    },
]

const Review = () => {
    const [open, setOpen] = useState<boolean>(false)

    const [value, setValue] = useState<Date | null>(null)

    const [name, setName] = useState('Dong zuzic')

    const [selectedField, setSelectedField] = useState<ReviewListProps | null>(null)

    const handleOpenModal = (item: ReviewListProps) => {
        setSelectedField(item)
        setOpen(true)
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setName(e.target.value)
    }

    useEffect(() => {
        setValue(selectedField?.approved_date || null)
    }, [selectedField])

    return (
        <Root>
            <Typography variant="h6" fontWeight={'semi-blod'} mb={2}>
                Sign Off & Review
            </Typography>
            <Grid container spacing={2}>
                {reviewList.map((item, i) => {
                    return (
                        <Grid item xs={12} md={6} lg={2.4} key={item.id}>
                            <StyledCard status={item.status} onClick={() => handleOpenModal(item)}>
                                <div className="content">
                                    <>
                                        {item.title} <br /> {item.assignee} <br />{' '}
                                        {item.status ? moment(item.approved_date).format(DATE_FORMAT) : '-'}{' '}
                                    </>
                                    <IconButton color="primary" size="small">
                                        {item.status ? <Edit /> : <AddCircle />}
                                    </IconButton>
                                </div>
                                <div className="footer">{item.status ? 'Approved' : 'Not Approved'}</div>
                            </StyledCard>
                        </Grid>
                    )
                })}
            </Grid>

            <Dialog open={open} setOpen={setOpen} title="Sign Off & Review" submitLabel="Approve">
                {selectedField && (
                    <Stack>
                        <InputField value={name} onChange={handleChange} label="Name" />
                        <DateField value={value} onChange={(val) => setValue(val)} label={selectedField.title} />
                    </Stack>
                )}
            </Dialog>
        </Root>
    )
}

export default Review

const Root = styled(Box)(({ theme }) => ({
    background: theme.palette.grey[200],
    padding: theme.spacing(4),
    borderRadius: 7,
}))

const StyledCard = styled(Paper, { shouldForwardProp: (props) => props !== 'status' })<StyledCardProps>(
    ({ theme, status }) => {
        let color = status ? theme.palette.success.main : theme.palette.grey[600]
        let bgColor = status ? theme.palette.success.light : theme.palette.grey[100]

        return {
            width: '100%',
            border: `1px solid ${color}`,
            borderRadius: 5,
            overflow: 'hidden',
            cursor: 'pointer',
            boxShadow: 'none',
            '&:hover': {
                boxShadow: theme.shadows[5],
            },
            '& .content': {
                padding: theme.spacing(3),
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                fontSize: '14px',
                fontWeight: 'semi-bold',
            },
            '& .footer': {
                padding: theme.spacing(1),
                background: alpha(bgColor, 0.5),
                color: color,
                textAlign: 'center',
                borderTop: `1px solid ${bgColor}`,
                textTransform: 'uppercase',
                fontSize: '14px',
                fontWeight: 'bold',
            },
        }
    }
)
