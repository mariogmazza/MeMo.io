const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  score: [{ 
    type: Number,
    default:0
  }],
  date: {
     type: Date,
      default: Date.now
     }
});

const Score = mongoose.model("Score", scoreSchema);

module.exports = Score;