// Core
import { useState } from 'react';
// Mui
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@mui/material";
// Icons
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const MuiAccordion = () => {
    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (isExpanded: boolean, panel: string) => {
        setExpanded(isExpanded ? panel : false); // we pass in a value based on isExpanded, if it is expanded we specify the panel string value, else we specify false
    };

    return (
        <div>
            <Accordion
                expanded={expanded === 'panel1'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel1')}
            >
                <AccordionSummary
                    id='panel1-header'
                    aria-controls='panel1-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus libero ullam labore ab! Tenetur illum fugit magni ullam velit aut voluptatibus sunt earum perferendis quae. Distinctio itaque in praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel2'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel2')}
            >
                <AccordionSummary
                    id='panel2-header'
                    aria-controls='panel2-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus libero ullam labore ab! Tenetur illum fugit magni ullam velit aut voluptatibus sunt earum perferendis quae. Distinctio itaque in praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion
                expanded={expanded === 'panel3'}
                onChange={(event, isExpanded) => handleChange(isExpanded, 'panel3')}
            >
                <AccordionSummary
                    id='panel3-header'
                    aria-controls='panel3-content'
                    expandIcon={<ExpandMoreIcon />}
                >
                    <Typography>Accordion 3</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet temporibus libero ullam labore ab! Tenetur illum fugit magni ullam velit aut voluptatibus sunt earum perferendis quae. Distinctio itaque in praesentium?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </div>
    )
};

export default MuiAccordion;