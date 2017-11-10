const db = require("../models");

// Defining methods for the UsersController
module.exports = {
  findAll: function (req, res) {
    if (req.user) {
      db.User
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  findById: function (req, res) {
    if (req.user) {
      db.User
        .findById(req.params.id)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  create: function (req, res) {
    if (req.user) {
      console.log(req.user);
      console.log(req.body);
      // db.Score.create(req.body)
      db.User
        .create(req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  update: function (req, res) {
    if (req.user) {
      console.log("update in userController scoreID: "+req.body.scoreID);
      console.log("update in userController userID: "+req.body.userID);
      
      db.User
        .findOneAndUpdate({ _id: req.body.userID },{ $push: {  "score": req.body.scoreID}} , { new: true })
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

        // db.newGoal
        // .findOneAndUpdate({ _id: req.body.noteId },{ $push: {  "vent": req.body._id}} , { new: true })

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  remove: function (req, res) {
    if (req.user) {
      db.User
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  populate:function(req,res){
    if(req.user){
    db.User
    .findOne({ _id: req.params.id })
    .populate("Score").exec(function(error, dbUser) {

      if(error){
        throw error
        // console.log(error);
      }
      res.json(dbUser)
    // .then(function(dbUser) {
    //   res.json(dbUser);
    // })
    // .catch(function(err) {
    //   res.json(err);


    })

  }
  else { res.json({ error: "Please login", statusCode: 401 }) }
}
  
};
