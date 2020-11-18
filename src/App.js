import logo from './logo.svg';
//import InputBox from "./InputBox";
import './App.css';
import pokemon from "./pokemon.json"
import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import React from "react";
//Getpokemon() getPokemon.js
//does it go here?
//const pokemon=getpokemon()?
function App() {

  function InputBox(props) {
    return (
        <Autocomplete
            id="combo-box-demo"
            options={props.pokemon}
            getOptionLabel={(option) => option.name}
            style={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="pokemon" variant="outlined" style={{backgroundColor: 'white', borderRadius: "5px",margin:'5px'}}/>}
        />
    );
  }
  ///does it go here?
  const poke=pokemon['pokemon']
  return (
    <div className="App">
      <header className="App-header">
        <InputBox pokemon={poke}/>
        <InputBox pokemon={poke}/>
        <InputBox pokemon={poke}/>
        <InputBox pokemon={poke}/>
        <InputBox pokemon={poke}/>
        <InputBox pokemon={poke}/>
      </header>
    </div>
  );
}

export default App;
