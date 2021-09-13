import express from "express";
import * as userController from "../controllers/users.controller.js";
import * as productController from "../controllers/products.controller.js";
const router = new express.Router();

router.get("/users", userController.getUsers);
router.post("/users", userController.createUser);
router.delete("/users/:userId", userController.deleteUser);
router.patch("/users/:userId", userController.updateUser);

router.get("/products", productController.getProducts);
router.post("/pruducts", productController.createProduct);
router.delete("/pruducts/:productsid", productController.deleteProduct);
router.patch("/pruducts/:productsid", productController.updateProduct);

export default router;
