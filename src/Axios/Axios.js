const axios = require("axios");
const API = process.env.API;
module.exports = axios.create({
  baseURL: API,
  timeout: 10000,
});
