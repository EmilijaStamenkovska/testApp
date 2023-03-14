// Core
import { useState } from 'react';
// Mui
import { Stack, Rating } from '@mui/material';
// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const MuiRating = () => {
    const [value, setValue] = useState<number | null>(null);
    console.log({ value });

    const handleChange = ( // everytime when one of the stars is selected, newValue would be a number which will update the state variable
        _event: React.ChangeEvent<{}>,
        newValue: number | null // if the same star is selected null will be passed and the rating will be cleared
    ) => {
        setValue(newValue);
    };

    return (
        <Stack spacing={2}>
            <Rating
                value={value}
                onChange={handleChange}
                // precision={0.5}
                size='large'
                icon={<FavoriteIcon fontSize='inherit' color='secondary' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                highlightSelectedOnly
            />
            <Rating
                value={value}
                onChange={handleChange}
                size='large'
                icon={<FavoriteIcon fontSize='inherit' color='secondary' />}
                emptyIcon={<FavoriteBorderIcon fontSize='inherit' />}
                readOnly
            />
        </Stack>
    )
};

export default MuiRating;