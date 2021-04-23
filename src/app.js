const path = require("path");
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.ROBOT_TOKEN);
const Start = require(path.join(__dirname, "./Actions/Start/Start"));
const About = require(path.join(__dirname, "./Hears/About/About"));
const AllasyncHandler = require(path.join(
  __dirname,
  "./Hears/AllasyncHandler/AllasyncHandler"
));
bot.start(Start);
bot.hears("درباره ما 👤", About);
bot.hears("نوبیتکس 💵", (ctx) => {
  return AllasyncHandler(ctx, "/nobitex", "nobitex.ir/");
});
bot.hears("💵 tgju", (ctx) => {
  return AllasyncHandler(ctx, "/tgju", "tgju.org/");
});
bot.hears("ارز دیجیتال 💵", (ctx) => {
  return AllasyncHandler(ctx, "arzdigital", "arzdigital.com/");
});
module.exports = bot;
