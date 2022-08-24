import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function TextInput(props) {
    const [name, setName] = React.useState();
    const handleChange = (event) => {
        setName(event.target.value);
        props.textSubmit(event.target.value);
    };
  return (
    <Box
        component="form"
        sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
    >
        <TextField
            id="outlined-name"
            label="Name"
            value={name}
            onChange={handleChange}
        />
    </Box>
  );
}

export default TextInput;