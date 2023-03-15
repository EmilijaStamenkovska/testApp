// Mui
import {
    Box,
    Breadcrumbs,
    Link,
    Typography
} from '@mui/material';
// Icons
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MuiBreadcrumbs = () => {
    return (
        <Box m={2}>
            <Breadcrumbs
                aria-label='breadcrumb'
                separator={<NavigateNextIcon fontSize='small' />}
                maxItems={2}
                // itemsAfterCollapse={2}
                itemsBeforeCollapse={2}
            >
                <Link underline='hover' href='#'>Home</Link>
                <Link underline='hover' href='#'>Catalog</Link>
                <Link underline='hover' href='#'>Accessories</Link>
                <Typography color='text.primary'>Shoes</Typography>
            </Breadcrumbs>
        </Box>
    )
};

export default MuiBreadcrumbs;

// type of secondary navigation scheme that reveals the user's location in a website