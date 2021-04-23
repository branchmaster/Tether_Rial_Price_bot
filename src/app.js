const path = require("path");
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.ROBOT_TOKEN);
const Start = require(path.join(__dirname, "./Actions/Start/Start"));
bot.start(Start);
module.exports = bot;
