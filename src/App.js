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
    const poke = pokemon['pokemon']
    const typeDict={'normal':0, 'fire':1, 'fighting':2, 'water':3, 'flying':4, 'grass':5, 'poison':6, 'electric':7, 'ground':8, 'psychic':9, 'rock':10, 'ice':11, 'bug':12, 'dragon':13, 'ghost':14, 'dark':15, 'steel':16, 'fairy':17}
    function calc(pokemon) {
        //no,fir,fig,wa,fl,grass,po,el,gr,psy,ro,ice,bug,dra,gho,drk,ste,fairy
        //Does the branch replace master?
        const typeSet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
        let typesDef = [[1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1],
            [1, .5, 1, 2, 1, .5, 1, 1, 2, 1, 2, .5, .5, 1, 1, 1, .5, .5],
            [1, 1, 1, 1, 2, 1, 1, 1, 1, 2, .5, 1, .5, 1, 1, .5, 1, 2],
            [1, .5, 1, .5, 1, 2, 1, 2, 1, 1, 1, .5, 1, 1, 1, 1, .5, 1],
            [1, 1, .5, 1, 1, .5, 1, 2, 0, 1, 2, 2, .5, 1, 1, 1, 1, 1],
            [1, 2, 1, .5, 2, .5, 2, .5, .5, 1, 1, 2, 2, 1, 1, 1, 1, 1],
            [1, 1, .5, 1, 1, .5, .5, 1, 2, 2, 1, 1, .5, 1, 1, 1, 1, .5],
            [1, 1, 1, 1, .5, 1, 1, .5, 2, 1, 1, 1, 1, 1, 1, 1, .5, 1],
            [1, 1, 1, 2, 1, 2, .5, 0, 1, 1, .5, 2, 1, 1, 1, 1, 1, 1],
            [1, 1, .5, 1, 1, 1, 1, 1, 1, .5, 1, 1, 2, 1, 2, 2, 1, 1],
            [.5, .5, 2, 2, .5, 2, .5, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1],
            [1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 2, .5, 1, 1, 1, 1, 2, 1],
            [1, 2, .5, 1, 2, .5, 1, 1, .5, 1, 2, 1, 1, 1, 1, 1, 1, 1],
            [1, .5, 1, .5, 1, .5, 1, .5, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2],
            [0, 1, 0, 1, 1, 1, .5, 1, 1, 1, 1, 1, .5, 1, 2, 2, 1, 1],
            [1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 2, 1, .5, .5, 1, 2],
            [.5, 2, 2, 1, .5, .5, 0, 1, 2, .5, .5, .5, .5, .5, 1, 1, .5, .5],
            [1, 1, .5, 1, 1, 1, 2, 1, 1, 1, 1, 1, .5, 0, 1, .5, 2, 1]]
        let types=[] //make this a set later
        for(let i=0;i<pokemon.length;i++){
            for(let j=0;j<pokemon['types'].length;i++){
                types.push(typesDef[typeDict[pokemon[i]['types'][j]]])
            }
            let calctypes = []
            if(types.length>1) {
                for (let j = 0; j < types[0].length(); j++) {
                    calctypes.push(types[0][j] * types[1][j])
                }
            }
            else calctypes = types
            for(let j=0;j<types[0].length();j++){
                if(calctypes<2){
                    typeSet[j]=1
                }
            }
        }
        return typeSet
    }
  ///does it go here?
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
