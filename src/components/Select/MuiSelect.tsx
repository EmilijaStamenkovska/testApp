// Core
import { useState } from 'react';
// Mui
import { Box, TextField, MenuItem } from '@mui/material';
// Data
export const countryList = require('country-list');
export const arrayWithCountries = countryList.getNames();

const MuiSelect = () => {
    const [country, setCountry] = useState<string>('');
    const [countries, setCountries] = useState<string[]>([]);

    const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    };
    
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(event.target.value);
    };

    return (
        <Box width='250px'>
            <TextField
                label='Select Country'
                select
                value={countries}
                onChange={handleChange2}
                fullWidth
                SelectProps={{
                    multiple: true
                }}
                size='small'
                color='secondary'
                helperText='Please select your country'
                error
            >
                <MenuItem value='IN'>India</MenuItem>
                <MenuItem value='US'>USA</MenuItem>
                <MenuItem value='AU'>Australia</MenuItem>
            </TextField>

            <TextField
                label='Select Country'
                select
                value={country}
                onChange={handleChange1}
                fullWidth
                size='small'
                color='secondary'
                helperText='Please select your country'
            >
                {
                    arrayWithCountries.map((country: string, index: any) => {
                        return (
                            <MenuItem key={index} value={country}>{country}</MenuItem>
                        )
                    })
                }
            </TextField>
        </Box>
    )
};

export default MuiSelect;

//multiple: true | the state needs to be converted into an array, it will show all of the selected values