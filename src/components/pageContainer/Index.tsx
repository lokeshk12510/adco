import React from 'react'
import { styled } from '@mui/material'
import Header from './header/Index'

type PageContainerProps = {
    children: React.ReactElement
    render?: () => React.ReactNode
    title?: string
}

const PageContainer = ({ children, ...rest }: PageContainerProps) => {
    return (
        <div>
            <Header {...rest} />
            <Wrapper>{children}</Wrapper>
        </div>
    )
}

export default PageContainer

const Wrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(2),
    // background: theme.palette.white.main,
    paddingTop: 20,
}))
