const path = require("path");

const dotenv = require("dotenv");
dotenv.config();

const bot = require(path.join(__dirname, "app.js"));
const { MODE, URL, ROBOT_TOKEN, API } = process.env;
const PORT = process.env.PORT || 3000;
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
} else {
  bot.telegram.setWebhook(`${URL}/bot${ROBOT_TOKEN}`);
  bot.startWebhook(`/bot${ROBOT_TOKEN}`, null, PORT);
}
bot.launch().then(() => {
  console.log("bot started !");
});
