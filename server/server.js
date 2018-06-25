
var express = require('express');

var bodyParser = require('body-parser');
var ObjectId = require('mongodb').ObjectId;


var {mongoose} = require('./db/mongoose.js');
var  {Todo} = require('./models/todo.js');
var {User} = require('./models/user.js');

const port = process.env.PORT || 3000 ;


var app = express();

app.use(bodyParser.json());

app.get('/todos/:id',(req , res) => {

  var id = req.params.id;
  if(!ObjectId.isValid(id))
  {
    return res.status(400).send();
  }

  Todo.findById(id).then((todos) => {
    if(!todos)
    {
       return res.status(404).send();
    }

    return res.send(todos);

  }, (err) => {
       res.status(400).send();
  });
  res.send(req.params);
});


app.get('/todos',(req , res) => {
  Todo.find().then((docs) => {
    res.send({
      todos:docs
    })
  } , (err) => {
    res.status(400).send(err);
  });

});

app.post('/todos',(req , res) => {

  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((docs) => {
    res.send(docs);
  } , (err) => {
    res.status(400).send(err);
  });
});

app.listen(port  , () => {
  console.log('Started on port');
});
