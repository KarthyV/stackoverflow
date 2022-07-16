import axios from "../../API/axios";

export const getSearchResults = (query) => async (dispatch) => {
  try {
    dispatch({ type: "SEARCH_RESULTS_REQUEST" });

    const { data } = await axios.get(`/search?q=${query}`);

    dispatch({ type: "SEARCH_RESULTS_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "SEARCH_RESULTS_FAIL", payload: error });
  }
};
