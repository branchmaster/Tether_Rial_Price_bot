const path = require("path");
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.ROBOT_TOKEN);
const Start = require(path.join(__dirname, "./Actions/Start/Start"));
const About = require(path.join(__dirname, "./Hears/About/About"));
bot.start(Start);
bot.hears("درباره ما 👤", About);
module.exports = bot;
