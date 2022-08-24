import {React, useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function DropDown(props){

    const [option, setOptions] = useState();

    const handleChange = (event) => {
        setOptions(event.target.value);
        props.optionSubmit(event.target.value);
    };    

    const renderedOptions = props.options.map((option) => (
        <MenuItem 
            key={option.value} 
            value={option.value}
            data-cy={`option-${option.value}`}
        >
            {option.label}
        </MenuItem>
    ))

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    id="outlined-select-color"
                    select
                    label="Select"
                    data-cy="selector-option"
                    value={option}
                    onChange={handleChange}
                    helperText="Please select your color"
                >
                    {renderedOptions}
                </TextField>
            </div>
        </Box>
    );
}

export default DropDown;