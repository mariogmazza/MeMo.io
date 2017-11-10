const db = require("../models");

// Defining methods for the scoresController
module.exports = {
  findAll: function (req, res) {
    if (req.user) {
      db.Score
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  findById: function (req, res) {
    if (req.user) {
      db.Score
        .findById(req.params.id)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  create: function (req, res) {
    if (req.user) {
      db.Score
        .create(req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  update: function (req, res) {
    // console.log("scoresController req.body: "+Object.keys(req.body))
    // console.log(Object.keys(req.body)[0])
    // Object.keys(obj)[0]
    
    
    if (req.user) {
      db.Score
        .findOneAndUpdate({ _id: req.user.score },{$set:{score: Object.keys(req.body)[0]}},{new: true})
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));


      //   Cat.findOneAndUpdate({age: 17}, {$set:{name:"Naomi"}}, {new: true}, function(err, doc){
      //     if(err){
      //         console.log("Something wrong when updating data!");
      //     }
      
      //     console.log(doc);
      // });



    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  remove: function (req, res) {
    if (req.user) {
      db.Score
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  }
};
