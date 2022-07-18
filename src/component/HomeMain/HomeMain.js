import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions } from "../../redux/actions/allQuestions";
import Questions from "../Questions/Questions";
import SideBar from "../SideBar/SideBar";
import "./HomeMain.css";

const Main = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth); // Checking if the user is logged in
  const { loading, questions } = useSelector((state) => state.allQuestions); // Gettting all the questions from allQuestions state

  useEffect(() => {
    if (accessToken) {
      // dispatch action is to be fired only if the user is logged In
      dispatch(getAllQuestions());
    }
  }, [dispatch, accessToken]);

  return (
    <div className="home__page">
      <SideBar />
      {/* Checking the allQuestions whether questions are available in state and then rendering the Questions */}
      {!loading && questions.length > 0 && (
        <Questions questions={questions.reverse()} />
      )}
    </div>
  );
};

export default Main;
