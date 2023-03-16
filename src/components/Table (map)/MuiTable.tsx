// Mui
import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from '@mui/material';

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label='simple table' stickyHeader> {/* header for scrolling table*/}
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        <TableCell>first_name</TableCell>
                        <TableCell>last_name</TableCell>
                        <TableCell align='center'>email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) => {
                            return (
                                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child td': { border: 0 } }}>
                                    <TableCell>{row.id}</TableCell>
                                    <TableCell>{row.first_name}</TableCell>
                                    <TableCell>{row.last_name}</TableCell>
                                    <TableCell align='center'>{row.email}</TableCell>
                                </TableRow>
                            )
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default MuiTable;

const tableData = [{
    "id": 1,
    "first_name": "Daisie",
    "last_name": "Smullin",
    "email": "dsmullin0@arizona.edu"
}, {
    "id": 2,
    "first_name": "Gabbie",
    "last_name": "Mallabar",
    "email": "gmallabar1@linkedin.com"
}, {
    "id": 3,
    "first_name": "Emmi",
    "last_name": "Shiers",
    "email": "eshiers2@go.com43"
}, {
    "id": 4,
    "first_name": "Lorenzo",
    "last_name": "Nazareth",
    "email": "lnazareth3@wikispaces.com"
}, {
    "id": 5,
    "first_name": "Kayne",
    "last_name": "Cathrall",
    "email": "kcathrall4@altervista.org"
}, {
    "id": 6,
    "first_name": "Rozamond",
    "last_name": "Burkinshaw",
    "email": "rburkinshaw5@deviantart.com"
}, {
    "id": 7,
    "first_name": "Johann",
    "last_name": "Leppard",
    "email": "jleppard6@blogger.com"
}, {
    "id": 8,
    "first_name": "Cortie",
    "last_name": "von Hagt",
    "email": "cvonhagt7@wp.com"
}, {
    "id": 9,
    "first_name": "Brocky",
    "last_name": "Bashford",
    "email": "bbashford8@cyberchimps.com"
}, {
    "id": 10,
    "first_name": "Dare",
    "last_name": "Boydle",
    "email": "dboydle9@i2i.jp3"
}];