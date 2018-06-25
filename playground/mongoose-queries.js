var {mongoose} = require('./../server/db/mongoose');

var {Todo} = require('./../server/models/Todo');

var id = '5b3030cd35bf3d1a841299f3';
/*
Todo.find({_id : id }).then((todos) => {
  console.log('todos',todos);
});

Todo.findOne({_id : id }).then((todo) => {
  console.log('todo',todo);
});
*/
Todo.findById(id).then((todo) => {
  if(!todo)
  {
    return console.log('Id not found');
  }
  console.log('todo by id',todo);
}).catch((e) => {console.log(e);});
