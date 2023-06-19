import React, { useState, Component } from "react";
import { Header, Content, Footer } from "../components/public";
import { createStore } from "redux";

const thePrice = 20000;
let reducer = function (state = { price: thePrice }, action) {
  switch (action.type) {
    case "borrow":
      let price = action.payload.price;
      if (price <= 3000) {
        if (state.price - price <= 0) {
          alert('我没钱了')
          return state;
        }
        return { price: state.price - price };
      } else {
        alert('只能借3000以內的')
        return state;
      }
    default:
      return state;
  }
};

let store = createStore(reducer);

const Cont = () => {
  const [price, setPrice] = useState(store.getState().price);

  store.subscribe(() => {
    setPrice(store.getState().price);
  });
  return (
    <div>
      <p>一共多少钱：{thePrice}</p>
      <p>借了多少钱：{thePrice - price}</p>
      <p>还剩多少钱：{price}</p>
    </div>
  );
};

const Button = () => {
  const [borrowPrice, setBorrowPrice] = useState(100);
  const changePrice = (ev) => {
    setBorrowPrice(ev.target.value);
  };
  const handleClick = () => {
    store.dispatch({ type: "borrow", payload: { price: borrowPrice } });
  };
  return (
    <div>
      借多少：
      <input value={borrowPrice} onChange={changePrice} type="number" />
      <button onClick={handleClick}>借钱</button>
    </div>
  );
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
