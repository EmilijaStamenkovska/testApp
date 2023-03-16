// Core
import { useState } from 'react';
// Mui
import {
    Box,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormHelperText
} from '@mui/material';

const MuiRadioButton = () => {
    const [value, setValue] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    };

    return (
        <Box>
            <FormControl>
                <FormLabel id='job-experience-group-label'>
                    Years of experience
                </FormLabel>
                <RadioGroup
                    name='job-experience-group'
                    aria-labelledby='job-experience-group-label'
                    value={value}
                    onChange={handleChange}
                    row
                >
                    <FormControlLabel
                        control={<Radio size='medium' color='secondary' />}
                        label='0-2'
                        value='0-2'
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='3-5'
                        value='3-5'
                    />
                    <FormControlLabel
                        control={<Radio />}
                        label='6-10'
                        value='6-10'
                    />
                </RadioGroup>
                <FormHelperText>invalid selection</FormHelperText>
            </FormControl>
        </Box>
    )
};

export default MuiRadioButton;