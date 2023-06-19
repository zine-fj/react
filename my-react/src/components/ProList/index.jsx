import React from "react";
import { Link } from "react-router-dom";

import "./index.css";

const ProList = (props) => {
  // console.log("prolist: ", props);
  const { listData } = props || {};
  return (
    <ul className="pro-list">
      {listData.map((ele) => {
        return (
          <Link to={`/detail?src=${ele}&id=1`} key={ele}>
            <img src={ele} alt="" />
          </Link>
        );
      })}
    </ul>
  );
};

export default ProList;
