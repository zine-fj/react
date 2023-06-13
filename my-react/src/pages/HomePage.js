import React, { useState, Component } from "react";
import { Header, Content, Footer } from "../components/public";
import { createStore } from "redux";

let reducer = function (state = { price: 20000 }, action) {
  switch (action.type) {
    case "borrow1000":
      console.log("借了1000");
      return { price: state.price - 1000 };
    default:
      return state;
  }
};

let store = createStore(reducer);

const handleClick = () => {
  store.dispatch({ type: "borrow1000" });
};

const Cont = () => {
  const [price, setPrice] = useState(store.getState().price);
  store.subscribe(() => {
    setPrice(store.getState().price);
  });
  return <div>{price}</div>;
};

const Button = () => {
  return <button onClick={handleClick}>借钱</button>;
};

class HomePage extends Component {
  render() {
    return (
      <div>
        <Header hasBack={false} rightCont={"Login"} rightUrl={"/login"}>
          首页
        </Header>
        <Content>
          <Cont />
          <Button />
        </Content>

        <Footer></Footer>
      </div>
    );
  }
}

export default HomePage;
