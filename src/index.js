const path = require("path");

const dotenv = require("dotenv");
const express = require("express");
dotenv.config();

const bot = require(path.join(__dirname, "app.js"));
const app = express();
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
  bot.launch().then(() => {
    console.log("bot started !");
  });
} else {
  bot.telegram.setWebhook(`${URL}/bot${ROBOT_TOKEN}`);
  app.use(bot.webhookCallback(`/bot${ROBOT_TOKEN}`));
  app.get("/", (req, res, next) => {
    bot
      .launch()
      .then(() => {
        res.end("welcome to bot ");
        next();
      })
      .catch(() => {
        res.end("have a err");
      });
  });
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
