import axios from "axios";
const BASEURL = "/api/breed/";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + "/images");
  }
};
