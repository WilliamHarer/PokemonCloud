const express = require('express');
const app = express();

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
app.get('/saveTeam', function (req, res){
    //Save stuff to mongo return ID
    return res.send('TeamIDfromMongo')
})
app.get('/getTeam',function(req,res){
    //get stuff from mongo based on ID
    return res.send('teamResultBasedOnID')
})
app.listen(8080)