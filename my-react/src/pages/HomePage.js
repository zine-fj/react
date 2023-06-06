import React, { Component } from "react";
import { Header, Content, Footer } from "../components/public";

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header>首页</Header>
        <Content tit="home tit">首页内容</Content>
        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
