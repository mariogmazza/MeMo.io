import axios from "axios";

export default {
  // Gets all Users
  getUserPop: function(id) {
    return axios.put("/api/users/pop/"+id);
  },
  // Gets the user with the given id
  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  getScore: function(id) {
    return axios.get("/api/scores/" + id);
  },
  updateScore: function(scoreData) {
    return axios.post("/api/scores/upScore",scoreData);
  },
  // Saves a user score to the database
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  registerScore:function(scoreData){
    return axios.post("/api/scores/registerScore", scoreData);    
  },
  login: function(userData) {
    return axios.post("/api/auth/login", userData);
  },
  logout: function() {
    return axios.get("/api/auth/logout");
  },
  register: function(userData) {
    return axios.post("/api/auth/register", userData);
  },
  updateIdReg:function(scoreId){
    return axios.put("/api/users/updateScoreId",scoreId);
  }


};

