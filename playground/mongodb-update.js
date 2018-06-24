
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {

if(err)
{
  return console.log('Unable to connect to MongoDb server');
}

console.log('Connected successfully');

const db = client.db('TodoApp');

db.collection('Todos').findOneAndUpdate({
  _id: new ObjectId('5b2f51b1d2e60f0f8cbf6777')
},{
  $set: {
    completed: true
  }
} ,{
  returnOriginal: false
}).then((result) => {
  console.log(result);
});
//client.close();

});
