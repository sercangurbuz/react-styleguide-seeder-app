const sql = require("mssql");

const customers = async params => {
  const request = new sql.Request();

  const where = Object.keys(params).reduce((acc, key) => {
    acc += `${acc ? "AND" : ""} ${key} LIKE '%${params[key]}%' `;
    return acc;
  }, "");

  const statement = `select * from Customers ${
    where ? "Where " + where : ""
  } order by CustomerID`;

  const { recordset: customers } = await request.query(statement);
  return customers;
};

const customerbyId = async id => {
  const request = new sql.Request();
  const {
    recordset: [customer]
  } = await request
    .input("CustomerID", sql.VarChar, id)
    .query("select * from Customers where CustomerID = @CustomerID");

  return customer;
};

const deletecustomer = async id => {
  const request = new sql.Request();
  await request
    .input("CustomerID", sql.VarChar, id)
    .query("delete from Customers where CustomerID = @CustomerID");
};

const savecustomer = async ({
  CustomerID,
  CompanyName,
  ContactName,
  ContactTitle,
  Address,
  City,
  Region,
  PostalCode,
  Country,
  Phone,
  Fax
}) => {
  const request = new sql.Request();
  await request
    .input("CustomerID", sql.VarChar, CustomerID)
    .input("CompanyName", sql.VarChar, CompanyName)
    .input("ContactName", sql.VarChar, ContactName)
    .input("ContactTitle", sql.VarChar, ContactTitle)
    .input("Address", sql.VarChar, Address)
    .input("City", sql.VarChar, City)
    .input("Region", sql.VarChar, Region)
    .input("PostalCode", sql.VarChar, PostalCode)
    .input("Country", sql.VarChar, Country)
    .input("Phone", sql.VarChar, Phone)
    .input("Fax", sql.VarChar, Fax)
    .query(
      "insert into Customers (CustomerID,CompanyName,ContactName,ContactTitle,Address,City,Region,PostalCode,Country,Phone,Fax) " +
        "values (@CustomerID,@CompanyName,@ContactName,@ContactTitle,@Address,@City,@Region,@PostalCode,@Country,@Phone,@Fax)"
    );
};

module.exports = { customers, customerbyId, savecustomer, deletecustomer };
