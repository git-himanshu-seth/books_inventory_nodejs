const express = require("express");
const ProductController = require("./src/controllers/product_controller");

const server = express();
const productController = new ProductController();
server.get("/", productController?.getProducts);

server.listen("3300", (e) => {
  if (e) console.log(e);
  else {
    console.log("server run on port: 3300");
  }
});
