// Core
import { useState } from 'react';
// Mui
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
// Icons
import FavoriteIcon from '@mui/icons-material/Favorite';

const MuiTabs = () => {
    const [value, setValue] = useState<string>('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider', width: '300px' }}>
                    <TabList
                        aria-label='tabs example'
                        onChange={handleChange}
                        textColor='secondary'
                        indicatorColor='secondary'
                        variant='scrollable'
                        scrollButtons='auto'
                    // centered
                    >
                        <Tab label='tab one' value='1' icon={<FavoriteIcon />} iconPosition='start' />
                        <Tab label='tab 2' value='2' disabled />
                        <Tab value='3' icon={<FavoriteIcon />} />
                        <Tab value='4' icon={<FavoriteIcon />} />
                        <Tab label='tab five' value='5' />
                        <Tab label='tab six' value='6' />

                    </TabList>
                </Box>
                <TabPanel value='1'>panel one</TabPanel>
                <TabPanel value='2'>panel two</TabPanel>
                <TabPanel value='3'>panel three</TabPanel>
                <TabPanel value='4'>panel four</TabPanel>
                <TabPanel value='5'>panel five</TabPanel>
                <TabPanel value='6'>panel six</TabPanel>

            </TabContext>
        </Box>
    )
};

export default MuiTabs;