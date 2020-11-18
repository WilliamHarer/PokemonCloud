import React from 'react';
import {TextField} from '@material-ui/core';
import {Autocomplete} from "@material-ui/lab";

function InputBox(props) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={this.props.pokemon}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
        />
    );
}