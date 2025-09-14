const path = require("path");

module.exports = class ProductController {
  getProducts(req, res) {
    return res.sendFile(
      path.join(path?.resolve(), "src", "views", "products.html")
    );
  }
};
