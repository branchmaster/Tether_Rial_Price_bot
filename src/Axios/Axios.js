const path = require("path");
const axios = require(path.join(__dirname, "./../Axios/Axios"));
const API = process.env.API;
module.exports = axios.create({
  baseURL: API,
  timeout: 1000,
});
