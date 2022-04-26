import { ADD_PROPERTY } from "../actionTypes";

const Add_property_Reducer = (
  state = { propertyState: null, response: "" },
  action
) => {
  switch (action.type) {
    case ADD_PROPERTY:
      return action.payload;

    default:
      return state;
  }
};

export default Add_property_Reducer;
