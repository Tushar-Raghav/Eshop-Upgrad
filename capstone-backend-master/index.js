const express = require("express");
const { createOrder } = require("./controllers/order");
const { addAddress, getAddresses } = require("./controllers/address");
const {
  saveProduct,
  searchProducts,
  getProductCategories,
  getProductById,
  updateProductDetails,
  deleteProduct
} = require("./controllers/product");
const router = express.Router();
const { signUp, signIn } = require("./controllers/auth");
const admin = require("./middleware/admin");
const auth = require("./middleware/auth");

//Auth
router.post("/api/v1/users", signUp);     //used
router.post("/api/v1/auth", signIn);      //used

//Address
router.post("/api/v1/addresses", auth, addAddress);
router.get("/api/v1/addresses", auth, getAddresses);

//Product
router.post("/api/v1/products", [auth, admin], saveProduct); //used
router.get("/api/v1/products", searchProducts);                
router.get("/api/v1/products/categories", getProductCategories);  
router.get("/api/v1/products/:id", getProductById);           //used
router.put("/api/v1/products/:id", updateProductDetails);     //used
router.delete("/api/v1/products/:id", deleteProduct);         //used

//Order
router.post("/api/v1/orders", auth, createOrder);

module.exports = router;
