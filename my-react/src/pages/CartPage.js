import React, { useEffect } from "react";

import { Header, Content, Footer } from "../components/public";
import ProList from "../components/ProList";
import ClassList from "../components/ClassList";

import { connect } from "react-redux";

// 获取狗狗分类
const getClassData = (props) => {
  fetch("https://dog.ceo/api/breed/hound/list")
    .then((res) => res.json())
    .then((res) => {
      console.log("分类：",props, res);
      const { message } = res;
      getProListDataFn(props, props?.classId || message[0]);
      props.dispatch({
        type: "CLASS_LIST_DATA",
        payload: {
          classData: message,
        },
      });
    });
};

// 获取狗狗对应分类列表
const getProListDataFn = (props, classId) => {
  fetch(`https://dog.ceo/api/breed/hound/${classId}/images/random/4`)
    .then((res) => res.json())
    .then((res) => {
      // console.log("狗狗列表详情：", res);
      const { message } = res;
      props.dispatch({
        type: "PRO_LIST_DATA",
        payload: {
          listData: message,
        },
      });
    });
};

const CartPage = (props) => {
  // props 
  const { classData, listData, dispatch } = props || {};
  
  useEffect(() => {
    console.log("useEffect - props: ", props);

    getClassData(props);
  }, [props?.classId]);

  return (
    <>
      <Header>购物车</Header>
      <Content>
        <ClassList classData={classData} dispatch={dispatch} />
        <ProList listData={listData} />
      </Content>
      <Footer></Footer>
    </>
  );
};

// 需要把store里面的state传递给组件，而且还要监听store里面的state

// 传递store的state给组件的props
function mapStateToProps(state) {
  const { classData, classId, listData } = state;
  return {
    classData,
    listData,
    classId,
  };
}

export default connect(mapStateToProps)(CartPage);
