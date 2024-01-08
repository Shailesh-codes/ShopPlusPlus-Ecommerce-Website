import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import {
    braintreePaymentController,
    braintreeTokenController,
    createProductController,
    deleteProductController,
    getProductController,
    getSingleProductController,
    productCategoryController,
    productCountController,
    productFilterController,
    productListController,
    productPhotoController,
    realtedProductController,
    searchProductController,
    updateProductController,
} from "../controllers/productController.js";
import formidable from "express-formidable";

const router = express.Router()

// routes
// Create Product route
router.post('/create-product', requireSignIn, isAdmin, formidable(), createProductController);

// Update Product route
router.put('/update-product/:pid', requireSignIn, isAdmin, formidable(), updateProductController);

//get products
router.get("/get-product", getProductController);

//single product
router.get("/get-product/:slug", getSingleProductController);

//get photo
router.get("/product-photo/:pid", productPhotoController);

//delete product
router.delete("/delete-product/:pid", deleteProductController);

/* filter product */
router.post('/product-filters', productFilterController)

// Product Count
router.get("/product-count", productCountController)

// Product Per Page
router.get("/product-list/:page", productListController)

//search product
router.get("/search/:keyword", searchProductController);

//similar product
router.get("/related-product/:pid/:cid", realtedProductController);

// category wise product
router.get("/product-category/:slug", productCategoryController);

// Payment Routes
// token
router.get('/braintree/token', braintreeTokenController)

// Payment
router.post('/braintree/payment', requireSignIn, braintreePaymentController)

export default router;

