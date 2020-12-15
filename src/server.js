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
    console.log('listening on port 8080');
}
startDbAndServer();
async function onSaveTeam(req, res) {
    const routeParams = req.body;
    const team        = routeParams.team;
    const teamName    = routeParams.teamName;
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
    console.log(res)
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