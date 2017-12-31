const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient

const dbConnection = async () => {
  const dbConnectionString = 'mongodb://localhost:27017/outdoor-activity-finder';
  try { return await MongoClient.connect(dbConnectionString); } catch(error) { return error; }
}

router.get('/users', (req,res) => {
  dbConnection().then((db) => {
    if (db.name === 'MongoError') {
      let error = new Error();
      error.name = db.name;
      error.message = db.message;
      error.stack = db.stack;
      res.send(error);
    } else {
      db.collection('users').find({}).toArray((error,users) => {
        if (error) { error.type = "find error"; res.send(error); }
        else {
          db.close();
          res.set('Access-Control-Allow-Origin', '*').send(users);
        }
      });
    }
  });
});

module.exports = router;