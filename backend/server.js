import express from 'express';
import mongodb from 'mongodb';

const app = express();
const dburl = 'mongodb://localhost:27017/rem';

mongodb.MongoClient.connect(dburl, function (err, db) {
 
 app.get('/api/games',function (req, res){
    db.collection('games').find({}).toArray((err,games)=>{
        res.json({games});
    });
 });
app.use((req,res)=>{
res.status(404).json({
  errors:{
    global:"Something went wrong"
  }
});
})
app.get('/', function (req, res) {
  res.send('Hello World');
});

 app.listen(8080, () => console.log('Api is running on 8080'));

});
