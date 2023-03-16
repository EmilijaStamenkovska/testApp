// Core
import { useState } from 'react';
// Mui
import {
    Stack,
    Autocomplete,
    TextField
} from '@mui/material';
// Data
export const countryList = require('country-list');
export const arrayWithCountries = countryList.getNames();

type Country = {
    id: number;
    label: string;
}

const list = arrayWithCountries.map((country: string, index: number) => ({
    id: index + 1,
    label: country
}));

const MuiAutocomplete = () => {
    const [value, setValue] = useState<string | null>(null);
    const [country, setCountry] = useState<Country | null>(null);
    console.log({ country });

    return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={arrayWithCountries}
                renderInput={(params) => <TextField {...params} label='Countries' />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
                freeSolo
            />

            <Autocomplete
                options={arrayWithCountries}
                renderInput={(params) => <TextField {...params} label='Countries' />}
                value={value}
                onChange={(event: any, newValue: string | null) => setValue(newValue)}
                disabled={value ? true : false}
            />

            <Autocomplete
                options={list}
                renderInput={(params) => <TextField {...params} label='Countries' />}
                value={country}
                onChange={(event: any, newValue: Country | null) => setCountry(newValue)}
                disabled={value ? true : false}
            />
        </Stack>
    )
};

export default MuiAutocomplete;