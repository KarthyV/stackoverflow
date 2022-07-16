import axios from "../../API/axios";

export const getQuestionById = (id) => async (dispatch) => {
  try {
    dispatch({ type: "VIEW_QUESTION_REQUEST" });

    const { data } = await axios.get(`/question/${id}`);

    dispatch({ type: "VIEW_QUESTION_SUCCESS", payload: data[0] });
  } catch (error) {
    dispatch({ type: "VIEW_QUESTION_FAIL", payload: error });
  }
};
