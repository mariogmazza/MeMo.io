const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Users collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/simonuserdb",
  {
    useMongoClient: true
  }
);

const UserSeed = [
  {
    username: "Pepe toto",
    password: "Stephen King",
    email:'email@myemail.com',
    score:  4,
    date: new Date(Date.now())
  },
  {
    username: "William Golding",
    password:"thepass",
    email:'me@you.com',
    score:5,
    date: new Date(Date.now())
  },
  {
    username: "J.D. Salinger",
    password: "The Catcher in the Rye",    
    email:"eme@gmmg.com",
    score:99,
    date: new Date(Date.now())
  },
  {
    username: "Tal M. Klein",
    password: "The Punch Escrow",    
    email:"dmmdmd@fmmfmf.com",
    score:33,
    date: new Date(Date.now())
  },
  {
    username: "Mary Shelley",
    password: "Frankenstein",
    email:"pepep@mama.com",
    score:03,
    date: new Date(Date.now())
  },
  {
    username: "F. Scott Fitzgerald",
    password: "The Great Gatsby",    
    email:"dkdk@fkfkf.edu",
    score:3,
    date: new Date(Date.now())
  },
  {
    username: "Trevor Noah",
    password: "Born a Crime",
    email:"anotheremail@idontknow.com",
    score:66,
    date: new Date(Date.now())
  }
];

db.user
  .remove({})
  .then(() => db.user.collection.insertMany(UserSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
