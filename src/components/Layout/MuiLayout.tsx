// Mui
import {
    Box,
    Stack,
    Divider,
    Grid,
    Paper
} from '@mui/material';

const MuiLayout = () => {
    return (
        <Paper sx={{ padding: '32px' }} elevation={8}>
            <Stack
                sx={{ border: '1px solid' }}
                direction='row-reverse'
                spacing={2}
                divider={<Divider orientation='vertical' flexItem />}
            >
                <Box
                    sx={{
                        backgroundColor: 'primary.main',
                        color: 'pink',
                        height: '100px',
                        width: '100px',
                        padding: '16px',
                        '&:hover': {
                            backgroundColor: 'primary.light',
                        },
                    }}
                >
                    MuiLayout
                </Box>
                <Box
                    display='flex'
                    height='100px'
                    width='100px'
                    bgcolor='success.light'
                    p={2}
                >
                </Box>
            </Stack>

            <Grid container my={4} rowSpacing={2} columnSpacing={1}>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 1
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 2
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 3
                    </Box>
                </Grid>
                <Grid item xs={6}>
                    <Box bgcolor='primary.light' p={2}>
                        Item 4
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    )
};

export default MuiLayout;
// Stack component - default style for children elements: display flex and flex direction column
// - sx={{border: '1px solid'}}
// - Can wrap the box components
// - spacing={2} multiplied by 8px

// Box component accepts a prop called sx which can be used for defining a custom style that has access to the theme
// - Wrapper component, it can be different tags
// - p={2} // padding: 16px;

// Grid
// - The Grid component under the hood uses the flexbox module
// - Consists of 12 columns
// - Each item in the grid can take up one or more columns as its width
// - There are five breakpoints each corresponding to a certain device width
// 1. xs for mobile
// 2. sm for tablet
// 3. md for desktop
// 4. lg and xl for larger monitors
// - We can assign integer values to each breakpoint which indicates how many of the 12 available columns are
// occupied by that item when the viewport satisfies that break point constraints
// {xs}={6} all devices, mobile size and above assign 6 out of 12 columns for the grid item


// Paper component
// - Example: signup section or a contact form, a common ui design is to put that content in a card with some elevation and a shadow
// - Used instead of the react fragments
// - Control the shadow with the elevation prop, the default value is 1
// - It's a component that is used under the hood to build the Card component in mui
