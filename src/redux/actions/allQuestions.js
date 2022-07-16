import axios from "../../API/axios";

export const getAllQuestions = () => async (dispatch) => {
  try {
    dispatch({ type: "GET_QUESTIONS_REQUEST" });

    const { data } = await axios.get("/question");

    dispatch({ type: "GET_QUESTIONS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "GET_QUESTIONS_FAIL", payload: error.message });
  }
};
