
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {

if(err)
{
  return console.log('Unable to connect to MongoDb server');
}

console.log('Connected successfully');

const db = client.db('TodoApp');

db.collection('Users').find({age: 28}).toArray().then((docs) => {
console.log(JSON.stringify(docs , undefined , 2));

} , (err) => {
  return console.log('Unable to fetch Todos', err);
})

//client.close();

});
