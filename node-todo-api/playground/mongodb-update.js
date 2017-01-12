const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID()
console.log(obj)


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Failed to connect to MongoDB server.');
  }
  console.log('Connected to MongoDB server.')

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5876cc9e72fdc637f84a8ebf')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5876cd54ee2b633828e7088f')
  }, {
    $set: {
      name: 'Benjamin'
    },
    $inc: {
      age: -1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result)
  });


  // db.close();
});
