const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const bot = require(path.join(__dirname, "app.js"));
const { MODE, URL, ROBOT_TOKEN, API } = process.env;

if (!URL) {
  throw Error("your not set URL on .env file");
}
if (!ROBOT_TOKEN) {
  throw Error("your not set ROBOT_TOKEN on .env file");
}
if (!API) {
  throw Error("your not set API on .env file");
}

if (MODE === "develop") {
  const { Telegraf } = require("telegraf");
  bot.use(Telegraf.log());
}
bot.launch().then(() => {
  console.log("bot started !");
});
