const db = require("../models");

const countProducts = category => {
  return db.Items.count({
    where: {
      category: category
    }
  });
};

exports.getSmartPhone = async (req, res, next) => {
  const page = req.params.catId;
  countProds = await countProducts("smartphone");
  const nPages = Math.ceil(countProds / 6);
  const page_items = [];
  for (i = 1; i <= nPages; i++) {
    const item = {
      value: i,
      isActive: i == page
    };
    page_items.push(item);
  }
  db.Items.findAll({
    where: {
      category: "smartphone"
    },
    limit: 6,
    offset: 6 * (page - 1)
  }).then(products => {
    res.render("category/smartphone", {
      prods: products,
      page_items,
      isLogin: req.isAuthenticated()
    });
  });
};

exports.getWashingMachine = async (req, res, next) => {
  const page = req.params.catId;
  countProds = await countProducts("washingmachine");
  const nPages = Math.ceil(countProds / 6);
  const page_items = [];
  for (i = 1; i <= nPages; i++) {
    const item = {
      value: i,
      isActive: i == page
    };
    page_items.push(item);
  }
  db.Items.findAll({
    where: {
      category: "washingmachine"
    },
    limit: 6,
    offset: 6 * (page - 1)
  }).then(products => {
    res.render("category/washingmachine", {
      prods: products,
      page_items,
      isLogin: req.isAuthenticated()
    });
  });
};

exports.getAC = async (req, res, next) => {
  const page = req.params.catId;
  countProds = await countProducts("ac");
  const nPages = Math.ceil(countProds / 6);
  const page_items = [];
  for (i = 1; i <= nPages; i++) {
    const item = {
      value: i,
      isActive: i == page
    };
    page_items.push(item);
  }
  db.Items.findAll({
    where: {
      category: "ac"
    },
    limit: 6,
    offset: 6 * (page - 1)
  }).then(products => {
    res.render("category/ac", {
      prods: products,
      page_items,
      isLogin: req.isAuthenticated()
    });
  });
};

exports.getLaptop = async (req, res, next) => {
  const page = req.params.catId;
  countProds = await countProducts("laptop");
  const nPages = Math.ceil(countProds / 6);
  const page_items = [];
  for (i = 1; i <= nPages; i++) {
    const item = {
      value: i,
      isActive: i == page
    };
    page_items.push(item);
  }
  db.Items.findAll({
    where: {
      category: "laptop"
    },
    limit: 6,
    offset: 6 * (page - 1)
  }).then(products => {
    res.render("category/laptop", {
      prods: products,
      page_items,
      isLogin: req.isAuthenticated()
    });
  });
};

exports.getAll = async (req, res, next) => {
  const page = req.params.catId;
  countProds = await db.Items.count();
  const nPages = Math.ceil(countProds / 6);
  const page_items = [];
  for (i = 1; i <= nPages; i++) {
    const item = {
      value: i,
      isActive: i == page
    };
    page_items.push(item);
  }
  db.Items.findAll({
    limit: 6,
    offset: 6 * (page - 1)
  }).then(products => {
    res.render("category/electronicdevice", {
      prods: products,
      page_items,
      isLogin: req.isAuthenticated()
    });
  });
};
