import React, { Component } from "react";
import { connect } from "react-redux";
import orderModel from "../../states/orderModel";

class Orders extends Component {
  componentWillMount() {
    orderModel.getOrders();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.orders.map(order => (
            <li key={order.OrderID}>{order.OrderID}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const msp = state => {
  return { orders: state.orderModel.orders };
};

export default connect(msp)(Orders);
