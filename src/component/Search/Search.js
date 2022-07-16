import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import "./Search.css";
import QuestionCard from "../Questions/QuestionCard";
import { getSearchResults } from "../../redux/actions/searchResults";

const Search = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("q");

  useEffect(() => {
    dispatch(getSearchResults(searchQuery));
  }, [dispatch, searchQuery]);

  const { loading, result } = useSelector((state) => state.searchResults);

  return (
    <div className="home__page">
      <SideBar />
      <div className="users">
        <div className="users_top">
          <div className="users_header">
            <h1>Showing results for : {searchQuery}</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
          </div>
        </div>

        {!loading && result.length > 0 ? (
          result.map((question) => {
            return <QuestionCard question={question} key={question._id} />;
          })
        ) : (
          <h3 style={{ marginLeft: "20px" }}>
            No Results found, Please try something else...
          </h3>
        )}
      </div>
    </div>
  );
};

export default Search;
