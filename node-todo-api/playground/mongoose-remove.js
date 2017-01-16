const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

Todo.remove({}).then((result) => {
  console.log(result)
});

Todo.findOneAndRemove({_id: '587c150c32836e4f39210112'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('587c150c32836e4f39210112').then((todo) => {
  console.log(todo);
});
