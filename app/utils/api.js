"use strict";

import axios from 'axios';

const api = {
  fetchAPI(endpoint) {
    return axios.get(endpoint)
      .then(function(users){
        return users.data;
      })
      .catch(function(err){
        console.log(err);
      })
  }
}

export default api;
