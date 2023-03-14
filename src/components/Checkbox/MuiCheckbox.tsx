// Core
import { useState } from 'react';
// Mui
import {
    Box,
    FormControlLabel,
    FormControl,
    FormLabel,
    FormGroup,
    Checkbox,
    FormHelperText
} from '@mui/material';
// Icons
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BorderIcon from '@mui/icons-material/Bookmark';

const MuiCheckbox = () => {
    const [isChecked, setIsChecked] = useState<boolean>(false);
    console.log({ isChecked });
    const [skills, setSkills] = useState<string[]>([]);
    console.log({ skills });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsChecked(event.target.checked);
    };

    // toggle the value in the array, if the value is present remove it, if not add it in
    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value); // take the index
        if (index === -1) { // if its not present
            setSkills([...skills, event.target.value]); // spread the existing skills and add the nex checked skill
        } else { // if it exists in the array
            setSkills(skills.filter(skill => skill !== event.target.value)); // we remove the skill and return only those skills which are not equal to the current unchecked skill
        }
    };

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label='I accept terms and conditions'
                    control={<Checkbox checked={isChecked} onChange={handleChange} />}
                />
            </Box>

            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon />}
                    checkedIcon={<BorderIcon />}
                    checked={isChecked}
                    onChange={handleChange}
                />
            </Box>

            <Box>
                {/* <FormControl error> */}
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label='HTML'
                            value='html'
                            control={
                                <Checkbox
                                    checked={skills.includes('html')}
                                    onChange={handleSkillChange}
                                    size='small'
                                    color='secondary'
                                />
                            }
                        />
                        <FormControlLabel
                            label='CS'
                            value='css'
                            control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
                        />
                        <FormControlLabel
                            label='JavaScript'
                            value='javascript'
                            control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                        />
                    </FormGroup>
                    {/* <FormHelperText error>
                        invalid section
                    </FormHelperText> */}
                </FormControl>
            </Box>
        </Box>
    )
};

export default MuiCheckbox;