import express from 'express';
import mongodb from 'mongodb';
import bodyParser from 'body-parser';

const app = express();
app.use(bodyParser.json());
const dburl = 'mongodb://localhost:27017/rem';

function validate(data){
  let errors = {};
        if (data.title === '') 
            errors.title = "Can't be empty";
        if (data.cover === '') 
            errors.cover = "Can't be empty";
       
        const isValid = Object.keys(errors).length === 0;
        return {errors ,isValid};
       
}

mongodb.MongoClient.connect(dburl, function (err, db) {

    app.get('/api/games', function (req, res) {
        db.collection('games').find({}).toArray((err, games) => {
            res.json({games});
          });
      });

    app.post('/api/games', (req, res) => {
      const {errors, isValid} = validate(req.body);
      if (isValid) {
        const {title, cover} = req.body;
        db.collection('games').insert({title, cover},(err,result)=>{
          if(err){
              res.status(500).json({errors :{global:"something went wrong"}})
          } else{
              res.json({game:result.ops[0] });
          }
        });
      } else {
        res.status(400).json({errors});
      }

    })

    app.use((req, res) => {
      res.status(404).json({
          errors: {
            global: "Something went wrong"
          }
        });
    })

    app.get('/api/games/:_id', function (req, res) {
     db.collection('games').findOne({_id: new mongodb.ObjectID(req.params._id)},(err,game)=>{
       res.json({game});
     })
    });

    app.get('/', function (req, res) {
      res.send('Hello World');
    });

    app.listen(8080, () => console.log('Api is running on 8080'));

  });
