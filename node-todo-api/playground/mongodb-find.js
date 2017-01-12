const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID()
console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Failed to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.')

  // db.collection('Todos').find({_id: new ObjectID('')}).toArray().then((docs) => {
  //   console.log('Todos: ');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  db.collection('Users').find().count().then((count) => {
    console.log(`Users count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  // db.close();
});
