import axios from "../../API/axios";

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_USERS_REQUEST" });

    const { data } = await axios.get("/users");

    dispatch({ type: "GET_USERS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_USERS_FAIL", payload: error });
  }
};
