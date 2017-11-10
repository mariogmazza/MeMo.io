const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passLocalMon = require("passport-local-mongoose");


const UserSchema = new Schema({
  username: {
    type: String
  },
  password: {
     type: String
    },  
  score: {
      type: Schema.Types.ObjectId,
      ref: "Score"
    }
});

UserSchema.plugin(passLocalMon);

const User = mongoose.model("User", UserSchema);

module.exports = User;