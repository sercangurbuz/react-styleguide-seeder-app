const sql = require("mssql");

const orders = async params => {
  const request = new sql.Request();

  const where = Object.keys(params).reduce((acc, key) => {
    acc += `${acc ? "AND" : ""} ${key} LIKE '%${params[key]}%' `;
    return acc;
  }, "");

  const statement = `select * from orders ${
    where ? "Where " + where : ""
  } order by orderID`;

  const { recordset: orders } = await request.query(statement);
  return orders;
};

const orderbyId = async id => {
  const request = new sql.Request();
  const {
    recordset: [order]
  } = await request
    .input("OrderID", sql.VarChar, id)
    .query("select * from Orders where OrderID = @OrderID");

  return order;
};

const orderdetailsbyId = async id => {
  const request = new sql.Request();

  const { recordset } = await request
    .input("OrderID", sql.VarChar, id)
    .query("select * from [Order Details] where OrderID = @OrderID");

  return recordset;
};
module.exports = { orders, orderbyId, orderdetailsbyId };
