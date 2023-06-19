import React, { useState } from "react";

import './index.css'

const ClassList = (props) => {
  // console.log("classList props: ", props);
  const { classData, dispatch } = props;

  const [idIndex, setIdIndex] = useState(0)
  
  function changeClass(id, index) {
    setIdIndex(index)
    dispatch({
      type: "CLASS_ID",
      payload: {
        classId: id
      }
    })
  }
  return (
    <ul className="class-list">
      {classData.map((ele, index) => {
        return (
          <li
          className={idIndex === index ? "red" : ""}
          key={ele}
          onClick={() => changeClass(ele, index)}
        >
          {ele}
        </li>
        )
      })}
    </ul>
  );
};

export default ClassList;
