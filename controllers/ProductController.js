const db = require("../models");
const moment = require("moment");
const date = require("date-and-time");
exports.getDetail = async (req, res, next) => {
  const prodId = req.params.prodId;
  const prod = await db.Items.findOne({
    where: {
      ItemID: prodId
    },
    include: [
      {
        model: db.Bids
      },
      {
        model: db.Buyers
      },
      {
        model: db.Sellers
      }
    ]
  });
  const now = new Date();
  date.format(now, "YYYY/MM/DD HH:mm:ss");
  let times = [];
  const timeOut = date.subtract(prod.AuctionEnd, now);
  const timeOuttemp = date.subtract(prod.AuctionEnd, now).toSeconds();
  if (timeOuttemp > 0) {
    const day = timeOut.toDays();
    const hours = timeOut.toHours() - timeOut.toDays() * 24;
    const minutes = timeOut.toMinutes() - timeOut.toHours() * 60;
    const seconds = timeOut.toSeconds() - timeOut.toMinutes() * 60;
    const item = {
      day: day,
      hours: hours,
      minutes: minutes,
      seconds: seconds
    };
    times.push(item);
    Object.assign(prod, item);
  }
  
  const startdate = moment(prod.AuctionStart).format("DD/MM/YYYY");
  res.render("products/productdetail", {
    product: prod,
    times: times,
    date: startdate,
    isLogin: req.isAuthenticated()
  });
};

exports.getAddProduct = (req, res, next) => {
  res.render("products/addproduct", {
    isLogin: req.isAuthenticated()
  });
};

exports.getWatchList = async (req, res, next) => {
  const userLogin = req.session.passport.user;
  const watchlistProduct = await db.WatchLists.findAll({
    where: {
      BuyerID: userLogin.BuyerID
    },
    include: [
      {
        model: db.Items
      }
    ]
  });
  console.log(watchlistProduct);
  res.render("products/watchlist", {
    prods: watchlistProduct,
    isLogin: req.isAuthenticated()
  });
};

