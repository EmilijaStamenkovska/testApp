// Mui
import {
    Stack,
    Alert,
    AlertTitle,
    Button
} from '@mui/material';
// Icons
import CheckIcon from '@mui/icons-material/Check';

const MuiAlert = () => {
    return (
        <Stack spacing={2}>
            <Alert severity='error'>
                error alert
            </Alert>
            <Alert severity='warning'>
                warning alert
            </Alert>
            <Alert severity='info'>
                info alert
            </Alert>
            <Alert severity='success'>
                success alert
            </Alert>

            <Alert variant='outlined' severity='error' onClose={() => alert('Close alert')}>
                <AlertTitle>Error</AlertTitle>
                This is an error alert
            </Alert>
            <Alert variant='outlined' severity='warning'>
                <AlertTitle>Warning</AlertTitle>
                This is a warning alert
            </Alert>
            <Alert variant='outlined' severity='info'>
                <AlertTitle>Info</AlertTitle>
                This is an info alert
            </Alert>
            <Alert variant='outlined' severity='success'>
                <AlertTitle>Success</AlertTitle>
                This is a success alert
            </Alert>

            <Alert variant='filled' severity='error'>
                error alert
            </Alert>
            <Alert variant='filled' severity='warning'>
                warning alert
            </Alert>
            <Alert variant='filled' severity='info'>
                info alert
            </Alert>
            <Alert
                variant='filled'
                severity='success'
                icon={<CheckIcon fontSize='inherit' />}
                action={<Button color='inherit' size='small'>
                    undo
                </Button>}>
                success alert
            </Alert>
        </Stack>
    )
};

export default MuiAlert;

// displays a short important message which attracts the user's attention without interrupting the user's task