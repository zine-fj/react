import React, { Component } from "react";
import { Header, Content, Footer } from "../components/public";

class MinePage extends Component {
  render() {
    return (
      <div>
        <Header>我的</Header>
        <Content tit="mine title">我的内容</Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default MinePage;
