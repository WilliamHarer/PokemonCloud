import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import React, {useCallback, useRef, useState} from "react";
import {useHistory} from 'react-router-dom';
import './InputBox2.css'
import Paper from "@material-ui/core/Paper";
import pokemon from "./pokemon.json";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
export default function InputBox2(props){
    const [teamName,setTeamName]=useState("")
    const [pokemon1,setPokemon1]=useState(props.pokemon[0]);
    const [pokemon2,setPokemon2]=useState(props.pokemon[0]);
    const [pokemon3,setPokemon3]=useState(props.pokemon[0]);
    const [pokemon4,setPokemon4]=useState(props.pokemon[0]);
    const [pokemon5,setPokemon5]=useState(props.pokemon[0]);
    const [pokemon6,setPokemon6]=useState(props.pokemon[0]);
    const history=useHistory();
    const redirectClick=useCallback((params)=> history.push(`/results`,{teamInfo:params}),[history]);
    const typeDict={'normal':0, 'fire':1, 'fighting':2, 'water':3, 'flying':4, 'grass':5, 'poison':6, 'electric':7, 'ground':8, 'psychic':9, 'rock':10, 'ice':11, 'bug':12, 'dragon':13, 'ghost':14, 'dark':15, 'steel':16, 'fairy':17}
    function calc() {
        //no,fir,fig,wa,fl,grass,po,el,gr,psy,ro,ice,bug,dra,gho,drk,ste,fairy
        //0  1   2   3   4  5    6  7   8  9  10  11   12  13 14  15 16   17
        let pokemon=[pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6];
        let typeSet=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
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
            [1, 1, .5, 1, 1, 1, 2, 1, 1, 1, 1, 1, .5, 0, 1, .5, 2, 1]]//make this a set later
        for(let i=0;i<pokemon.length;i++){
            let types=[]
            types.push(typesDef[typeDict[pokemon[i].type1]])
            if(pokemon[i].type2!=null){
                types.push(typesDef[typeDict[pokemon[i].type2]])
            }
            let calctypes = []
            if(types.length>1) {
                for (let j = 0; j < types[0].length; j++) {
                    calctypes.push(types[0][j] * types[1][j])
                }
            }
            else calctypes = types[0]
            for(let j=0;j<types[0].length;j++){
                if(calctypes[j]<2){
                    typeSet[j]=1
                }
            }
            console.log(pokemon[i])
            console.log(calctypes)
            console.log(typeSet)
        }
        console.log(typeSet)
        let types=['normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy']
        let retTypes=[]
        for(let i=0;i<typeSet.length;i++){
            if(typeSet[i]==0){
                retTypes.push(types[i])
            }
        }
        setWeaknesses(retTypes)
    }
    async function getTeam(){
        console.log(teamName);
        const result = await fetch(`/get/${teamName}`);
        const json = await result.json();
        console.log(json)
        let params=json
        redirectClick(params);
    }
    async function saveTeam(){
        const params = {
            teamName: teamName,
            team: {pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6}

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
        console.log(json)
        redirectClick(params);
    }
    const [weaknesses,setWeaknesses]=useState(['normal', 'fire', 'fighting', 'water', 'flying', 'grass', 'poison', 'electric', 'ground', 'psychic', 'rock', 'ice', 'bug', 'dragon', 'ghost', 'dark', 'steel', 'fairy'])
        return(
            <div>
                <Grid container spacing={3}>
                <Grid item xs={6}>
            <form>
                <TextField id="filled-basic" label="Filled" variant="filled" value={teamName} onChange={e => {
                    setTeamName(e.target.value);
                    console.log(e.target.value);
                }}/>
                <Autocomplete
                    className="pokemon"
                    value={pokemon1}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon1(v);
                        console.log(v);

                    }}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    className="pokemon"
                    value={pokemon2}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon2(v);
                        console.log(v);

                    }}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    className="pokemon"
                    value={pokemon3}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon3(v);
                        console.log(v);

                    }}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    className="pokemon"
                    value={pokemon4}
                    options={props.pokemon}
                    getOptionLabel={(option) => option.name}
                    onChange={(e, v, r) => {
                        setPokemon4(v);
                        console.log(v);

                    }}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    className="pokemon"
                    value={pokemon5}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon5(v);
                        console.log(v);

                    }}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    className="pokemon"
                    value={pokemon6}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon6(v);
                        console.log(v);

                    }}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
            </form>
            <input type="button" value="Save Team" onClick={(e)=>saveTeam()}/>
            <input type="button" value="Get Team" onClick={(e)=>getTeam()}/>
            <h2 className="Info">Input a previously stored team name you wish to get the values of into the team Name box</h2>
            </Grid>
            <Grid item xs={6}>
            <input type="button" value="Calculate Types" onClick={(e)=>calc()}/>
            <div className="weakness">
                <Typography>
                    {weaknesses.join(",").split(",").map((i,key) => {
                        return <div key={key}>{i}</div>;
                    })}
                </Typography>
                <Typography>If No types Appear Above then you have no Weaknesses</Typography>
            </div>
            </Grid>
            </Grid>
            </div>
        );
}