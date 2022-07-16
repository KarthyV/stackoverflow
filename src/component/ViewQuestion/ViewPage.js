import React, { useEffect } from "react";
import QuestionScreen from "./QuestionScreen";
import SideBar from "../SideBar/SideBar";
import "./ViewPage.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getQuestionById } from "../../redux/actions/viewQuestion";

const ViewPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getQuestionById(id));
  }, [id, dispatch]);

  const { question, loading } = useSelector((state) => state.viewQuestion);

  return (
    <div className="home__page">
      <SideBar />
      {!loading && question && <QuestionScreen question={question} />}
    </div>
  );
};

export default ViewPage;
