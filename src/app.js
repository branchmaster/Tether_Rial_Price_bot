const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.ROBOT_TOKEN);

module.exports = bot;
