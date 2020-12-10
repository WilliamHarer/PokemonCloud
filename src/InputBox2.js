import {Autocomplete} from "@material-ui/lab";
import {TextField} from "@material-ui/core";
import React, {useRef, useState} from "react";
export default function InputBox2(props){
    const ref0=useRef();
    const [pokemon1,setPokemon1]=useState(props.pokemon[0]);
    const [pokemon2,setPokemon2]=useState(props.pokemon[0]);
    const [pokemon3,setPokemon3]=useState(props.pokemon[0]);
    const [pokemon4,setPokemon4]=useState(props.pokemon[0]);
    const [pokemon5,setPokemon5]=useState(props.pokemon[0]);
    const [pokemon6,setPokemon6]=useState(props.pokemon[0]);

        return(
            /*<Autocomplete
                name={props.name}
                ref={ref0}
                options={props.pokemon}
                //onChange={handleChange}
                //onChange={(event,value)=>console.log(value)}
                /*onInputChange={(e, v, r) => {
                    const ev = e.target;
                    if (r === "reset") console.log(ev, v, r);
                }}*/
                /*onChange={(e, v, r) => {
                    console.log(ref0.current.getAttribute("name"));
                    setPokemon(v);
                    console.log(v);

                }}
                getOptionLabel={(option) => option.name}
                style={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
            />*/
            <form>
                <Autocomplete
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
                    value={pokemon3}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon3(v);
                        console.log(v);

                    }}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    value={pokemon4}
                    options={props.pokemon}
                    getOptionLabel={(option) => option.name}
                    //onChange={(event,value)=>console.log(value)}
                    onChange={(e, v, r) => {
                        setPokemon4(v);
                        console.log(v);

                    }}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    value={pokemon5}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon5(v);
                        console.log(v);

                    }}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <Autocomplete
                    value={pokemon6}
                    options={props.pokemon}
                    onChange={(e, v, r) => {
                        setPokemon6(v);
                        console.log(v);

                    }}
                    //onChange={(event,value)=>console.log(value)}
                    getOptionLabel={(option) => option.name}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
                />
                <input type="submit" value="save team" onClick={(e)=>{
                    let team={team:{pokemon1,pokemon2,pokemon3,pokemon4,pokemon5,pokemon6}}
                    console.log(team);}}/>
            </form>

        );
}