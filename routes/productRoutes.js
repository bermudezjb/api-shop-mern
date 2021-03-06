// modules
const express = require("express");
const productControllers = require("../controllers/productControllers");

const router = express.Router(); //method for create
//routes
router
  .route("/")
  .get(productControllers.getAllProducts)
  .post(productControllers.createProduct);

router
  .route("/:id")
  .get(productControllers.getProduct)
  .patch(productControllers.updateProduct)
  .delete(productControllers.deleteProduct);

//export router

module.exports = router;
