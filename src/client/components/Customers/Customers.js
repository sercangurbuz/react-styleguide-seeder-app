import React, { Component } from "react";
import customerModel from "../../states/customerModel";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Customers extends Component {
  componentWillMount() {
    customerModel.getCustomers();
  }

  render() {
    return (
      <div>
        <h1>Customers...</h1>
        <ul>
          {this.props.customers.map(customer => (
            <li key={customer.CustomerID}>
              <Link to={"/customers/" + customer.CustomerID}>{customer.CompanyName}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const msp = state => {
  return { customers: state.customerModel.customers };
};
export default connect(msp)(Customers);
