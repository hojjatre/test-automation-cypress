import React from "react";
import TextInput from './components/TextInput';
import Dropdown from "./components/DropDown";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const options = [
    {
        label: "Red",
        value: 'red'
    },
    {
        label: 'Green',
        value: 'green'
    },
    {
        label: 'Blue',
        value: 'blue'
    },
];

class App extends React.Component {
    state = {name: null, option: null, message: 'No submition'};

    onNameSubmit = (name) => {
        this.setState({name: name});
    };

    onOptionSubmit = (option) => {
        this.setState({option: option});
    };

    onSubmitButton = (event) => {
        this.setState({
            message: "My name is " + this.state.name + " and My favorit color is " + this.state.option + '.'
        });
    };

    onDeleteButton = (event) => {
        this.setState({
            message: "No submition"
        });
    }


    render() {
        return (
            <div>
                <TextInput textSubmit={this.onNameSubmit}/>
                <br></br>
                <Dropdown 
                    options={options} 
                    optionSubmit={this.onOptionSubmit} 
                />
                <br></br>
                <Stack spacing={2} direction="row">
                    <Button 
                        variant="contained" 
                        onClick={this.onSubmitButton}>Submit
                    </Button>
                </Stack>
                <br></br>
                <h2>{this.state.message}</h2>
                <Stack spacing={2} direction="row">
                <Button 
                    variant="contained" 
                    color="error"
                    onClick={this.onDeleteButton}>Delete
                </Button>
                </Stack>
            </div>
        )
    };
};

export default App;