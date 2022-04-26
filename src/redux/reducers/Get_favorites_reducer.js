import { GET_FAVORITES } from "../actionTypes";

const Get_favorites_reducer = (
  state = { propertyState: [], response: "" },
  action
) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {favorites :action.payload};

    default:
      return state;
  }
};

export default Get_favorites_reducer;
