import React, { Component } from "react";
import customerModel from "../../states/customerModel";

class Customer extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { customer: {} };
  }

  async componentWillMount() {
    const customer = await customerModel.getCustomerById(
      this.props.match.params.id
    );
    this.setState({ customer });
  }

  render() {
    const { customer } = this.state;
    return (
      <div>
        <div>{customer.CompanyName}</div>
      </div>
    );
  }
}

export default Customer;
