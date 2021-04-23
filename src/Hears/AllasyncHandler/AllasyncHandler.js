const path = require("path");
const axios = require(path.join(__dirname, "./../../Axios/Axios"));
const SplitedPrice = require(path.join(
  __dirname,
  "./../../Helper/SplitedPrice/SplitedPrice"
));
module.exports = async (ctx, websitename, websitelink) => {
  return axios
    .get(websitename)
    .then((value) => {
      const convertedprice = SplitedPrice(parseInt(value.data.price));
      const Time = value.data.date;
      return ctx.reply(`
        قیمت تتر به تومان💰: ${convertedprice}
        زمان به ساعت جهانی 🌎⏳ :  ${Time}
        لینک سایت 📈 : ${websitelink}
                
      `);
    })
    .catch((err) => {
      return console.log(err);
    });
};
