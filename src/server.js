const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');
const mongodb = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID
const MONGO_URL='mongodb://localhost:27017/teams-db';
const app = express();
const jsonParser=bodyParser.json();
app.use(express.static('public'));
let db=null;


async function startDbAndServer(){
    mongodb.connect(MONGO_URL,(err,client)=>{
        if(err) throw err;
        db=client.db('teams')
        console.log(db)
    });
    await app.listen(8080);
    //console.log(conRes);
    console.log('listening on port 8080');
}
startDbAndServer();
//const app = express();

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
// async function onSaveTeam(req, res){
//     const routeParams=req.params;
//     const team=routeParams.team;
//     const query = {teamID:id};
//     const newEntry={team:team};
//     const params =  {upsert:true};
//     const response = await db.collection('teams').update(query,newEntry,params);
//     //Save stuff to mongo return ID
//     return res.send('TeamIDfromMongo')
// }
async function onSaveTeam(req, res) {
    //console.log(req)
    const routeParams = req.body;
    //console.log(routeParams)
    const team        = routeParams.team;
    const teamName    = routeParams.teamName;
    //console.log(team);
    //console.log(teamName);
    const query = {
        teamName: teamName
    };
    const newEntry = {$set:{
        teamName: teamName,
        team: team
    }};
    const params={upsert:true}
    const response = await db.collection('teams').findOneAndUpdate(query, newEntry,params);
    res.json(response)
}
app.post('/save',jsonParser,onSaveTeam);

async function onGetCard(req,res) {
    console.log(req)
    const routeParams = req.params;
    console.log(routeParams)
    const teamName = routeParams.teamName;
    const query = {teamName:teamName};
    const result = await db.collection('teams').findOne(query);
    const response = {
        teamName:teamName,
        team : result ? result.team: ''
    }
    console.log(response)
    res.json(response);
}
app.get('/get/:teamName',onGetCard);
// app.listen(8080)