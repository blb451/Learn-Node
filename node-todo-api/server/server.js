var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.listen(3000, () => {
  console.log('Started on port 3000.')
});

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=> {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});


// var user = new User({
//   email: 'fake@email.com'
// });
//
// user.save().then((doc) => {
//   console.log('Saved user', doc);
// }, (e)=> {
//   console.log('Unable to save item')
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save item')
// });
//
// var otherTodo = new Todo({
//   text: 'Drink coffee',
//   completed: true,
//   completedAt: 1
// });
//
// otherTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e) => {
//   console.log('Unable to save item')
// });