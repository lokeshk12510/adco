import { Divider } from '@mui/material'
import Button from '@mui/material/Button'
import MuiDialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import * as React from 'react'

interface DialogProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    title: string
    children: React.ReactNode
    onSubmit?: () => void
    onCancel?: () => void
    submitLabel?: string
    cancelLabel?: string
}

export default function Dialog(props: DialogProps) {
    const { open, setOpen, title, children, onSubmit, onCancel, submitLabel = 'Save', cancelLabel = 'Cancel' } = props

    const handleClose = () => {
        setOpen(false)
        onCancel && onCancel()
    }

    const handleSubmit = () => {
        setOpen(false)
        onSubmit && onSubmit()
    }

    return (
        <div>
            <MuiDialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
                <DialogTitle>{title}</DialogTitle>
                <Divider />
                <DialogContent>{children}</DialogContent>
                <DialogActions sx={{ p: 5 }}>
                    <Button onClick={handleClose} variant="outlined" color="neutral">
                        {cancelLabel}
                    </Button>
                    <Button onClick={handleSubmit} variant="contained">
                        {submitLabel}
                    </Button>
                </DialogActions>
            </MuiDialog>
        </div>
    )
}
