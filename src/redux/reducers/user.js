import {SET_USER} from "../actionTypes";

const INTIAL_STATE = {
  user: {},
  log:"yes"
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.data,
      };

    default:
      return state;
  }
};
