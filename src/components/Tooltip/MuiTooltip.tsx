// Mui
import {
    Tooltip,
    IconButton
} from '@mui/material';
// Icons
import DeleteIcon from '@mui/icons-material/Delete';

const MuiTooltip = () => {
    return (
        <Tooltip
            title='Delete'
            placement='right'
            arrow
            enterDelay={500}
            leaveDelay={200}
        >
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
};

export default MuiTooltip;

// display informative text when users hover over, focus on, tap an element
// useful for icons