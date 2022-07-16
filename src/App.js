import React, { useEffect } from "react";
import Header from "./component/Header/Header";
import Main from "./component/HomeMain/HomeMain";
import { Routes, Route, useNavigate } from "react-router-dom";
import AskQuestion from "./component/AskQuestion/AskQuestion";
import ViewPage from "./component/ViewQuestion/ViewPage";
import Auth from "./component/Auth/Auth";
import Users from "./component/Users/Users";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "./API/axios";
import Search from "./component/Search/Search";

function App() {
  const navigate = useNavigate();
  const { accessToken, loading } = useSelector((state) => state.auth);
  const { userDetails } = useSelector((state) => state.currentUser);

  useEffect(() => {
    if (!loading && !accessToken) {
      navigate("/auth");
    }
  }, [accessToken, loading]);

  useEffect(() => {
    if (accessToken && userDetails) {
      axios
        .post("/users/new", { currentUser: userDetails })
        .then((res) => {
          if (res.status === 200) {
            toast.success(res.data.message);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [accessToken, userDetails]);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/ask-question" element={<AskQuestion />} />
        <Route path="/view-question/:id" element={<ViewPage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/users" element={<Users />} />
        <Route path="/search" element={<Search />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
