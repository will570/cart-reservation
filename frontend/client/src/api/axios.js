//this file is responsible for sending registered date to the backend 

import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:8800/api", 
  });