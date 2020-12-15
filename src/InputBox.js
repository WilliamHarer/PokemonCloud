import React, {useRef} from 'react';
import {TextField} from '@material-ui/core';
import {Autocomplete} from "@material-ui/lab";

export class InputBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon1:this.props.pokemon[0],
            pokemon2:this.props.pokemon[0],
            pokemon3:this.props.pokemon[0],
            pokemon4:this.props.pokemon[0],
            pokemon5:this.props.pokemon[0],
            pokemon6:this.props.pokemon[0],};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event,value) => {
        this.setState({[event.target.name]:event.target.value});
        console.log(value);
        console.log(event.target.name);
    }
    handleSubmit(event) {
        alert('A pokemon was submitted'+ this.state.value);
        event.preventDefault();
    }
    render() {
        const {pokemon1, pokemon2, pokemon3, pokemon4, pokemon5, pokemon6} = this.state;
        return(
            <form>
                <Autocomplete
                    value = {pokemon1}
                    options = {this.props.pokemon}
                    onChange = {this.handleChange}
                    name = "pokemon1"
                    onChange = {(event, value) => console.log(value)}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {
                        (params) => <TextField {...params} label="Combo box" variant="outlined" 
                        />
                    }
                />
                <Autocomplete
                    value = {pokemon2}
                    name = "pokemon2"
                    options = {this.props.pokemon}
                    onChange = {this.handleChange}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {
                        (params) => <TextField {...params} label="Combo box" variant="outlined" 
                        />
                    }
                />
                <Autocomplete
                    value = {pokemon3}
                    name = "pokemon3"
                    options = {this.props.pokemon}
                    onChange = {this.handleChange}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {
                        (params) => <TextField {...params} label="Combo box" variant="outlined" 
                        />
                    }
                />
                <Autocomplete
                    value = {pokemon4}
                    name = "pokemon4"
                    options = {this.props.pokemon}
                    onChange = {this.handleChange}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {
                        (params) => <TextField {...params} label="Combo box" variant="outlined" 
                        />
                    }
                />
                <Autocomplete
                    value = {pokemon5}
                    name = "pokemon5"
                    options = {this.props.pokemon}
                    onChange = {this.handleChange}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {(params) => <TextField {...params} label="Combo box" variant="outlined" 
                    />
                }
                />
                <Autocomplete
                    value = {pokemon6}
                    name = "pokemon6"
                    options = {this.props.pokemon}
                    onChange = {this.handleChange}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel = {(option) => option.name}
                    style = {{ width: 300 }}
                    renderInput = {(params) => <TextField {...params} label="Combo box" variant="outlined" 
                    />
                }
                />
                <input type="submit" value = "Submit" />
            </form>
        );
    }
}