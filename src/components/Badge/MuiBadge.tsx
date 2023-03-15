// Mui
import {
    Stack,
    Badge
} from '@mui/material';
// Icons
import MailIcon from '@mui/icons-material/Mail';

const MuiBadge = () => {
    return (
        <Stack spacing={2} direction='row'>
            <Badge badgeContent={5} color='error'>
                <MailIcon />
            </Badge>

            <Badge badgeContent={0} color='success' showZero>
                <MailIcon />
            </Badge>

            <Badge badgeContent={38} color='error' max={999}>
                <MailIcon />
            </Badge>

            <Badge variant='dot' color='primary' invisible={true}>{/* invisible={unreadEmails.length === 0} */}
                <MailIcon />
            </Badge>
        </Stack>
    )
};

export default MuiBadge;

// generates a small badge to the top right of its child element