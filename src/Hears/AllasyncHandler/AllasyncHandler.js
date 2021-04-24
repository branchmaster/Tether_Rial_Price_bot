const path = require("path");
const axios = require(path.join(__dirname, "./../../Axios/Axios"));
const SplitedPrice = require(path.join(
  __dirname,
  "./../../Helper/SplitedPrice/SplitedPrice"
));
const { NumberToWords } = require("@persian-tools/persian-tools");

module.exports = async (ctx, websitename, websitelink) => {
  return axios
    .get(websitename)
    .then((value) => {
      const convertedprice = SplitedPrice(parseInt(value.data.price));
      const convertedpricetoword = `${NumberToWords.convert(
        value.data.price
      )} تومان`;
      const Time = value.data.date;
      return ctx.reply(
        `قیمت تتر به تومان (عددی)💰: ${convertedprice}\nقیمت تتر به تومان (حروفی) 💰 : ${convertedpricetoword}\nزمان به ساعت جهانی 🌎⏳ :  ${Time}\nلینک سایت 📈 : ${websitelink}`
      );
    })
    .catch((err) => {
      return console.log(err);
    });
};
