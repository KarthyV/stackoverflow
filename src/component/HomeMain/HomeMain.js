import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllQuestions } from "../../redux/actions/allQuestions";
import Questions from "../Questions/Questions";
import SideBar from "../SideBar/SideBar";
import "./HomeMain.css";

const Main = () => {
  const dispatch = useDispatch();
  const { accessToken } = useSelector((state) => state.auth);
  const { loading, questions } = useSelector((state) => state.allQuestions);

  useEffect(() => {
    if (accessToken) {
      dispatch(getAllQuestions());
    }
  }, [dispatch, accessToken]);

  return (
    <div className="home__page">
      <SideBar />
      {!loading && questions.length > 0 && (
        <Questions questions={questions.reverse()} />
      )}
    </div>
  );
};

export default Main;
