// Core
import { useState } from 'react';
// Mui
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
// Icons
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonIcon from '@mui/icons-material/Person';

const MuiBottomNav = () => {
    const [value, setValue] = useState<number>(0);

    const handleChange = (_event: React.ChangeEvent<{}>, newValue: number) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            sx={{ width: '100%', position: 'absolute', bottom: 0 }}
            value={value}
            onChange={handleChange}
            showLabels
        >
            <BottomNavigationAction
                label='Home'
                icon={<HomeIcon />}
            />
            <BottomNavigationAction
                label='Favorites'
                icon={<FavoriteIcon />}
            />
            <BottomNavigationAction
                label='Profile'
                icon={<PersonIcon />}
            />
        </BottomNavigation>
    )
};

export default MuiBottomNav;