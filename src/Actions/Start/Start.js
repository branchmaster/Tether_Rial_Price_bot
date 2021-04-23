const { Markup } = require("telegraf");
module.exports = async (ctx) => {
  return ctx.reply(
    `
    سلام 👋
    به روبات دریافت قیمت تتر خوش آمدید 😊
    لطفا برای مشخص کردن سایت مورد نظرتان روی گزینه مورد نظر کلیک کنید
    `,
    Markup.keyboard([
      ["نوبیتکس 💵", "💵 tgju", "آذر دیجیتال 💵"],
      ["درباره ما 👤"],
    ]).resize()
  );
};
