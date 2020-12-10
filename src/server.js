/*
 * server code to connect with DB
 */
import express, { static } from 'express';
import { resolve } from 'path';
import { json } from 'body-parser';
import { MongoClient as mongodb } from 'mongodb';
import { ObjectID } from 'mongodb';

const MONGO_URL = 'mongodb://localhost:27017/';
const app = express();
const jsonParser = json();
app.use(static('public'));
let db = null;
let collection = null;

/* Complete the onSaveCard function, which takes in an HTTP request 'req'.
* 'req' is sent when _onFormSubmit in "public/js/creator-view.js" is executed.
* The request sends 'const params = {style: this.style, message: this.message}'
* to the Node server.*/
//The above is to show how to control the request params
//for example const params={team:{first:this.first,second:this.second,....,sixth:this.sixth}
//so we could do routeparams=req.params
//team=routeparams.team
//poke1=team.first
//or maybe just saving team is all we need?

//Below is example code from assnmnt 4
/* *
 * After receiving the request, the Node server should save it in the 'card' collection
 * in MongoDB and return the document ID as the 'cardID'.
 *
 * 'res' is the response which contains a json object.
 *
async function onSaveCard(req, res) {
    const routeParams = req.params;
    const id 		= routeParams.id;
    const style		= req.body.style;
    const message	= req.body.message;
    const query		= {cardID:id};
    const newEntry 	= {id:id,style:style,message:message};
    const params 	= {upsert:true};
    const response 	= await db.collection('cards').update(query,newEntry,params);
    res.json({success:true});
}*/
async function onSaveTeam(req, res){
    //Save stuff to mongo return ID
    const routeParams = req.params;
    const id = routeParams.id;
    const team = routeParams.team;
    const query = { pokemonID: id };
    const newEntry = {id: id, team: team}
    const params = {upsert: true};
    const response = await db.collection('team').update(query, newEntry, params);
    res.json({success: true});
    return res.send('TeamIDfromMongo')
}

app.post('/save', jsonParser, onSaveTeam);

app.get('/getTeam',function(req,res){
    //get stuff from mongo based on ID
    return res.send('teamResultBasedOnID')
})
app.listen(8080)



/* {team: [
        mon1
        mon2,
        3,
        4
        5
        6
]}