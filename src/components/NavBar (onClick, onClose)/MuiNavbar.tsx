// Core
import { useState } from 'react';
// Mui
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material';
// Icons
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget); // this will set the button element as the anchor element
    };

    const handleClose = () => {
        setAnchorEl(null); // this will hide the menu
    };

    return (
        <AppBar position='static' color='secondary'>
            <Toolbar>
                <IconButton
                    size='large'
                    edge='start'
                    color='inherit'
                    aria-label='logo'
                >
                    <CatchingPokemonIcon />
                </IconButton>
                <Typography
                    variant='h6'
                    component='div'
                    sx={{ flexGrow: 1 }}
                >
                    POKEMON APP
                </Typography>
                <Stack
                    direction='row'
                    spacing={2}
                >
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button
                        color='inherit'
                        id='resources-button'
                        onClick={handleClick}
                        aria-control={open ? 'resources-menu' : undefined}
                        aria-haspopup='true'
                        aria-expanded={open ? 'true' : undefined}
                        endIcon={<KeyboardArrowDownIcon />}
                    >
                        Resources
                    </Button>
                    <Button color='inherit'>Login</Button>
                </Stack>

                <Menu
                    id='resources-menu'
                    anchorEl={anchorEl}
                    open={open}
                    MenuListProps={{
                        'aria-labelledby': 'resources-button'
                    }}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right'
                    }}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
};

export default MuiNavbar;
 // onClick on the buttons -> to navigate