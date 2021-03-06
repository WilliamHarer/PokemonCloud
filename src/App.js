import InputBox2 from "./InputBox2";
import Results from "./Results";
import './App.css';
import pokemon from "./pokemon.json"
import React, {useState} from "react";
import {BrowserRouter} from "react-router-dom";
import {Route, Router, Switch, useLocation} from "react-router";
function App() {
    const poke = pokemon['pokemon']
    const names= ["pke1","pke2","pk3","pk4","pk5","pk6"]
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
    let location=useLocation();
    async function ClickSave(e){
      e.preventDefault(e)
      const target=e.target;
      console.log(target.poke1.value)
      const params = {
            team:pokemon
        }
        const fetchOptions = {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        };
        const result = await fetch('/save', fetchOptions);
        const json = await result.json();
    }
  return (
          <BrowserRouter>
              <Switch>
                  <Route path="/results">
                      <Results/>
                  </Route>
                  <Route path="/">
                      <div className="App">
                          <header className="App-header">
                            <InputBox2 pokemon={poke}/>
                          </header>
                      </div>
                  </Route>
              </Switch>
          </BrowserRouter>
  );
}
export default App;
