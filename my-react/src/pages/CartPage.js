import React, { Component } from "react";
import { Header, Content, Footer } from "../components/public";

class CartPage extends Component {
  render() {
    return (
      <div>
        <Header>购物车</Header>
        <Content>购物车的内容</Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default CartPage;
