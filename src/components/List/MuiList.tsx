// Mui
import {
    Box,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemAvatar,
    Avatar,
    ListItemButton,
    Divider
} from '@mui/material';
// Icons
import MailIcon from '@mui/icons-material/Mail';

const MuiList = () => {
    return (
        <Box sx={{ width: '400px', bgcolor: 'pink' }}>
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            <ListItemAvatar>
                                <Avatar>
                                    <MailIcon />
                                </Avatar>
                            </ListItemAvatar>
                        </ListItemIcon>
                        <ListItemText primary='List Item 1' secondary='Secondary text' />
                    </ListItemButton>
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='List Item 2' secondary='Secondary text' />
                </ListItem>

                <Divider />

                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <MailIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary='List Item 3' />
                </ListItem>
            </List>
        </Box>
    )
};

export default MuiList;