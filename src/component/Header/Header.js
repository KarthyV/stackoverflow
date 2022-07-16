import React, { useState } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const params = { q: query };
  const { user } = useSelector((state) => state.auth);

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams(params)}`,
      });
    }
  };
  return (
    <div className="header">
      <div onClick={() => navigate("/")} className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Stack_Overflow_logo.svg/220px-Stack_Overflow_logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="header__center">
        <SearchIcon />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search"
          onKeyDown={handleSearch}
        />
      </div>
      <div className="header__right">
        <Avatar src={user?.picture} className="header__logo" />
      </div>
    </div>
  );
};

export default Header;
