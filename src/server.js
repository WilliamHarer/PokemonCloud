const express = require('express');
const app = express();

app.get('/saveTeam', function (req, res){
    //Save stuff to mongo return ID
    return res.send('TeamIDfromMongo')
})
app.get('/getTeam',function(req,res){
    //get stuff from mongo based on ID
    return res.send('teamResultBasedOnID')
})
app.listen(8080)