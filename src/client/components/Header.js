import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <NavLink to="/customers">Customers</NavLink> |
        <NavLink to="/orders">Orders</NavLink>
      </div>
    );
  }
}

export default Header;
