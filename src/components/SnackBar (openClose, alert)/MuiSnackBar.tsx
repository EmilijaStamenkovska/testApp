// Core
import { useState, forwardRef } from 'react';
// Mui
import {
    Snackbar,
    Button,
    Alert,
    AlertProps
} from '@mui/material';

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
    function SnackbarAlert(props, ref) {
        return <Alert elevation={6} ref={ref} {...props} />
    }
);

const MuiSnackBar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpen = () => {
        setIsOpen(prevstate => !prevstate);
    };

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === 'clickaway') {
            return;
        }
        setIsOpen(false);
    };

    return (
        <>
            <Button onClick={handleOpen}>Submit</Button>
            {/* <Snackbar
                message='Form submitted successfully!'
                autoHideDuration={2000}
                onClose={handleClose}
                open={isOpen}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            /> */}

            <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
                <SnackbarAlert onClose={handleClose} severity='success'>
                    Form submitted successfully!
                </SnackbarAlert>
            </Snackbar>
        </>
    )
};

export default MuiSnackBar;

// inform users of a process that an app has performed or will perform
// they appear temporarily towards the bottom of the screen
// shouldn't interrupt user experience
// don't require user input to disappear