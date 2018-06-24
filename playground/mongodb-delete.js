
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {

if(err)
{
  return console.log('Unable to connect to MongoDb server');
}

console.log('Connected successfully');

const db = client.db('TodoApp');

//deleteMany
/*
db.collection('Users').deleteMany({age : 28}).then((result) => {
console.log(result);
});
*/
//deleteOne
/*
db.collection('Users').deleteOne({age : 28}).then((result) => {
  console.log(result);
});
*/
//findOneandDelete

db.collection('Users').findOneAndDelete({age : 28}).then((result) => {
  console.log(result);
});

//client.close();

});
