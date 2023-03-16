// Core
import { useState, useEffect } from 'react';
// Mui
import {
    Stack,
    Skeleton,
    Box,
    Avatar,
    Typography
} from '@mui/material';

const MuiSkeleton = () => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    }, []);

    return (
        // <Stack spacing={2} width='250px'>
        //     <Skeleton
        //         animation='wave'
        //         variant='text'
        //     />
        //     <Skeleton
        //         animation='wave'
        //         variant='circular'
        //         width={40}
        //         height={40}
        //     />
        //     <Skeleton
        //         animation={false}
        //         variant='rectangular'
        //         width={250}
        //         height={125}
        //     />
        // </Stack>
        <Box sx={{ width: '250px' }}>
            {
                loading ? (
                    <Skeleton
                        variant='rectangular'
                        width={256}
                        height={144}
                        animation='wave'
                    />) :
                    (<img
                        src='https://source.unsplash.com/random/256x144'
                        alt='skeleton'
                        width={256}
                        height={144}
                    />)
            }
            <Stack
                direction='row'
                spacing={1}
                sx={{ width: '100%', marginTop: '12px' }}
            >
                {
                    loading ? (
                        <Skeleton
                            variant='circular'
                            width={40}
                            height={40}
                            animation='wave'
                        />
                    ) : <Avatar>ES</Avatar>
                }
                <Stack sx={{ width: '80%' }}>
                    {
                        loading ? <>
                            <Typography variant='body1'>
                                <Skeleton
                                    variant='text'
                                    width='100%'
                                    animation='wave'
                                />
                            </Typography>
                            <Typography variant='body2'>
                                <Skeleton
                                    variant='text'
                                    width='100%'
                                    animation='wave'
                                />
                            </Typography>
                        </> :
                            <>
                                <Typography variant='body1'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </Typography>
                            </>
                    }
                </Stack>
            </Stack>
        </Box>
    )
};

export default MuiSkeleton;

// Used to display a placeholder preview of the content before the data gets loaded to reduce load time frustration
// Default animation: pulse