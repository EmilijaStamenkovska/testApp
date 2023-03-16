// Core
import { useState } from 'react';
// Mui
import {
    Stack,
    Chip,
    Avatar
} from '@mui/material';
// Icons
import FaceIcon from '@mui/icons-material/Face';

const MuiChip = () => {
    const [chips, setChips] = useState<string[]>(['Chip1', 'Chip2', 'Chip3', 'Chip4']);

    const handleDelete = (chipToDelete: string) => {
        setChips(chips => chips.filter(chip => chip !== chipToDelete));
    };

    return (
        <Stack direction='row' spacing={1}>
            <Chip
                label='Chip'
                color='secondary'
                size='small'
                icon={<FaceIcon />}
            />

            <Chip
                label='Chip outlined'
                color='success'
                size='small'
                variant='outlined'
                avatar={<Avatar>V</Avatar>}
            />

            <Chip
                label='Click'
                color='warning'
                onClick={() => alert('clicked')}
            />
            <Chip
                label='Delete'
                color='error'
                onClick={() => alert('clicked')}
                onDelete={() => alert('delete handler called')}
            />

            {
                chips.map((chip) => {
                    return (
                        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
                    )
                })
            }

        </Stack>
    )
};

export default MuiChip;

// enter information, make selections, filter content, trigger actions