import { createStore } from "redux";

let initState = {
  classData: [],
  listData: [],
  classId: "",
};
const reducer = (state = initState, action) => {
  switch (action.type) {
    case "CLASS_LIST_DATA": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.classData = action.payload.classData;
      return newState;
    }
    case "PRO_LIST_DATA": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.listData = action.payload.listData;
      return newState;
    }
    case "CLASS_ID": {
      let newState = JSON.parse(JSON.stringify(state));
      newState.classId = action.payload.classId;
      return newState;
    }
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
