// Core
import { useState } from 'react';
// Mui
import {
    Box,
    FormControlLabel,
    Switch
} from '@mui/material';
// Icons
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

const MuiSwitch = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    console.log({ isChecked });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    return (
        <Box>
            <FormControlLabel
                label={isChecked ? <LockOpenIcon /> : <LockIcon />}
                control={
                    <Switch
                        checked={isChecked}
                        onChange={handleChange}
                        color='success'
                        size='small'
                    />
                }

            />
        </Box>
    )
};

export default MuiSwitch;