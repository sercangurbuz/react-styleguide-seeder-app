const express = require("express");
const sql = require("mssql");
const orderController = require("../controllers/orderController");
const orderRoute = express.Router();

orderRoute.route("/").get(async (req, res) => {
  const orders = await orderController.orders(req.query);
  res.json({ data: orders });
});

orderRoute.route("/:id").get(async (req, res) => {
  const { id } = req.params;
  const order = await orderController.orderbyId(id);
  const OrderDetails = await orderController.orderdetailsbyId(id);
  res.json({ data: { ...order, OrderDetails } });
});

module.exports = orderRoute;
