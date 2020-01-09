const db = require("../models");
const countProducts = active => {
  return db.Bids.count({
    where: {
      buyerid: 5
    }
  });
};
exports.getActive = async(req, res, next) => {
  const userLogin = req.session.passport.user;
  const activeProduct = await db.Bids.findAll({
    where: {
      BuyerID : userLogin.BuyerID,
      WinStatus: 'NO'
    },
    include: [
      {
        model: db.Items
      }
    ]
  });
  console.log(activeProduct);
  res.render("list/active", {
    prods : activeProduct,
    isLogin: req.isAuthenticated()
  });
};

exports.getWin = async(req, res, next) => {
  const userLogin = req.session.passport.user;
  const winProduct = await db.Bids.findAll({
    where: {
      BuyerID : userLogin.BuyerID,
      Winstatus: 'YES'
    },
    include: [
      {
        model: db.Items
      }
    ]
  });
  console.log(winProduct);
  res.render("list/win", {
    prods : winProduct,
    isLogin: req.isAuthenticated()
  });
};


