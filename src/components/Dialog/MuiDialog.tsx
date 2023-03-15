// Core
import { useState } from 'react';
// Mui
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions
} from '@mui/material';

const MuiDialog = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenClose = () => {
        setIsOpen(prevstate => !prevstate);
    };

    return (
        <>
            <Button onClick={handleOpenClose}>Open dialog</Button>
            <Dialog
                aria-labelledby='dialog-title'
                aria-describedby='dialog-description'
                open={isOpen}
                onClose={handleOpenClose}
            >
                <DialogTitle id='dialog-title'>Submit test?</DialogTitle>
                <DialogContent>
                    <DialogContentText id='dialog-description'>Are you sure you want to submit? You will not be able to edit after submitting</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus>
                        Submit
                    </Button>
                    <Button onClick={handleOpenClose}>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default MuiDialog;

// type of a model that appears in front of an app content to present important informations or ask for a decision
// unlike SnackBar, Dialogues disable all app funcionality when they appear and remain on screen until confirmed or dismissed
// purposefully interruptive