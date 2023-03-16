// Mui
import { createTheme, colors, ThemeProvider } from '@mui/material';
// UI 
import MuiButton from './components/Button (onChange, onClick)/MuiButton';
import MuiTypography from './components/Typography/MuiTypography';
import MuiTextField from './components/TextField (toggle, onChange)/MuiTextField';
import MuiSelect from './components/Select (onChange, map)/MuiSelect';
import MuiRadioButton from './components/RadioButton (onChange)/MuiRadioButton';
import MuiCheckbox from './components/Checkbox (onChange)/MuiCheckbox';
import MuiSwitch from './components/Switch (onChange)/MuiSwitch';
import MuiRating from './components/Rating (onChange)/MuiRating';
import MuiAutocomplete from './components/Autocomplete (onChange, type)/MuiAutocomplete';
import MuiLayout from './components/Layout/MuiLayout';
import MuiCard from './components/Card/MuiCard';
import MuiAccordion from './components/Accordion (onChange)/MuiAccordion';
import MuiImageList from './components/ImageList/MuiImageList';
import MuiNavbar from './components/NavBar (onClick, onClose)/MuiNavbar';
import MuiBottomNav from './components/BottomNav (onChange)/MuiBottomNav';
import MuiLink from './components/Link/MuiLink';
import MuiBreadcrumbs from './components/Breadcrumbs/MuiBreadcrumbs';
import MuiDrawer from './components/Drawer/MuiDrawer';
import MuiSpeedDial from './components/SpeedDial/MuiSpeedDial';
import MuiAvatar from './components/Avatar/MuiAvatar';
import MuiBadge from './components/Badge/MuiBadge';
import MuiList from './components/List/MuiList';
import MuiChip from './components/Chip (filter)/MuiChip';
import MuiTooltip from './components/Tooltip/MuiTooltip';
import MuiTable from './components/Table (map)/MuiTable';
import MuiAlert from './components/Alert/MuiAlert';
import MuiSnackBar from './components/SnackBar (openClose, alert)/MuiSnackBar';
import MuiDialog from './components/Dialog/MuiDialog';
import MuiProgress from './components/Progress/MuiProgress';
import MuiSkeleton from './components/Skeleton (useEffect, ternaryOperator)/MuiSkeleton';
import MuiLoadingButton from './components/LoadingButton/MuiLoadingButton';
import MuiTabs from './components/Tabs (onChange)/MuiTabs';
import MuiTimeline from './components/Timeline/MuiTimeline';
import MuiMasonry from './components/Masonry/MuiMasonry';
import MuiResponsiveness from './components/Responsiveness (values, style)/MuiResponsiveness';
// Style
import './App.css';

const theme = createTheme({
    status: {
        danger: '#f50057'
    },
    palette: {
        secondary: {
            main: colors.pink[300]
        },
        neutral: {
            main: colors.grey[500],
            darker: colors.grey[800]
        }
    }
});

// bgcolor: 'secondary.main'
// bgcolor: 'secondary.light'
// bgcolor: 'secondary.dark'

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                {/* <MuiTypography /> */}
                {/* <MuiButton /> */}
                {/* <MuiTextField /> */}
                {/* <MuiSelect /> */}
                {/* <MuiRadioButton /> */}
                {/* <MuiCheckbox /> */}
                {/* <MuiSwitch /> */}
                {/* <MuiRating /> */}
                {/* <MuiAutocomplete /> */}
                {/* <MuiLayout /> */}
                {/* <MuiCard /> */}
                {/* <MuiAccordion /> */}
                {/* <MuiImageList /> */}

                {/* Navigation */}
                {/* <MuiNavbar /> */}
                {/* <MuiLink /> */}
                {/* <MuiBreadcrumbs /> */}
                {/* <MuiDrawer /> */}
                {/* <MuiSpeedDial /> */}
                {/* <MuiBottomNav /> */}
                {/* <MuiAvatar /> */}

                {/* <MuiBadge /> */}
                {/* <MuiList /> */}
                {/* <MuiChip /> */}
                {/* <MuiTooltip /> */}
                {/* <MuiTable /> */}
                {/* <MuiAlert /> */}
                {/* <MuiSnackBar /> */}
                {/* <MuiDialog /> */}
                {/* <MuiProgress /> */}
                {/* <MuiSkeleton /> */}
                {/* <MuiLoadingButton /> */}
                {/* <MuiTabs /> */}
                {/* <MuiTimeline /> */}
                {/* <MuiMasonry /> */}
                {/* <MuiResponsiveness /> */}
            </div>
        </ThemeProvider>
    );
};

export default App;
