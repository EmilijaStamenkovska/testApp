// Core
import { useState } from 'react'
// Mui
import {
    Stack,
    TextField,
    InputAdornment,
    IconButton
} from "@mui/material";
// Icons
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const MuiTextField = () => {
    const [toggleEye, setToggleEye] = useState<boolean>(false);
    const [value, setValue] = useState<string>('');

    const handleToggle = (_event: React.MouseEvent<HTMLElement>) => {
        setToggleEye(prevstate => !prevstate);
    };

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };


    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Name' variant='outlined' />
                <TextField label='Name' variant='filled' />
                <TextField label='Name' variant='standard' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='small secondary' size='small' color='secondary' />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField label='Form Input' required />
                <TextField
                    label='Password'
                    type='password'
                    helperText='Do not share your password with anyone'
                    disabled
                />
                <TextField label='Read Only' InputProps={{ readOnly: true }} />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField
                    label='Amount'
                    InputProps={{
                        startAdornment: <InputAdornment position='start'>$</InputAdornment>,
                    }}
                />
                <TextField
                    label='Weight'
                    InputProps={{
                        endAdornment: <InputAdornment position='end'>kg</InputAdornment>,
                    }}
                />
            </Stack>

            <Stack direction='row' spacing={2}>
                <TextField
                    label='password'
                    type={toggleEye ? 'text' : 'password'}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleToggle}
                            >
                                {toggleEye ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                        </InputAdornment>
                    }}
                />
                <TextField 
                    label='Form Input' 
                    value={value}
                    onChange={handleChangeValue}
                    required 
                    error={!value}
                    helperText={
                        !value ? 'Required' : 'Do not share your password with anyone'
                    } 
                />
            </Stack>
        </Stack>
    )
};

export default MuiTextField;

// required: adds an asterisk
// disabled: disables the input, can't edit
// InputProps={{ readOnly: true }}: can't edit
// input adornment: adding suffixes and prefixes to a text field