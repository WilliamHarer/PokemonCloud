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
  const typesOff=['normal','fire','fighting','water','flying','grass','poison','electric','ground','psychic','rock','ice','bug','dragon','ghost','dark','steel','fairy']
  //no,fir,fig,wa,fl,grass,po,el,gr,psy,ro,ice,bug,dra,gho,drk,ste,fairy
  let typesDef=[[1,1,2,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1],
                [1,.5,1,2,1,.5,1,1,2,1,2,.5,.5,1,1,1,.5,.5],
                [1,1,1,1,2,1,1,1,1,2,.5,1,.5,1,1,.5,1,2],
                [1,.5,1,.5,1,2,1,2,1,1,1,.5,1,1,1,1,.5,1],
                [1,1,.5,1,1,.5,1,2,0,1,2,2,.5,1,1,1,1,1],
                [1,2,1,.5,2,.5,2,.5,.5,1,1,2,2,1,1,1,1,1],
                [1,1,.5,1,1,.5,.5,1,2,2,1,1,.5,1,1,1,1,.5],
                [1,1,1,1,.5,1,1,.5,2,1,1,1,1,1,1,1,.5,1],
                [1,1,1,2,1,2,.5,0,1,1,.5,2,1,1,1,1,1,1],
                [1,1,.5,1,1,1,1,1,1,.5,1,1,2,1,2,2,1,1],
                [.5,.5,2,2,.5,2,.5,1,2,1,1,1,1,1,1,1,2,1],
                [1,2,2,1,1,1,1,1,1,1,2,.5,1,1,1,1,2,1],
                [1,2,.5,1,2,.5,1,1,.5,1,2,1,1,1,1,1,1,1],
                [1,.5,1,.5,1,.5,1,.5,1,1,1,2,1,2,1,1,1,2],
                [0,1,0,1,1,1,.5,1,1,1,1,1,.5,1,2,2,1,1],
                [1,1,2,1,1,1,1,1,1,0,1,1,2,1,.5,.5,1,2],
                [.5,2,2,1,.5,.5,0,1,2,.5,.5,.5,.5,.5,1,1,.5,.5],
                [1,1,.5,1,1,1,2,1,1,1,1,1,.5,0,1,.5,2,1]]
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
