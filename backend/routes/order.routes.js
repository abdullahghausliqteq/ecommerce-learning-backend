const express = require("express")
const { createNewOrder, getSingleOrder, myOrders } = require("../controllers/order.controller")
const { isAuthenticated, authorizedRoles } = require("../middlewares/auth")
const router = express.Router()

router.route("/new").post(isAuthenticated, createNewOrder);
router.route("/my-order").get(isAuthenticated, myOrders);
router.route("/:id").get(isAuthenticated, authorizedRoles("admin"), getSingleOrder)


module.exports = router