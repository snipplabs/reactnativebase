import {SET_USER} from "../actionTypes";

export const setUser = (data) => {
  return (dispatch) => {
    dispatch({
      type: SET_USER_STATUS,
      data,
    });
  };
};
