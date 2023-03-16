// Mui
import {
    CircularProgress,
    LinearProgress,
    Stack
} from '@mui/material';

const MuiProgress = () => {
    return (
        <Stack spacing={2}>
            <CircularProgress />
            <CircularProgress color='success' />
            <CircularProgress
                variant='determinate'
                value={20}
            />
            <LinearProgress />
            <LinearProgress color='success' />
        </Stack>
    )
};

export default MuiProgress;

// inform users about the status of ongoing processes such as loading an app, submitting a form or saving updates
// linear or circular indicators, each of them can either be indeterminate or determined
