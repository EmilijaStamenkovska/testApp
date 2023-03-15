// Mui
import { Stack, Avatar, AvatarGroup } from '@mui/material';

const MuiAvatar = () => {
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={1}>
                <Avatar sx={{ bgcolor: 'warning.light' }}>BW</Avatar>
                <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
            </Stack>

            <Stack direction='row' spacing={1}>
                <AvatarGroup max={3}>
                    <Avatar sx={{ bgcolor: 'warning.light' }}>BW</Avatar>
                    <Avatar sx={{ bgcolor: 'success.light' }}>CK</Avatar>
                    <Avatar
                        src='https://randomuser.me/api/portraits/women/19.jpg'
                        alt='Jane Doe'
                    />
                    <Avatar
                        src='https://randomuser.me/api/portraits/women/26.jpg'
                        alt='Jane Doe'
                    />
                </AvatarGroup>
            </Stack>

            <Stack direction='row' spacing={1}>
                <Avatar variant='square' sx={{ bgcolor: 'warning.light', width: 48, height: 48 }}>BW</Avatar>
                <Avatar variant='rounded' sx={{ bgcolor: 'success.light', width: 48, height: 48 }}>CK</Avatar>
            </Stack>
        </Stack>
    )
};

export default MuiAvatar;