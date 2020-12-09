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
/*
 * connects to the MongoDB server and creates
 * a Node server listening to port 3000.
 */
async function startDbAndServer() {
    mongodb.connect(MONGO_URL, (err, client) => {
        var db = client.db('team')
        collection = db.collection('team');
    });
    await app.listen(3000);
    console.log('listening on port 3000');
}

startDbAndServer();
////////////////////////////////////////////////////////////////////////////////
/*
 * Complete the onSaveCard function, which takes in an HTTP request 'req'.
 * 'req' is sent when _onFormSubmit in "public/js/creator-view.js" is executed. 
 * The request sends 'const params = {style: this.style, message: this.message}'
 * to the Node server.
 * 
 * After receiving the request, the Node server should save it in the 'card' collection
 * in MongoDB and return the document ID as the 'cardID'. 
 *
 * 'res' is the response which contains a json object. 
 */

async function onSaveMon(req, res) {
    // Your code goes here.
    const routeParams = req.params;
    const id = routeParams.id;
    const style = req.body.style;
    const message = req.body.message;
    const query = { pokemonID: id };
    const newEntry = { id: id, monName: monName, type1: type1, type2: type2 };
    const params = { upsert: true };
    const response = await collection.update(query, newEntry, params);
    res.json({ success: true });
}

app.post('/save', jsonParser, onSaveMon);
/*
 * Complete the onGetMon function, which takes in an HTTP request 'req'.
 * 'req' is sent when _loadCard() in "public/js/card-view.js" is executed
 * or when a URL (e.g., http://localhost:3000/id/5bbb8a07ebbf6a9cf4d839f5)
 * is entered in your browser. The request sends a cardID to the Node server.
 * The cardID is also a document ID in MongoDB.
 *
 * After receiving the request, the Node server should search the cardID in
 * the 'card' collection and return the content of the stored document matching
 * the cardID to the browser.
 */
async function onGetMon(req, res) {
    const routeParams = req.params;
    const id = routeParams.id;
    const query = { pokemonID: id };
    const result = await collection.findOne(query);
    const response = {
        id: id,
        monName: monName, 
        type1: result ? result.type1 : '', 
        type2: result ? result.type2 : ''
    };
    res.json(response);
}

app.get('/get/:pokemonID', onGetMon);
async function onGetMonView(req, res) {
    res.sendFile(resolve(__dirname, 'public', 'index.html'));
}
app.get('*', onGetMonView);