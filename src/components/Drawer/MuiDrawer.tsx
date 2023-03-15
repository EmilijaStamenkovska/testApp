// Core
import { useState } from 'react';
// Mui
import {
    Drawer,
    Box,
    Typography,
    IconButton
} from '@mui/material';
// Icons
import MenuIcon from '@mui/icons-material/Menu';

const MuiDrawer = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleOpenClose = () => {
        setIsOpen(prevstate => !prevstate);
    };

    return (
        <>
            <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='logo'
                onClick={handleOpenClose}
            >
                <MenuIcon />
            </IconButton>
            <Drawer anchor='left' open={isOpen} onClose={handleOpenClose}>
                <Box
                    p={2}
                    width='250px'
                    textAlign='center'
                    role='presentation'
                >
                    <Typography variant='h6' component='div'>
                        Side Panel
                    </Typography>
                </Box>
            </Drawer>
        </>
    )
};

export default MuiDrawer;

// used to create a side bar for things which depend on the app
// can contain links, switch accounts etc