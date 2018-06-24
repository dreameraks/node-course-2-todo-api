
const {MongoClient , ObjectId} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err , client) => {

if(err)
{
  return console.log('Unable to connect to MongoDb server');
}

console.log('Connected successfully');

const db = client.db('TodoApp');

db.collection('Users').insertOne({
  name: 'Abhishek Kumar Singh' ,
  age: 28 ,
  location: 'India'
} , (err , result) => {
  if(err)
  {
    return console.log('Error connecting to users' , err);
  }

  console.log(JSON.stringify(result.ops , undefined , 2));
})

/*


db.collection('Todos').insertOne({
  text:'Something to do' ,
  completed : false
},(err , result) => {

  if(err)
  {
  return   console.log('Unable to insert Todo' , err);
  }

  console.log(JSON.stringify(result.ops , undefined , 2));

});
*/
client.close();

});
