import Axios from "axios";
const API_URL = "https://rickandmortyapi.com/api";

const getData = function(url) {
  return Axios.get(url).then(response => {
    return response.data;
  });
};

export default {
  getData: getData
};
