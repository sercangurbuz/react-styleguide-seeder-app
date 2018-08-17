const express = require("express");
const customerCOntroller = require("../controllers/customerController");
const customerRoute = express.Router();

customerRoute
  .route("/")
  .get(async (req, res) => {
    const customers = await customerCOntroller.customers(req.query);
    res.json({ data: customers });
  })
  .post(async (req, res) => {
    try {
      await customerCOntroller.savecustomer(req.body);
      res.send("success");
    } catch ({ originalError }) {
      res.status(500).send(originalError.message);
    }
  });

customerRoute
  .route("/:id")
  .get(async (req, res) => {
    const { id } = req.params;
    const customer = await customerCOntroller.customerbyId(id);
    res.json({ data: customer });
  })
  .delete(async (req, res) => {
    const { id } = req.params;
    try {
      await customerCOntroller.deletecustomer(id);
      res.send("success");
    } catch ({ originalError }) {
      res.status(500).send(originalError.message);
    }
  });

module.exports = customerRoute;
